import axios from 'axios';
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
  const res = await axios.get(`http://localhost:4444/articles/${id}`);
  const article = res.data;
  return {
    props: { article },
  };
};

export default Article;
