import { useState } from 'react';
import { sendTransactionRequest } from '../services/apiService';
import ErrorModal from '../components/ErrorModal';
import SuccessModal from '../components/SuccessModal';
import { MineButton } from '../components/MineButton';
import logoImage from '../assets/img/logo_color.png';

export const Transact = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendTransactionRequest(recipient, amount);
    console.log(response.data);

    if (response.data) {
      setSuccessMsg('Transaction sent successfully');
      setSuccess(true);
      return;
    }
    if (response.error) {
      setErrorMsg('Failed to send transaction');
      setError(true);
      return;
    }
  };

  return (
    <>
      {error && (
        <ErrorModal
          setError={setError}
          errorMsg={errorMsg}
          headMsg="Transaction Failed"
        />
      )}
      {success && (
        <SuccessModal
          setRead={setSuccess}
          Msg={successMsg}
          headMsg="Transaction Successful"
        />
      )}
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src={logoImage}
              alt="ClassicCoin-Logo"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Initiate Your Transfer
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="recipient"
                >
                  Recipient
                </label>
                <div className="mt-2">
                  <input
                    id="recipient"
                    name="recipient"
                    type="text"
                    onChange={(e) => setRecipient(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor="amount"
                  >
                    Amount
                  </label>
                  <div className="text-sm"></div>
                </div>
                <div className="mt-2">
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    onChange={(e) => setAmount(parseInt(e.target.value))}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
                >
                  Submit Transaction
                </button>
              </div>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Mine a new Block
              </h2>
              <MineButton />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
