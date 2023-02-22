import { GetServerSideProps } from 'next';
import { dehydrate } from 'react-query';
import { ArticleType } from '../../@types';
import { PrimaryLayout } from '../../components';
import { ArticlePage, queryArticle } from '../../modules/article-page';

type Props = {
  article: ArticleType;
};

const Article = ({ article }: Props) => {
  return (
    <PrimaryLayout>
      <main>
        <ArticlePage article={article} />
      </main>
    </PrimaryLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: any = context.params;
  const queryClient = await queryArticle(id);
  return {
    props: { article: dehydrate(queryClient).queries[0].state.data },
  };
};

export default Article;
