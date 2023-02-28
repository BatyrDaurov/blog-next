import { useRouter } from 'next/router';
import { ButtonArticleSlide } from '../../../../../UI/buttons';
import { getArticle } from '../../helpers/getArticle';
import s from './ArticleNavigation.module.scss';

const ArticleNavigation = () => {
  const router = useRouter();
  return (
    <div className={s.navigation}>
      <ButtonArticleSlide href={getArticle('prev', router)} isNextSlide={false}>
        Предыдущая статья
      </ButtonArticleSlide>
      <ButtonArticleSlide href={getArticle('next', router)} isNextSlide={false}>
        Следующая статья
      </ButtonArticleSlide>
    </div>
  );
};

export default ArticleNavigation;
