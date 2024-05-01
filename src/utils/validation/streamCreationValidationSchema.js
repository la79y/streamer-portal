import * as Yup from "yup";

export const streamCreationValidationSchema = Yup.object({
  streamTitle: Yup.string().required("Required"),
  streamerLocation: Yup.string().required("Required"),
});
