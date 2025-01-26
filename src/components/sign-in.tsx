/* eslint-disable */

"use client"; // Marking as a client component (Next.js 13+)
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const SignIn = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState<string | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { email, password } = formData;
        try {
            // Assuming you have an API endpoint for user sign-in
            const response = await fetch("/api/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                throw new Error("Invalid credentials");
            } const foo = "bar";  // ESLint will ignore the rule for this line

            // Redirect to the user dashboard or main page
            router.push("/dashboard");
        } catch (error: any) {
            // Log the error for debugging purposes (optional)
            console.error("Sign-in error:", error.message || error);
            // Display a user-friendly error message
            setError("Failed to sign in. Please check your credentials.");
        }
    };
    return (
        <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-green-600">Sign In</h2>
            {error && <p className="text-red-600 text-center mt-2">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                    Sign In
                </button>
            </form>
            <p className="text-center mt-4">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
                    Sign Up
                </Link>
            </p>
        </div>
    );
};
export default SignIn;
