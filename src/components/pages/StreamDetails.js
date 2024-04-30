import { useLocation } from "react-router-dom";
import DetailRow from "../DetailRow";

const StreamDetails = () => {
  const location = useLocation();
  const { name, streamerUrl } = location.state || {};

  // Helper function to copy content to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center my-10 text-blue-500">
        Stream Details
      </h2>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <DetailRow
          title={`${name} Streamer URL`}
          value={streamerUrl}
          onCopy={() => copyToClipboard(streamerUrl)}
        />
      </div>
    </div>
  );
};

export default StreamDetails;
