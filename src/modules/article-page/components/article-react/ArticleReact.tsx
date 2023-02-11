import Image from 'next/image';
import s from './ArticleReact.module.scss';
type Props = {};

const ArticleReact = (props: Props) => {
  const interactions = [
    {
      image: '/icons/interactions/like.svg',
      count: 213,
    },
    {
      image: '/icons/interactions/favourite.svg',
      count: 50,
    },
    {
      image: '/icons/interactions/share.svg',
      count: 14,
    },
  ];
  return (
    <aside className={s.interactions}>
      <ul className={`list-reset ${s.interactions__list}`}>
        {interactions.map((interaction) => (
          <li className={s.interaction}>
            <button className="btn-reset">
              <div className={s.interaction__picture}>
                <Image src={interaction.image} fill alt="Batyr.blog" />
              </div>
              <p className={s.interaction__count}>{interaction.count}</p>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ArticleReact;
