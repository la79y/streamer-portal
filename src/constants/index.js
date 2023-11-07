export const languages = {
  EN: "en",
  AR: "ar",
};

export const streamCreationInitialValues = {
  mode: "",
  streamerName: "",
  srtMode: "",
  streamingLocation: "",
  username: "",
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

export const srtModes = ["Caller", "Listener", "Rendezvous"];

export const streamDataExample = {
  srtLink: `srt://34.18.0.215:10080?streamid=#!::r=livestream3,m=publish,t=stream&transtype=live&mode=caller&latency=3200000`,
  ffplayCommand: `ffplay -i srt://34.18.0.215:10080?streamid=#!::r=livestream3,m=publish,t=stream&transtype=live&mode=caller&latency=3200000`,
  hlsLink: `http://livestream3.m3u8`,
};
