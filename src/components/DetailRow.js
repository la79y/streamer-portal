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

export default DetailRow;
