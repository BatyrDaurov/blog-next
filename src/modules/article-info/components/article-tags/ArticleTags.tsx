import s from './ArticleTags.module.scss';
type Props = {};

const ArticleTags = (props: Props) => {
  return (
    <ul className={s.tags}>
      <li>#tag</li>
      <li>#tag</li>
      <li>#tag</li>
    </ul>
  );
};

export default ArticleTags;
