import { useState } from 'react';
import Transaction from './Transaction';
function Block({ block, index }) {
  const [displayDetails, setDisplayDetails] = useState(false);
  const shortHash = `${block.hash.substring(0, 15)}...`;
  const shortHandData =
    JSON.stringify(block.data).length > 40
      ? `${JSON.stringify(block.data).substring(1, 40)}...`
      : JSON.stringify(block.data);

  const renderDetails = () => {
    if (displayDetails) {
      return (
        <section>
          <div className="btn-container">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
              onClick={() => setDisplayDetails(!displayDetails)}
            >
              Hide details
            </button>
          </div>
          <div>
            {block.data.map((transaction) => (
              <div key={transaction.id}>
                <Transaction transaction={transaction} />
              </div>
            ))}
          </div>
        </section>
      );
    } else {
      return (
        <section>
          <div className="btn-container">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
              onClick={() => setDisplayDetails(!displayDetails)}
            >
              View details
            </button>
          </div>
          <div>{shortHandData}</div>
        </section>
      );
    }
  };

  return (
    <div className="blockT">
      <div className="block-text">Block: {index}</div>
      <div>Hash: {shortHash}</div>
      <div>
        Timestamp: {new Date(block.timestamp).toLocaleDateString('sv-SE')}
      </div>
      {renderDetails()}
    </div>
  );
}
export default Block;
