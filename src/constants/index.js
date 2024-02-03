export const languages = {
  EN: "en",
  AR: "ar",
};

export const loginInitialValues = {
  username: "",
  password: "",
};

export const signupInitialValues = {
  username: "",
  email: "",
  password: "",
};

export const streamCreationInitialValues = {
  streamTitle: "",
  streamResource: "",
  streamMode: "",
  streamerLocation: "",
  streamSrtMode: "",
  userId: localStorage.getItem("userId"),
};

export const countries = [
  "USA",
  "Canada",
  "UK",
  "Germany",
  "France",
  "Japan",
  "Saudi Arabia",
];

export const modes = ["publish", "play", "record"];

export const srtModes = ["caller", "listener", "rendezvous"];
