import { useState } from "react";
import { resetPassword } from "../../services/apis";
import { FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";

export default function EmailVerification() {
  const queryParams = new URLSearchParams(window.location.search);
  const email = queryParams.get("email");
  const token = queryParams.get("token");
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = async () => {
    try {
      const response = await resetPassword(email, token, newPassword);
      toast.success(response.message);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FaEnvelope className="text-6xl text-blue-500 mb-4" />
      <h2 className="text-3xl font-bold mb-4">Reset Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="w-full max-w-md px-4 py-2 border rounded-md mb-4"
      />
      <button
        onClick={handleResetPassword}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Reset Password
      </button>
    </div>
  );
}
