import { PrimaryLayout } from '../../components';
import { ArticleInfo } from '../../modules/article-info';

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
