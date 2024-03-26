import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LoginDesign from "../../assets/images/login-design.svg";
import {
  SignupPagePath,
  StreamCreationFormPagePath,
} from "../../routers/paths";
import { loginInitialValues } from "../../constants";
import { loginValidationSchema } from "../../utils/validation/loginValidationSchema";
import { loginUser, resetPasswordRequest } from "../../services/apis";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        const data = await loginUser(values);
        localStorage.setItem("token", data.token);
        const decoded = jwtDecode(data.token);
        localStorage.setItem("userId", decoded.userId);
        window.location.href = StreamCreationFormPagePath();
      } catch (err) {
        toast.error(err.response.data.error);
      }
    },
  });

  const handleForgotPassword = async () => {
    try {
      await resetPasswordRequest(email);
      toast.success("Password reset link sent to your email");
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <div className="mb-8">
        <img src={LoginDesign} alt="Welcome" className="rounded-lg" />
        <h1 className="text-3xl text-center font-bold mt-10 text-blue-500">
          Login
        </h1>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 w-full max-w-2xl"
      >
        <div>
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder="Username"
            className={`w-full p-2 border rounded ${
              formik.touched.username && formik.errors.username
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.username && formik.errors.username ? (
            <p className="text-red-500 text-sm">{formik.errors.username}</p>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            className={`w-full p-2 border rounded ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Log In
        </button>
      </form>
      <div className="mt-4">
        <p
          onClick={() => setShowModal(true)}
          className="text-blue-500 underline cursor-pointer"
        >
          Forgot your password?
        </p>
      </div>
      <p className="mt-4">
        Don't have an account?
        <Link to={SignupPagePath()} className="text-blue-500 ml-2">
          Sign Up
        </Link>
      </p>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-sm mx-auto my-6">
            <div className="border-0 z-20 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="relative p-6 flex-auto">
                <h3 className="text-xl font-semibold">Forgot Password</h3>
                <p className="mt-4 text-sm">
                  Enter your email to receive a password reset link.
                </p>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mt-4 border rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                <button
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-3"
                  onClick={handleForgotPassword}
                >
                  Send Reset Link
                </button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-10 bg-black opacity-50"></div>
        </div>
      )}
    </div>
  );
}
