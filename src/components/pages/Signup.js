import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SignupDesign from "../../assets/images/signup-design.svg";
import { LoginPagePath } from "../../routers/paths";
import { signupInitialValues } from "../../constants";
import { signupValidationSchema } from "../../utils/validation/signupValidationSchema";
import { signupUser } from "../../services/apis";

export default function Signup() {
  const formik = useFormik({
    initialValues: signupInitialValues,
    validationSchema: signupValidationSchema,
    onSubmit: async (values) => {
      try {
        await signupUser(values);
        toast.success("Signup successful!");
      } catch (error) {
        toast.error("Signup failed");
      }
    },
  });

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <div className="mb-8">
        <img
          src={SignupDesign}
          alt="Welcome"
          className="rounded-lg w-3/4 m-auto"
        />
        <h1 className="text-3xl text-center font-bold mt-10 text-blue-500">
          Signup
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
            type="text"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email"
            className={`w-full p-2 border rounded ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
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
          Signup
        </button>
      </form>
      <p className="mt-4">
        Already have an account?
        <Link to={LoginPagePath()} className="text-blue-500 ml-2">
          Login
        </Link>
      </p>
    </div>
  );
}
