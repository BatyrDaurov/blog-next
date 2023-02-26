import Head from 'next/head';
import { CategoriesType } from '../../../@types';
import Footer from './footer/Footer';
import Header from './header/Header';

type Props = {
  children: React.ReactNode;
  categories?: CategoriesType[];
  title: string;
};

const PrimaryLayout = ({ children, categories, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer categories={categories} />
    </>
  );
};

export default PrimaryLayout;
