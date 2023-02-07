import { PrimaryButton } from '../../../../UI/buttons';
import ArticlesList from '../articles-list/ArticlesList';
import s from './Articles.module.scss';

export type Post = {
  img: string;
  title: string;
  readTime: number;
  author: {
    img: string;
    name: string;
    date: string;
  };
};
export type PostsList = {
  category: string;
  posts: Post[];
};

const posts = [
  {
    category: 'javascript',
    posts: [
      {
        img: '/post_img.jpg',
        title: 'Array in javasript - Learn JS #3',
        readTime: 5,
        author: {
          img: '/author.jpg',
          name: 'Dasteen',
          date: 'Jan 10, 2022',
        },
      },
      {
        img: '/post_img.jpg',
        title: 'Fundamental of javascript',
        readTime: 8,
        author: {
          img: '/author.jpg',
          name: 'Dasteen',
          date: 'Jan 10, 2022',
        },
      },
      {
        img: '/post_img.jpg',
        title: '7 project with javascript you must try for your portfolio',
        readTime: 2,
        author: {
          img: '/author.jpg',
          name: 'Dasteen',
          date: 'Jan 10, 2022',
        },
      },
      {
        img: '/post_img.jpg',
        title: 'make simple calculator with javascript',
        readTime: 6,
        author: {
          img: '/author.jpg',
          name: 'Dasteen',
          date: 'Jan 10, 2022',
        },
      },
    ],
  },
  {
    category: 'React JS',
    posts: [
      {
        img: '/post_img.jpg',
        title: 'first month of leaning react jS',
        readTime: 3,
        author: {
          img: '/author.jpg',
          name: 'Dasteen',
          date: 'Jan 25, 2022',
        },
      },
      {
        img: '/post_img.jpg',
        title: 'Make tic tac toe games with react JS',
        readTime: 3,
        author: {
          img: '/author.jpg',
          name: 'Dasteen',
          date: 'Jan 25, 2022',
        },
      },
      {
        img: '/post_img.jpg',
        title: 'build markdown editor with react JS',
        readTime: 5,
        author: {
          img: '/author.jpg',
          name: 'Dasteen',
          date: 'Jan 14, 2022',
        },
      },
      {
        img: '/post_img.jpg',
        title: 'getting started with react JS',
        readTime: 8,
        author: {
          img: '/author.jpg',
          name: 'Dasteen',
          date: 'Jan 19, 2022',
        },
      },
    ],
  },
];

const Articles = () => {
  return (
    <section className={s.articles}>
      <div className={`container ${s.articles__posts}`}>
        {posts.map((el: PostsList) => (
          <ArticlesList key={el.category} articles={el} />
        ))}
        <div className={s.articles__more}>
          <PrimaryButton>More Article</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Articles;
