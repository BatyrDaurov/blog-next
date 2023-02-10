import { PrimaryLayout } from '../../components';
import { Articles } from '../../modules/articles';

type Props = {};

const ArticlesPage = (props: Props) => {
  return (
    <PrimaryLayout>
      <main>
        <Articles />
      </main>
    </PrimaryLayout>
  );
};

export default ArticlesPage;
