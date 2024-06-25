const baseURL = 'http://localhost:5001/api/v1';

export const endpoint = {
  signin: `${baseURL}/wallet/signin`,
  signup: `${baseURL}/wallet/signup`,

  AddTransaction: `${baseURL}/wallet/transaction`,
  GetTransaction: `${baseURL}/wallet/transactions`,
  mineTransaction: `${baseURL}/wallet/mine-transactions`,

  getBlockchain: `${baseURL}/blockchain`,

  mineBlock: `${baseURL}/block/mine`,
};
