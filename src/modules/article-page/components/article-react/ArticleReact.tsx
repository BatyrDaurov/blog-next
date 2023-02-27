import Image from 'next/image';
import { ArticleType } from '../../../../@types';
import { InteractionType } from '../../types/InteractionType';
import s from './ArticleReact.module.scss';

type Props = {
  article: ArticleType;
  token: string;
};

const ArticleReact = ({ article, token }: Props) => {
  // const user = useCustomSelector((state) => state.LoginReducer.user);
  // const isLiked = getIsLiked(user, article._id);
  const INTERACTIONS = [
    // {
    //   name: 'Likes',
    //   request: 'like',
    //   image: '/icons/interactions/like.svg',
    //   count: article.likes,
    // },
    {
      name: 'Views',
      request: 'views',
      image: '/icons/interactions/eye.svg',
      count: article.viewsCount,
    },
  ];
  return (
    <aside className={s.interactions}>
      <ul className={`list-reset ${s.interactions__list}`}>
        {INTERACTIONS.map((interaction: InteractionType) => (
          <li key={interaction.request} className={s.interaction}>
            <button
              // onClick={() => {
              //   if (isLiked) {
              //     setReaction(interaction.request, article._id, token);
              //   }
              // }}
              className="btn-reset"
            >
              <div className={s.interaction__picture}>
                <Image src={interaction.image} fill alt="Batyr.blog" />
              </div>
              <p className={s.interaction__count}>{interaction.count}</p>
            </button>
            <div className={s.tooltip}>
              <div className={s.tooltip__content}>
                <span className={s.tooltip__title}>{interaction.name}</span>
              </div>
              <div className={s.tooltip__arrow}></div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ArticleReact;
