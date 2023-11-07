import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { StreamDetailsPagePath } from "../../routers/paths";
import {
  countries,
  srtModes,
  streamCreationInitialValues,
  streamDataExample,
} from "../../constants";

export default function StreamCreationForm({ onFormSubmit }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: streamCreationInitialValues,
    validationSchema: Yup.object({
      mode: Yup.string().required("Required"),
      streamerName: Yup.string().required("Required"),
      srtMode: Yup.string().required("Required"),
      streamingLocation: Yup.string().required("Required"),
      username: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // const streamData = {
      //   srtLink: `srt://stream.location/${values.username}`,
      //   ffplayCommand: `ffplay -i srt://stream.location/${values.username}`,
      //   hlsLink: `http://stream.location/${values.username}.m3u8`,
      // };

      navigate(StreamDetailsPagePath(), { state: streamDataExample });
    },
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold my-10 text-blue-500">
        Lahthi Streamer
      </h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Mode Selector */}
        <div className="mb-4">
          <label
            htmlFor="mode"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Mode
          </label>
          <select
            id="mode"
            name="mode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mode}
            className="shadow border rounded py-2 px-3 form-select block w-full focus:ring"
          >
            <option value="" label="Select a mode" />
            <option value="video" label="Video" />
            <option value="audio" label="Audio" />
            <option value="both" label="Both" />
          </select>
          {formik.touched.mode && formik.errors.mode ? (
            <div className="text-red-500 text-xs italic">
              {formik.errors.mode}
            </div>
          ) : null}
        </div>

        {/* Streamer Name Input */}
        <div className="mb-4">
          <label
            htmlFor="streamerName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Streamer Name
          </label>
          <input
            id="streamerName"
            name="streamerName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.streamerName}
            className="shadow border rounded py-2 px-3 block w-full focus:ring"
          />
          {formik.touched.streamerName && formik.errors.streamerName ? (
            <div className="text-red-500 text-xs italic">
              {formik.errors.streamerName}
            </div>
          ) : null}
        </div>

        {/* Streaming Location Selector */}
        <div className="mb-4">
          <label
            htmlFor="streamingLocation"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Streaming Location
          </label>
          <select
            id="streamingLocation"
            name="streamingLocation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.streamingLocation}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {formik.touched.streamingLocation &&
          formik.errors.streamingLocation ? (
            <div className="text-red-500 text-xs italic">
              {formik.errors.streamingLocation}
            </div>
          ) : null}
        </div>

        {/* SRT Mode Selector */}
        <div className="mb-4">
          <label
            htmlFor="srtMode"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            SRT Mode
          </label>
          <select
            id="srtMode"
            name="srtMode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.srtMode}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select SRT Mode</option>
            {srtModes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
          {formik.touched.srtMode && formik.errors.srtMode ? (
            <div className="text-red-500 text-xs italic">
              {formik.errors.srtMode}
            </div>
          ) : null}
        </div>

        {/* Username Input */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className="shadow border rounded py-2 px-3 block w-full focus:ring"
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500 text-xs italic">
              {formik.errors.username}
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
