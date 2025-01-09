import { motion } from "framer-motion";
import { useAuthStoreAPI } from "../API/authStoreAPI";
import { formatDate } from "../utils/date";
import { useEffect, useState } from "react";

const UserDashboard = () => {
    const { user, logout } = useAuthStoreAPI();

    useEffect(() => {
        const timer = setTimeout(() => {
        }, 3000);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, [user]);

    const handleLogout = () => {
        logout();
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg z-50"
        >
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
                Dashboard
            </h2>

            <div className="space-y-6">
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Profile Information</h3>
                    <p className="text-gray-800">Name: {user.name}</p>
                    <p className="text-gray-800">Email: {user.email}</p>
                    <p className="text-gray-800">Gender: {user.gender}</p>
                    <p className="text-gray-800">DOB: {user.dob}</p>
                </motion.div>
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Account Activity</h3>
                    <p className="text-gray-800">
                        <span className="font-bold">Joined: </span>
                        {new Date(user.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    <p className="text-gray-800">
                        <span className="font-bold">Last Login: </span>
                        {formatDate(user.lastLogin)}
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-4"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                >
                    Logout
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default UserDashboard;