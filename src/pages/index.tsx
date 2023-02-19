import { Hero, PrimaryLayout } from '../components';
import { Articles } from '../modules/articles';
import { Categories } from '../modules/categories';
import { Newsletter } from '../modules/newsletter';

type Props = {
  categories: any;
};

const Home = ({ categories }: Props) => {
  return (
    <PrimaryLayout>
      <main>
        <Hero />
        <Categories />
        <Articles categories={categories} />
        <Newsletter />
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

export default Home;
