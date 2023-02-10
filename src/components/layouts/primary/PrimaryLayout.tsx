import Footer from './footer/Footer';
import Header from './header/Header';

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
      label: 'Articles',
      url: '/articles',
    },
    {
      label: 'About Me',
      url: '/about',
    },
  ];
  return (
    <>
      <Header links={links} />
      {children}
      <Footer />
    </>
  );
};

export default PrimaryLayout;
