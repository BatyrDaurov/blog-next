import { GetServerSideProps } from 'next';
import { ArticleType } from '../../@types';
import { PrimaryLayout } from '../../components';
import { ArticlePage } from '../../modules/article-page';

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
  const data = await fetch(`http://localhost:4444/articles/${id}`).then((res) =>
    res.json()
  );
  return {
    props: { article: data },
  };
};

export default Article;
