import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signinRequest } from '../services/apiService';
import { NavLink } from 'react-router-dom';
import ErrorModal from '../components/ErrorModal';
import SuccessModal from '../components/SuccessModal';
import logoImage from '../assets/img/logo_color.png';

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signinRequest(email, password);
    if (response.error) {
      setErrorMsg('Sign in unsuccessful! Please try again.');
      setError(true);
      return;
    } else {
      setSuccessMsg('Your are now logged in!');
      setSuccess(true);
      const token = JSON.stringify(response.token);
      localStorage.setItem('Bearer', token);
      localStorage.setItem('loggedInUser', JSON.stringify({ email }));
      setLoggedInUser({ email });
      navigate('/signin');
    }
  };

  const handleSignOut = () => {
    setLoggedInUser(null);
    localStorage.removeItem('Bearer');
    localStorage.removeItem('loggedInUser');
    navigate('/signin');
  };

  return (
    <>
      {error && (
        <ErrorModal
          setError={setError}
          errorMsg={errorMsg}
          headMsg="Error"
        />
      )}
      {success && (
        <SuccessModal
          setRead={setSuccess}
          Msg={successMsg}
          headMsg="Success"
        />
      )}
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          {!loggedInUser && (
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src={logoImage}
                alt="ClassicCoin-Logo"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
          )}

          {!loggedInUser && (
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          )}

          {loggedInUser && (
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Welcome, {loggedInUser.email}!
              </h2>
              <div className="mt-6">
                <button
                  onClick={handleSignOut}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
