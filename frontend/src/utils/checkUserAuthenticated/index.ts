import { getStorageItem } from '../../utils/getStorageItem/index';

export const checkUserAuthenticated = () => {
  const userToken = getStorageItem('@PizzariaSystem:token');

  return !!userToken;
};
