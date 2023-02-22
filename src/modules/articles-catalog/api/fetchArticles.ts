import api from '../../../../axios.config';

export const fetchArticles = async (limit: number | string) => {
  if (limit !== 'all') {
    const { data } = await api.get(`articles?limit=${limit}`);
    return data;
  } else {
    const { data } = await api.get('articles');
    return data;
  }
};
