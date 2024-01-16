const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const returnCheckout = (id, updatedData) => {
    return fetch(`${_apiUrl}/${id}/return`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: updatedData,
    }).then((res) => res.json());
  };

  export const createCheckout = (checkout) => {
    return fetch(_apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(checkout),
    }).then((res) => res.json());
  };