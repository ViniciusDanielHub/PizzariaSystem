export const APP_KEY = 'APPKEY';

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return;

  const data = window.localStorage.getItem(`${key}`);

  return JSON.parse(data!);
}