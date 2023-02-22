import { dehydrate } from 'react-query';
import { QueryState } from 'react-query/types/core/query';
import { PrimaryLayout } from '../../components';
import { ArticlesCatalog, queryArticles } from '../../modules/articles-catalog';

type Props = {
  articles: QueryState;
};

export async function getServerSideProps() {
  const queryClient = await queryArticles();

  return {
    props: {
      articles: dehydrate(queryClient).queries[0].state,
    },
  };
}

const ArticlesPage = ({ articles }: Props) => {
  return (
    <PrimaryLayout>
      <main>
        <ArticlesCatalog data={articles.data} queryState={articles} />
      </main>
    </PrimaryLayout>
  );
};

export default ArticlesPage;
