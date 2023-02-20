import axios from 'axios';
import Image from 'next/image';
import { InteractionType } from '../../types/InteractionType';
import s from './ArticleReact.module.scss';

type Props = {
  likes: number;
  favourites: number;
  shares: number;
  id: string;
};

const ArticleReact = ({ likes, favourites, shares, id }: Props) => {
  const INTERACTIONS = [
    {
      name: 'Likes',
      request: 'like',
      image: '/icons/interactions/like.svg',
      count: likes,
    },
    {
      name: 'Favourites',
      request: 'favourite',
      image: '/icons/interactions/favourite.svg',
      count: favourites,
    },
    {
      name: 'Shares',
      request: 'share',
      image: '/icons/interactions/share.svg',
      count: shares,
    },
  ];
  return (
    <aside className={s.interactions}>
      <ul className={`list-reset ${s.interactions__list}`}>
        {INTERACTIONS.map((interaction: InteractionType) => (
          <li key={interaction.request} className={s.interaction}>
            <button
              onClick={() =>
                axios.post(`${id}`, {
                  interaction: interaction.request,
                })
              }
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
