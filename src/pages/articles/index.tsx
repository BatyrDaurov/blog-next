import axios from 'axios';
import { ArticleType } from '../../@types';
import { PrimaryLayout } from '../../components';
import { ArticlesCatalog } from '../../modules/articles-catalog';

type Props = {
  articles: ArticleType[];
};

const ArticlesPage = ({ articles }: Props) => {
  return (
    <PrimaryLayout>
      <main>
        <ArticlesCatalog catalog={articles} />
      </main>
    </PrimaryLayout>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:4444/articles`);
  const articles = res.data;
  return {
    props: { articles }, // will be passed to the page component as props
  };
}

export default ArticlesPage;
