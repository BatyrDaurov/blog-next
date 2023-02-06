import type { NextPage } from 'next';
import { Hero, PrimaryLayout } from '../components';
import { Articles } from '../modules/articles';
import { Categories } from '../modules/categories';

const Home: NextPage = () => {
  return (
    <>
      <PrimaryLayout>
        <main>
          <Hero />
          <Categories />
          <Articles />
        </main>
      </PrimaryLayout>
    </>
  );
};

export default Home;
