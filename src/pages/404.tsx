import { ErrorMessage, PrimaryLayout } from '../components';

const NotFound = () => {
  return (
    <PrimaryLayout title="Not a found page | Batyr.blog">
      <ErrorMessage redirectURL="/" message="I don't know this place ☹" />
    </PrimaryLayout>
  );
};

export default NotFound;
