import Footer from './footer/Footer';
import Header from './header/Header';
import s from './PrimaryLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

const PrimaryLayout = ({ children }: Props) => {
  const links = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Category',
      url: '/categories',
    },
    {
      label: 'About Me',
      url: '/about',
    },
  ];
  return (
    <div className={s.container}>
      <Header links={links} />
      {children}
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
