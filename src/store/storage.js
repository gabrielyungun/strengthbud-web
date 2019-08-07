export const storageConstants = {
  "@USER": "@user:key"
};

export const setItem = (selector, data) => {
  const key = storageConstants[selector];
  if (!key) {
    throw new Error(`No key ${selector}`);
  }
  sessionStorage.setItem(key, JSON.stringify(data));
  return data;
};

export const getItem = selector => {
  const key = storageConstants[selector];
  if (!key) {
    throw new Error(`No key ${selector}`);
  }
  const retrievedItem = sessionStorage.getItem(key);
  return JSON.parse(retrievedItem);
};
