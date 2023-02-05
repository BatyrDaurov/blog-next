import type { NextPage } from 'next';
import { Hero, PrimaryLayout } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <PrimaryLayout>
        <main>
          <Hero />
        </main>
      </PrimaryLayout>
    </>
  );
};

export default Home;
