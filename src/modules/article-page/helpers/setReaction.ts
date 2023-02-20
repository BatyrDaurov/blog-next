import axios from 'axios';

export const setReaction = async (
  interaction: string,
  id: string,
  token: string
) => {
  if (interaction !== 'views') {
    await axios.post(
      `http://localhost:4444/articles/${id}`,
      {
        interaction: interaction,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
};
