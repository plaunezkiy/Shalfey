"use client";

export const client = async (endpoint, { body, ...customConfig } = {}) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("access") || "")}`,
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
    return Promise.reject(err.message ? err.message : data);
  }
};

client.get = (endpoint, customConfig = {}) => {
  return client(endpoint, { ...customConfig, method: "GET" });
};

client.post = (endpoint, body, customConfig = {}) => {
  return client(endpoint, { ...customConfig, body });
};
