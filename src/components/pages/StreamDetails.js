import { useLocation } from "react-router-dom";

const StreamDetails = () => {
  const location = useLocation();
  const { streamerUrl, playerUrl, ffplay } = location.state || {};

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
          title="Streamer URL"
          value={streamerUrl}
          onCopy={() => copyToClipboard(streamerUrl)}
        />
        <DetailRow
          title="Player URL"
          value={playerUrl}
          onCopy={() => copyToClipboard(playerUrl)}
        />
        <DetailRow
          title="ffplay Command"
          value={ffplay}
          onCopy={() => copyToClipboard(ffplay)}
        />
      </div>
    </div>
  );
};

const DetailRow = ({ title, value, onCopy }) => {
  return (
    <div className="mb-4 flex justify-between items-center">
      <div>
        <strong className="text-lg">{title}:</strong>
        <p className="text-gray-600">{value}</p>
      </div>
      <button
        onClick={onCopy}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        Copy
      </button>
    </div>
  );
};

export default StreamDetails;