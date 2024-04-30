import * as Yup from "yup";

export const streamCreationValidationSchema = Yup.object({
  streamTitle: Yup.string().required("Required"),
  streamResource: Yup.string()
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Stream Resource must only contain letters and numbers"
    )
    .required("Required"),
  streamerLocation: Yup.string().required("Required"),
});
