import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { StreamDetailsPagePath } from "../../routers/paths";
import { countries, streamCreationInitialValues } from "../../constants";
import { streamCreationValidationSchema } from "../../utils/validation/streamCreationValidationSchema";
import { createStream } from "../../services/apis";
import { toast } from "react-toastify";

export default function StreamCreationForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: streamCreationInitialValues,
    validationSchema: streamCreationValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await createStream(values);
        navigate(StreamDetailsPagePath(), { state: response.data });
      } catch (err) {
        toast.error(err.response.data.error || "Stream creation faild");
      }
    },
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold my-10 text-blue-500">
        Lahthi Streamer
      </h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Streamer Title Input */}
        <div className="mb-4">
          <label
            htmlFor="streamTitle"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Stream Title
          </label>
          <input
            id="streamTitle"
            name="streamTitle"
            type="text"
            placeholder="Enter stream title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.streamTitle}
            className="shadow border rounded py-2 px-3 block w-full focus:ring placeholder:text-black"
          />
          {formik.touched.streamTitle && formik.errors.streamTitle ? (
            <div className="text-red-500 text-xs italic">
              {formik.errors.streamTitle}
            </div>
          ) : null}
        </div>

        {/* Streaming Location Selector */}
        <div className="mb-4">
          <label
            htmlFor="streamerLocation"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Streaming Location
          </label>
          <select
            id="streamerLocation"
            name="streamerLocation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.streamerLocation}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {formik.touched.streamerLocation && formik.errors.streamerLocation ? (
            <div className="text-red-500 text-xs italic">
              {formik.errors.streamerLocation}
            </div>
          ) : null}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`mt-4 ${
            formik.isValid && formik.dirty
              ? "bg-blue-500 hover:bg-blue-700"
              : "bg-gray-500"
          } text-white font-bold py-2 px-4 rounded`}
          disabled={!(formik.isValid && formik.dirty)}
        >
          Create Stream
        </button>
      </form>
    </div>
  );
}
