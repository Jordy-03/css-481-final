import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const {login, loggingIn} = useAuthStore();

    // Handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        login(formData);
    }

    return <div className="min-h-screen flex flex-col items-center justify-center">
        {/* Sign up form */}
        <h1 className="text-3xl font-bold">Welcome to Malarkey!</h1>
        <p className="text-gray-500">Log in to your account!</p>
        <br />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="form-control">
                <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input
                        type="text"
                        className={"grow"}
                        placeholder="test@site.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </label>
            </div>

            {/* Password */}
            <div className="form-control">
                <label className="input input-bordered flex items-center gap-2">
                    Password
                    <input
                        type={showPassword ? "text" : "password"}
                        className="grow"
                        placeholder="******"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                    >

                    </button>
                </label>
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loggingIn}
            >
                {loggingIn ? "Signing up..." : "Sign in"}
            </button>
        </form>
        <div className="text-center">
            <p className="text-base-content/60">
                Don't have an account?{" "}
                <Link to="/signup" className="link link-primary">
                    Sign up!
                </Link>
            </p>
        </div>
    </div >
};
export default LoginPage;