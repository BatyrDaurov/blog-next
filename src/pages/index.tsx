import type { NextPage } from 'next';
import { Hero, PrimaryLayout } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <PrimaryLayout>
        <Hero />
      </PrimaryLayout>
    </>
  );
};

export default Home;
