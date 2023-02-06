import type { NextPage } from 'next';
import { Hero, PrimaryLayout } from '../components';
import { Categories } from '../modules/categories';

const Home: NextPage = () => {
  return (
    <>
      <PrimaryLayout>
        <main>
          <Hero />
          <Categories />
        </main>
      </PrimaryLayout>
    </>
  );
};

export default Home;
