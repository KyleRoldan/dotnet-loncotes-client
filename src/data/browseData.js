const _apiUrl = "/api/materials/available";

export const getAvailableMaterials = () => {
  return fetch(_apiUrl).then((r) => r.json());
};