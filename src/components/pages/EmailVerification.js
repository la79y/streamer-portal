import { useEffect, useState } from "react";
import { verifyEmail } from "../../services/apis";
import { FaEnvelope } from "react-icons/fa";

export default function EmailVerification() {
  const [verificationMessage, setVerificationMessage] = useState("");

  useEffect(() => {
    const verify = async () => {
      try {
        const queryParams = new URLSearchParams(window.location.search);
        const email = queryParams.get("email");
        const token = queryParams.get("token");

        const response = await verifyEmail(email, token);
        setVerificationMessage(response.message);
      } catch (error) {
        setVerificationMessage("Email verification failed");
      }
    };
    verify();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FaEnvelope className="text-6xl text-blue-500 mb-4" />
      <h2 className="text-3xl font-bold mb-4">Email Verification</h2>
      <p className="text-lg">{verificationMessage}</p>
    </div>
  );
}
