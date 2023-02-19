import { CategoriesType } from '../../@types';
import { PrimaryLayout } from '../../components';
import { Articles } from '../../modules/articles';

type Props = {
  categories: CategoriesType[];
};

const ArticlesPage = ({ categories }: Props) => {
  return (
    <PrimaryLayout>
      <main>
        <Articles categories={categories} />
      </main>
    </PrimaryLayout>
  );
};

export async function getServerSideProps() {
  const categories = await fetch(`http://localhost:4444/categories`).then(
    (res) => res.json()
  );
  return {
    props: { categories }, // will be passed to the page component as props
  };
}

export default ArticlesPage;
