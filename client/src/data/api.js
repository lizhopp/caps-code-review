const API_URL = "http://localhost:3001/api";

function buildHeaders() {
  return {
    "Content-Type": "application/json",
  };
}

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Request failed.");
  }

  return data;
}

/**
 * Returns all skill trees.
 */
export function getTrees() {
  return request("/trees", {
    headers: buildHeaders(),
  });
}

/**
 * Creates a new skill tree.
 */
export function createTree(formValues) {
  return request("/trees", {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify(formValues),
  });
}
