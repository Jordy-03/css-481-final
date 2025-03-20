import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { useAuthStore } from "../store/useAuthStore";
import { formatTime } from "../lib/utils";

const ChatWindow = () => {
    const { messages, getMessages, messagesLoading, selectedUser} = useChatStore();
    const {authUser} = useAuthStore();

    // Fetch messages when the selected user changes
    useEffect(() => {
        getMessages(selectedUser._id);
    }, [selectedUser._id, getMessages]);

    return (
        <div className="flex-1 flex flex-col overflow-auto">
            <ChatHeader />

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message._id}
                        className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
                    > 
                        <div className="chat-header mb-1">
                            <span className="font-medium mr-2">
                                {message.senderId === authUser._id ? authUser.fullName : selectedUser.fullName}
                            </span>
                            <time className="text-xs opacity-50">
                                {formatTime(message.createdAt)}
                            </time>
                        </div>
                        <div className="chat-bubble">
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <MessageInput />
        </div>
    )
};

export default ChatWindow;