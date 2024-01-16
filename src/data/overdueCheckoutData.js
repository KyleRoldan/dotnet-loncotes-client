const _apiUrl = "/api/checkouts/overdue";

export const getOverdueCheckouts = () => {
  return fetch(_apiUrl).then((r) => r.json());
};