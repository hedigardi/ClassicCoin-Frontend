import { useState } from 'react';
import { mineTransactionRequest } from '../services/apiService';
import SuccessModal from './SuccessModal';

export const MineButton = () => {
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const clickHandler = async () => {
    const mine = await mineTransactionRequest();

    if (mine.data) {
      setSuccessMsg('Transaction Successfully Mined.');
      setSuccess(true);
      console.log(mine.data);
      return;
    }
  };

  return (
    <>
      {success && (
        <SuccessModal
          setRead={setSuccess}
          Msg={successMsg}
          headMsg="Mining Successful."
        />
      )}
      <button
        onClick={clickHandler}
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
      >
        Mine Block
      </button>
    </>
  );
};
