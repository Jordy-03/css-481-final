import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

import { useAuthStore } from "../store/useAuthStore";
import { formatTime } from "../lib/utils";

const ChatWindow = () => {
    const { 
        messages, 
        getMessages, 
        messagesLoading, 
        selectedUser, 
        listenToMessages,
        unlistenMessages
    } = useChatStore();
    const {authUser} = useAuthStore();
    const messageEndRef = useRef(null); // Reference to last message for auto scrolling

    // Fetch messages when the selected user changes
    useEffect(() => {
        getMessages(selectedUser._id);
        listenToMessages();

        return () => unlistenMessages();
    }, [selectedUser._id, getMessages, listenToMessages, unlistenMessages]);

    // Scroll to most recent message
    useEffect(() => {
        if (messageEndRef.current && messages) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages]);

    return (
        <div className="flex-1 flex flex-col overflow-auto">
            <ChatHeader />

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message._id}
                        className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
                        ref={messageEndRef} // auto scroll to last message
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