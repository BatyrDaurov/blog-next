import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import ArticleNavigation from '../article-navigation/ArticleNavigation';
import ArticleReact from '../article-react/ArticleReact';
import ArticleTags from '../article-tags/ArticleTags';
import s from './ArticleInfo.module.scss';

type Props = {};

const ArticleInfo = (props: Props) => {
  const text = `E-commerce store | Nike | Web-application
  This is web application using NEXT.js 13 (app directory), the pet-project of Batyr Daurov.
  
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint nisi! 
  Id possimus dolorum aliquam asperiores praesentium, explicabo atque quos ducimus, 
  error neque distinctio vitae porro a esse omnis incidunt!
  Hello, I'm a beginner front-end developer, I'm 16 and I'm a student studying web development for about 2 years.
  
  Demo: https://nike-store-omega.vercel.app/
  
  Stack technologies:
  Next.js 13;
  React + TypeScript;
  Redux-Toolkit;
  Framer-Motion;
  Thank you for your attention.`;
  return (
    <section className="container">
      <div className={s.page}>
        <article className={s.article}>
          <div className={s.article__banner}>
            <Image src="/banner_post.jpeg" objectFit="cover" fill alt="" />
          </div>
          <div className={s.article__info}>
            <ArticleTags />
            <h1 className={s.article__title}>
              Заголовок поста (не текст рыба).
            </h1>
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </article>
        <ArticleReact />
      </div>
      <ArticleNavigation />
    </section>
  );
};

export default ArticleInfo;
