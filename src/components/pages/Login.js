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
import { loginUser } from "../../services/apis";
import { jwtDecode } from "jwt-decode";

export default function Login() {
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
      } catch (error) {
        toast.error("Login failed. Please check your credentials.");
      }
    },
  });

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
      <p className="mt-4">
        Don't have an account?
        <Link to={SignupPagePath()} className="text-blue-500 ml-2">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
