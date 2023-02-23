import { PrimaryLayout } from '../../components';
import { ArticleCreatePage } from '../../modules/article-create-page';

const CreateArticlePage = () => {
  return (
    <PrimaryLayout>
      <main>
        <ArticleCreatePage />
      </main>
    </PrimaryLayout>
  );
};

export default CreateArticlePage;
