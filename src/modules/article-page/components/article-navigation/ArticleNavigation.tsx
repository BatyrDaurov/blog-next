import ButtonArticleSlide from '../../../../UI/buttons/button-article-slide/ButtonArticleSlide';
import s from './ArticleNavigation.module.scss';
type Props = {};

const ArticleNavigation = (props: Props) => {
  return (
    <div className={s.navigation}>
      <ButtonArticleSlide isNextSlide={false}>
        Предыдущая статья
      </ButtonArticleSlide>
      <ButtonArticleSlide isNextSlide={false}>
        Следующая статья
      </ButtonArticleSlide>
    </div>
  );
};

export default ArticleNavigation;
