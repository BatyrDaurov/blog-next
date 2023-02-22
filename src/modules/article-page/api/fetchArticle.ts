import api from '../../../../axios.config';

export const fetchArticle = async (id: string) => {
  const { data } = await api.get(`articles/${id}`);
  return data;
};
