import { useAuthStore } from "../store/useAuthStore";
import { Mail, User } from "lucide-react"

const ProfilePage = () => {
    const { authUser } = useAuthStore();

    return (
        <div className="h-screen pt-20">
            <div className="max-w-2xl mx-auto p-4 py-8">
                {/* Profile card (Grey box surrounding profile section) */}
                <div className="bg-base-300 rounded-xl p-6 space-y-8">
                    {/* Profile section */}
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold">Profile Info</h1>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex justify-between gap-8">
                            {/* Profile info */}
                            <div className="space-y-6">
                                {/* Full Name */}
                                <div className="space-y-1.5">
                                    <div className="text-lg text-zinc-400 flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        Full Name
                                    </div>
                                    <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser.fullName}</p>
                                </div>
                                {/* Email Address */}
                                <div className="space-y-1.5">
                                    <div className="text-lg text-zinc-400 flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Email Address
                                    </div>
                                    <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.email}</p>
                                </div>
                            </div>

                            <div className="mt-6 bg-base-300 rounded-xl p-6">
                                <h2 className="text-lg font-medium mb-4">Account Information</h2>
                                <div className="space-y-3 text-lg">
                                    <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                                        <span>Joined Since:</span>
                                        <span>{authUser.createdAt?.split("T")[0]}</span>
                                    </div>
                                    <div className="flex items-center justify-betwen py-2">
                                        <span>Account Status:</span>
                                        <span className="text-green-500">Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfilePage;