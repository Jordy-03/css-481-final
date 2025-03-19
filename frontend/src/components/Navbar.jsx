import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, User } from "lucide-react";

const NavBar = () => {
    const { logout, authUser } = useAuthStore(); // Destructure logout and authUser from useAuthStore
    return (
        <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-10 
        backdrop:-blur-lg bg-base-100/90">
            { /* container */}
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* left side */}
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2">
                            MALARKY!
                        </Link>
                    </div>
                </div>
                {/* right side */}
                <div className="flex items-center gap-2">
                    {/* settings? */}

                    {/* user profile */}
                    {authUser && (
                        <>
                            <Link to="/profile" className="btn btn-sm gap-2">
                                <User className="size-5" />
                                <span className="hidden sm:inline">Profile</span>
                            </Link>

                            <button className="flex gap-2 items-center" onClick={logout}>
                                <LogOut className="size-5" />
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
};

export default NavBar;