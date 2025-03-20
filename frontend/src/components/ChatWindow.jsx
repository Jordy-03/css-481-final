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

    // Get messages for selected user
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
            <ChatHeader />      {/* Display ChatHeader */}

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message._id}
                        className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
                        ref={messageEndRef} // auto scroll to last message
                    > 
                        <div className="chat-image avatar">
                            {/* Display sender's avatar */}
                            <div className="size-10 rounded-xl border">
                                <img 
                                    src={message.senderId === authUser._id ? 
                                            authUser.profilePicture || "/vite.svg" 
                                            : 
                                            selectedUser.profilePicture || "/vite.svg"} 
                                    alt="Profile picture" />
                            </div>
                        </div>
                        <div className="chat-header mb-1">
                            <time className="text-xs opacity-50 ml-l">
                                {formatTime(message.createdAt)}
                            </time>
                        </div>
                        {/* Chat Bubble */}
                        <div className="chat-bubble flex flex-col">
                            {/* Display message image */}
                            {message.image && (
                                <img 
                                    src={message.image} 
                                    alt="chat" 
                                    className="sm:max-w-[200px] rounded-md mb-2" 
                                />
                            )}
                            {/* Display message text */}
                            {message.text && <p>{message.text}</p>}
                        </div>
                    </div>

                ))}
            </div>

            <MessageInput />    {/* Display MessageInput */}
        </div>
    )
};
export default ChatWindow;
