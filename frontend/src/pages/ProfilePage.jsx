import { useAuthStore } from "../store/useAuthStore";

const ProfilePage = () => {
    const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();

    const handleImageUpload = async (e) => {

    }

    return (
        <div className="h-scree pt-20">
            <div className="max-w-2xl mx-auto p-4 py-8">
                <div className="bgt-base-300 rounded-xl p-6 space-y-8">
                    {/* Profile info section */}
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold">Profile</h1>
                        <p className="mt-2">Your profile info:</p>
                    </div>
                    {/* Avator upload section */}
                    
                </div>
            </div>
        </div>
    )
};

export default ProfilePage;