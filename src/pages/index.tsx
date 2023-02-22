import { dehydrate } from 'react-query';
import { CategoriesType } from '../@types';
import { Hero, PrimaryLayout } from '../components';
import { CategoriesLanding } from '../modules/categories-landing';
import { Articles, queryCategories } from '../modules/categories-list';
import { Newsletter } from '../modules/newsletter';

type Props = {
  categories: CategoriesType[];
};

export async function getServerSideProps() {
  const queryClient = await queryCategories();
  return {
    props: { categories: dehydrate(queryClient).queries[0].state.data }, // will be passed to the page component as props
  };
}

const Home = ({ categories }: Props) => {
  return (
    <PrimaryLayout categories={categories}>
      <main>
        <Hero />
        <CategoriesLanding categories={categories} />
        <Articles categories={categories} />
        <Newsletter />
      </main>
    </PrimaryLayout>
  );
};
export default Home;
