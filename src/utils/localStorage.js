export const getStoredData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    return [];
  }
};

export const setStoredData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
