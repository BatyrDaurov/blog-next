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
  const articles = await fetch(`http://localhost:4444/articles`).then((res) =>
    res.json()
  );
  return {
    props: { articles }, // will be passed to the page component as props
  };
}

export default ArticlesPage;
