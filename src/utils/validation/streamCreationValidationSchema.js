import * as Yup from "yup";

export const streamCreationValidationSchema = Yup.object({
  streamTitle: Yup.string().required("Required"),
  streamResource: Yup.string().required("Required"),
  streamMode: Yup.string().required("Required"),
  streamerLocation: Yup.string().required("Required"),
  streamSrtMode: Yup.string().required("Required"),
});
