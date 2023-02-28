import { dehydrate } from 'react-query';
import { connect } from 'react-redux';
import { CategoriesType } from '../@types';
import { Hero, PrimaryLayout } from '../components';
import { CategoriesLanding } from '../modules/categories-landing';
import { Articles, queryCategories } from '../modules/categories-list';
import { Newsletter } from '../modules/newsletter';
import { setUserData } from '../modules/pages/authorization-page/store/slice';
import { AppState, wrapper } from '../store';
import checkAuth from '../utils/checkAuth';

type Props = {
  categories: CategoriesType[];
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    await checkAuth(ctx, store, setUserData);

    const queryClient = await queryCategories();
    return {
      props: { categories: dehydrate(queryClient).queries[0].state.data }, // will be passed to the page component as props
    };
  }
);

const Home = ({ categories }: Props) => {
  return (
    <PrimaryLayout
      title="Batyr.blog | Personal home page"
      categories={categories}
    >
      <main>
        <Hero />
        <CategoriesLanding categories={categories} />
        <Articles categories={categories} />
        <Newsletter />
      </main>
    </PrimaryLayout>
  );
};
export default connect((state: AppState) => state)(Home);
