import { CategoriesType } from '../../../@types';
import Footer from './footer/Footer';
import Header from './header/Header';

type Props = {
  children: React.ReactNode;
  categories?: CategoriesType[];
};

const PrimaryLayout = ({ children, categories }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer categories={categories} />
    </>
  );
};

export default PrimaryLayout;
