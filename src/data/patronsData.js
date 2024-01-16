const _apiUrl = "/api/patrons";

export const getPatrons = () => {
  return fetch(_apiUrl).then((res) => res.json());
};

export const getPatron = (id) => {
    return fetch(`${_apiUrl}/${id}/checkouts`)
      .then((r) => (r.ok ? r.json() : {}))
      .catch((error) => {
        console.error("Error fetching patron:", error);
        return {};
      });
  };
  
  export const updatePatron = (id, updatedData) => {
    return fetch(`${_apiUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: updatedData,
    }).then((res) => res.json());
  };
  
  export const deactivatePatron = (id) => {
    return fetch(`/api/patrons/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        return Promise.reject(new Error("Failed to deactivate patron"));
      }
    });
  };
  