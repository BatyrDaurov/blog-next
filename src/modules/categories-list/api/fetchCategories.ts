import api from '../../../../axios.config';

export const fetchCategories = async (limit: number | string) => {
  if (limit !== 'all') {
    const { data } = await api.get(`categories?limit=${limit}`);
    return data;
  } else {
    const { data } = await api.get('categories');
    return data;
  }
};
