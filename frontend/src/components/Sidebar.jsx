import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import { Users } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

const Sidebar = () => {
    const { getUsers, users, selectedUser, setSelectedUser, usersLoading } = useChatStore(); // Call useChatStore hook to access selectedUser

    const { onlineUsers } = useAuthStore()

    useEffect(() => {
        getUsers();
    }, [getUsers])

    return (
        <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
            <div className="border-b border-base-300 w-full p-5">
                <div className="flex items-center gap-2">
                    <Users className="size-6" />
                    <span className="font-medium hidden lg:block">Contacts</span>
                </div>
                <div className="overflow-y-auto w-full py-3">
                    {users.map((user) => (
                        <button
                            key={user._id}
                            onClick={() => setSelectedUser(user)}   // Updates selectedUser state
                            className={`
                            w-full p-3 flex items-center gap-3
                            hover:bg-base-300 transition-colors
                            ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}    
                                
                            `}

                        >
                            <div className="relative mx-auto lg:mx-0">
                                <img
                                    src={user.profilePicture || "/vite.svg"}
                                    alt={user.name}
                                    className="rounded-full w-12 h-12"
                                />
                                {onlineUsers.includes(user._id) && (
                                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-success-500 
                                        rounded-full border-2 border-white"
                                    />
                                )}
                            </div>
                                
                            {/* User info */}
                            <div className="hidden lg:block text-left min-w-0">
                                <div className="font-medium truncate">{user.fullName}</div>
                                <div className="text-sm truncate text-base-300">
                                    {/* Display online or offline status */}
                                    {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                                </div>
                            </div>

                        </button>

                    ))}
                    
                </div>
            </div>
        </aside>
    )
}
export default Sidebar;