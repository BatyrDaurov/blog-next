import Image from 'next/image';
import { setReaction } from '../../helpers/setReaction';
import { InteractionType } from '../../types/InteractionType';
import s from './ArticleReact.module.scss';

type Props = {
  likes: number;
  views: number;
  id: string;
};

const ArticleReact = ({ likes, views, id }: Props) => {
  const INTERACTIONS = [
    {
      name: 'Likes',
      request: 'like',
      image: '/icons/interactions/like.svg',
      count: likes,
    },
    {
      name: 'Views',
      request: 'views',
      image: '/icons/interactions/eye.svg',
      count: views,
    },
  ];
  return (
    <aside className={s.interactions}>
      <ul className={`list-reset ${s.interactions__list}`}>
        {INTERACTIONS.map((interaction: InteractionType) => (
          <li key={interaction.request} className={s.interaction}>
            <button
              onClick={() =>
                setReaction(
                  interaction.request,
                  id,
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VmODQzOGEzMWU0ZWFiZWZmZDY3YmQiLCJpYXQiOjE2NzY5MDM3NTIsImV4cCI6MTY3OTQ5NTc1Mn0.1TfuIJo6qHN_K4J-gbvuwlpW6sUxa-3frVKIYpEyzYc'
                )
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
