const BASE = 'https://pinpoint-web-five.vercel.app/api';

async function get(path) {
  let response;
  try {
    response = await fetch(`${BASE}${path}`);
  } catch (_) {
    throw new Error('Unable to connect. Please check your connection and try again.');
  }
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  const { data } = await response.json();
  return data;
}

async function post(path, body) {
  let response;
  try {
    response = await fetch(`${BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (_) {
    throw new Error('Unable to connect. Please check your connection and try again.');
  }
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  const { data } = await response.json();
  return data;
}

async function put(path, body) {
  let response;
  try {
    response = await fetch(`${BASE}${path}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (_) {
    throw new Error('Unable to connect. Please check your connection and try again.');
  }
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  const { data } = await response.json();
  return data;
}

// Compatibility shim — maps CF method names to new API routes
export async function apiFetch(method, params = {}) {
  switch (method) {
    case 'UserLogin':
      return post('/login', { email: atob(params.authUser), password: atob(params.authPassword) });
    case 'GetMemberProfile':
      return get(`/profile/${params.CustomerID || params.CustomerId}`);
    case 'MemberUpdate':
      return put(`/profile/${params.CustomerID}`, params);
    case 'MemberEnrollment':
      return post('/enroll', params);
    case 'ForgotPassword':
      return post('/forgot-password', { email: params.email });
    case 'GetDivisionList':
      return get('/divisions');
    case 'MerchantListing':
      return get(`/merchants?marketId=${params.sMarket || 1}`);
    case 'MerchantDetail':
      return get(`/merchants/${params.MerchantId}`);
    case 'MemberRewards':
      return get(`/rewards/${params.CustomerId}`);
    case 'RecentTransactions':
      return get(`/transactions/${params.CustomerId}`);
    case 'PointsAccumulated':
      return get(`/points/${params.CustomerId}`);
    default:
      throw new Error(`Unknown method: ${method}`);
  }
}

export async function getMyCard(customerId) {
  return get(`/profile/${customerId}`);
}

export async function getMemberProfile(customerId) {
  return get(`/profile/${customerId}`);
}

export async function enrollMember(params = {}) {
  return post('/enroll', params);
}

export async function forgotPassword(email) {
  return post('/forgot-password', { email });
}

export async function getDivisions() {
  return get('/divisions');
}

export async function updateProfile(customerId, params = {}) {
  return put(`/profile/${customerId}`, params);
}
