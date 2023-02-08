import type { NextPage } from 'next';
import { Hero, PrimaryLayout } from '../components';
import { Articles } from '../modules/articles';
import { Categories } from '../modules/categories';
import { Newsletter } from '../modules/newsletter';

const Home: NextPage = () => {
  return (
    <PrimaryLayout>
      <main>
        <Hero />
        <Categories />
        <Articles />
        <Newsletter />
      </main>
    </PrimaryLayout>
  );
};

export default Home;
