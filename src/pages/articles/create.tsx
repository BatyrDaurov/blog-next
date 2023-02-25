import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { PrimaryLayout } from '../../components';
import checkAuth from '../../middlewares/checkAuth';
import { ArticleCreatePage } from '../../modules/article-create-page';
import { setUserData } from '../../modules/authorization-page/store/slice';
import { wrapper } from '../../store';

type Props = {
  token: string;
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    await checkAuth(ctx, store, setUserData);
    const { authToken } = parseCookies(ctx);
    if (authToken) {
      return { props: { token: authToken } };
    }
    return { props: { token: '' } };
  });

const CreateArticlePage = ({ token }: Props) => {
  return (
    <PrimaryLayout>
      <main>
        <ArticleCreatePage token={token} />
      </main>
    </PrimaryLayout>
  );
};

export default CreateArticlePage;
