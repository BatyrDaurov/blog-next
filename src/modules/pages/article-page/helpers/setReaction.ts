import axios from 'axios';

export const setReaction = async (
  interaction: string,
  id: string,
  token: string
) => {
  if (interaction !== 'views') {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}articles/${id}`,
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
