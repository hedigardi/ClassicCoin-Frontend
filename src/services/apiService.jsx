import { endpoint } from '../config/apiEndpoints';

const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error(error);
    return { error: true, message: error.message };
  }
};

export const createAccount = ({ name, email, password, role }) => {
  return fetchData(endpoint.register, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password, role }),
  });
};

export const fetchBlockchain = () => {
  return fetchData(endpoint.getBlockchain, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const fetchTransactions = () => {
  return fetchData(endpoint.GetTransaction, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const loginRequest = (email, password) => {
  return fetchData(endpoint.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

export const sendTransactionRequest = (recipient, amount) => {
  const token = JSON.parse(localStorage.getItem('Bearer'));

  if (!token) {
    return { error: true, message: 'Authentication token is missing' };
  }

  return fetchData(endpoint.AddTransaction, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ recipient, amount }),
  });
};

export const mineTransactionRequest = () => {
  return fetchData(endpoint.mineTransaction, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
