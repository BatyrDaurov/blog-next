import { useRouter } from 'next/router';
import { CategoriesType } from '../../../../@types';
import { PrimaryButton } from '../../../../UI/buttons';
import ArticlesList from '../articles-list/ArticlesList';
import s from './Articles.module.scss';

type Props = {
  categories: CategoriesType[];
};

const Articles = ({ categories }: Props) => {
  const router = useRouter();
  return (
    <section className={s.articles}>
      <div className={`container ${s.articles__posts}`}>
        {categories.map((category: CategoriesType) => (
          <ArticlesList key={category.title} category={category} />
        ))}
        <div className={s.articles__more}>
          <PrimaryButton onClick={() => router.push(`/articles`)}>
            More Article
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Articles;
