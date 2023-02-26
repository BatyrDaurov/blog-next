import { GetServerSideProps } from 'next';
import { dehydrate } from 'react-query';
import { ArticleType } from '../../@types';
import { PrimaryLayout } from '../../components';
import checkAuth from '../../middlewares/checkAuth';
import { ArticlePage, queryArticle } from '../../modules/article-page';
import { setUserData } from '../../modules/authorization-page/store/slice';
import { wrapper } from '../../store';

type Props = {
  article: ArticleType | null;
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      await checkAuth(ctx, store, setUserData);
      const { id }: any = ctx.params;
      const queryClient = await queryArticle(id);
      return {
        props: { article: dehydrate(queryClient).queries[0].state.data },
      };
    } catch (error) {
      return {
        props: { article: null },
      };
    }
  });

const Article = ({ article }: Props) => {
  return (
    <PrimaryLayout title={`${article?.title} | Batyr.blog`}>
      <main>
        <ArticlePage article={article} />
      </main>
    </PrimaryLayout>
  );
};

export default Article;
