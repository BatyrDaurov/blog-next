import { PrimaryLayout } from '../../components';
import { AuthorizationPage } from '../../modules/authorization-page';


const AuthPage = () => {
  return (
    <PrimaryLayout>
      <main>
        <AuthorizationPage />
      </main>
    </PrimaryLayout>
  );
};

export default AuthPage;
