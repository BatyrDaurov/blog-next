import api from '../../../../axios.config';

export const fetchCategory = async (id: string) => {
  const { data } = await api.get(`categories/${id}`);
  return data;
};
