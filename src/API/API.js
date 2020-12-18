import Http from './Http';

export const getProvince = async () => await Http.get('/api/province');

export const getCity = async (provId) => await Http.get(`/api/city/${provId}`);

export const getCost = async (cityState, cityStateDest, weight, courier) =>
  await Http.get(
    `/api/shipping/${cityState}/${cityStateDest}/${weight}/${courier}`
  );
