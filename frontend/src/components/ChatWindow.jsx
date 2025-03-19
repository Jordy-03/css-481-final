import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
    const { messages, getMessages, messagesLoading, selectedUser} = useChatStore();

    // Get messages for selected user
    useEffect(() => {
        getMessages(selectedUser._id);
    }, [selectedUser._id, getMessages]);

    return (
        <div className="flex-1 flex flex-col overflow-auto">
            <ChatHeader />      {/* Display ChatHeader */}

            <p>Messages...</p>

            <MessageInput />    {/* Display MessageInput */}
        </div>
    )
};
export default ChatWindow;