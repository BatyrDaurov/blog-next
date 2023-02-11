import { PrimaryLayout } from '../../components';
import { ArticleInfo } from '../../modules/article-page';

type Props = {};

const Article = (props: Props) => {
  return (
    <PrimaryLayout>
      <main>
        <ArticleInfo />
      </main>
    </PrimaryLayout>
  );
};

export default Article;
