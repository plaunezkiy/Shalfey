"use client";

export const client = async (endpoint, { body, ...customConfig } = {}) => {
  const token = JSON.parse(localStorage.getItem("access") || 'null');
  const headers = {
    "Content-Type": "application/json",
    // conditional if the token is present
    ...(token && { Authorization: `Bearer ${token}` }),
  };
  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    return fetch(endpoint, config);
  } catch (err) {
    localStorage.removeItem("access");
    return Promise.reject(err.message ? err.message : data);
  }
};

client.get = (endpoint, customConfig = {}) => {
  return client(endpoint, { ...customConfig, method: "GET" });
};

client.post = (endpoint, body, customConfig = {}) => {
  return client(endpoint, { ...customConfig, body });
};
