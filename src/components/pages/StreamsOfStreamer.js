import { useState } from "react";
import { getStream } from "../../services/apis";
import { useEffect } from "react";

const StreamDetails = () => {
  const [list, setList] = useState([]);

  // Helper function to copy content to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  const fetchData = async () => {
    try {
      const response = await getStream();
      setList(response.data);
    } catch (error) {
      console.error("Failed to fetch stream:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center my-10 text-blue-500">
        Streams List
      </h2>
      <button
        onClick={fetchData}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10"
      >
        Refresh Sessions ID
      </button>
      {list.length ? (
        list.map((listItem) => (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10">
            <DetailRow
              title={`Streamer URL for ${listItem.name}`}
              value={listItem.streamerUrl}
              onCopy={() => copyToClipboard(listItem.streamerUrl)}
            />
          </div>
        ))
      ) : (
        <div className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p>Streamer has no streams yet</p>
        </div>
      )}
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
