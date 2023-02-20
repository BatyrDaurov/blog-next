import axios from 'axios';
import { Hero, PrimaryLayout } from '../components';
import { CategoriesLanding } from '../modules/categories-landing';
import { Articles } from '../modules/categories-list';
import { Newsletter } from '../modules/newsletter';

type Props = {
  categories: any;
};

const Home = ({ categories }: Props) => {
  return (
    <PrimaryLayout categories={categories}>
      <main>
        <Hero />
        <CategoriesLanding />
        <Articles categories={categories} />
        <Newsletter />
      </main>
    </PrimaryLayout>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:4444/categories`);
  const categories = res.data;
  return {
    props: { categories }, // will be passed to the page component as props
  };
}

export default Home;
