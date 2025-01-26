const BASE_URL =
  "https://ffbb-2a01-e0a-2bf-3d30-1b78-1dc8-a6dc-e6b2.ngrok-free.app"; // Replace with the actual base URL of the API

/**
 * Helper function to send HTTP requests.
 * @param {string} method - HTTP method (GET, POST, etc.).
 * @param {string} endpoint - API endpoint.
 * @param {Object} [data] - Request body data.
 * @returns {Promise<Object>} - Parsed JSON response.
 */

async function apiRequest(method, endpoint, data = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  const options = {
    method,
    headers,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(
      `Backend HTTP Error ${response.status}: ${
        (await response.json()).message
      }`
    );
  }

  return await response.json();
}

// Get the first 10 bank accounts
async function getAccounts() {
  return await apiRequest("GET", "/accounts");
}

// Create a new bank account
async function createAccount(accountData) {
  return await apiRequest("POST", "/accounts", accountData);
}

// Get an account by its BBAN
async function getAccountByBban(bban) {
  return await apiRequest("GET", `/account/${bban}`);
}

// Delete an account by its BBAN
async function deleteAccountByBban(bban) {
  return await apiRequest("DELETE", `/account/${bban}`);
}

// Get beneficiaries of an account by BBAN
async function getAccountBeneficiaries(bban) {
  return await apiRequest("GET", `/account/${bban}/beneficiaries`);
}

// Add a beneficiary to an account by BBAN
async function addAccountBeneficiary(bban, beneficiaryId) {
  return await apiRequest(
    "POST",
    `/account/${bban}/beneficiaries`,
    beneficiaryId
  );
}

// Get cards associated with an account by BBAN
async function getAccountCards(bban) {
  return await apiRequest("GET", `/account/${bban}/cards`);
}

async function getAccountFirstCard(bban) {
  return (await getAccountCards(bban))[0];
}

// Create a card and associate it with an account by BBAN
async function createAccountCard(bban, cardData) {
  return await apiRequest("POST", `/account/${bban}/cards`, cardData);
}

// Get transactions for an account by BBAN
async function getAccountTransactions(bban) {
  return await apiRequest("GET", `/account/${bban}/transactions`);
}

// Create an advisor
async function createAdvisor(advisorData) {
  return await apiRequest("POST", "/advisors", advisorData);
}

// Get all advisors by page
async function getAdvisors(page = 0) {
  return await apiRequest("GET", `/advisors?page=${page}`);
}

// Get an advisor by ID
async function getAdvisorById(id) {
  return await apiRequest("GET", `/advisor/${id}`);
}

// Get a currency by ID
async function getCurrencyById(id) {
  return await apiRequest("GET", `/currency/${id}`);
}

// Get all currencies by page
async function getCurrencies(page = 0) {
  return await apiRequest("GET", `/currencies?page=${page}`);
}

// Get a transaction by GUID
async function getTransactionByGuid(guid) {
  return await apiRequest("GET", `/transactions/${guid}`);
}

// Create a transaction
async function createTransaction(transactionData) {
  return await apiRequest("POST", "/transactions", transactionData);
}

async function getCurrentAccount() {
  return (await getAccounts())[0];
}

export {
  getAccounts,
  createAccount,
  getAccountByBban,
  deleteAccountByBban,
  getAccountBeneficiaries,
  addAccountBeneficiary,
  getAccountCards,
  createAccountCard,
  getAccountTransactions,
  createAdvisor,
  getAdvisors,
  getAdvisorById,
  getCurrencyById,
  getCurrencies,
  getTransactionByGuid,
  createTransaction,
  getCurrentAccount,
  getAccountFirstCard,
};
