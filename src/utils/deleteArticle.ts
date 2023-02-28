import api from '../../axios.config';

export const deleteArticle = (id: string, token: string) => async () => {
  try {
    console.log(id, token);

    await api.delete(`/articles/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    alert('Нет прав');
    console.warn(error);
  }
};
