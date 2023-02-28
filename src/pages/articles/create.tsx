import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { PrimaryLayout } from '../../components';
import { ArticleCreatePage } from '../../modules/pages/article-create-page';
import { setUserData } from '../../modules/pages/authorization-page/store/slice';
import { wrapper } from '../../store';
import checkAuth from '../../utils/checkAuth';

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
    <PrimaryLayout title="Create Article | Batyr.blog">
      <main>
        <ArticleCreatePage token={token} />
      </main>
    </PrimaryLayout>
  );
};

export default CreateArticlePage;
