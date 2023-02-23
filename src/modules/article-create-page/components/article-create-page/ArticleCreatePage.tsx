import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/router';
import React from 'react';
import { UploadWindow } from '../../../../components';
import { PrimaryButton } from '../../../../UI/buttons';
import { InputTitle } from '../../../../UI/inputs';
import { handleChangeFile, OnChangeTitle, onSubmit } from '../../helpers';
import { ArticleStateType } from '../../types';
import ArticleMarkdownEditor from '../article-markdown-editor/ArticleMarkdownEditor';
import s from './ArticleCreatePage.module.scss';

const ArticleCreatePage = () => {
  const router = useRouter();
  const [article, setArticle] = React.useState<ArticleStateType>({
    banner: '',
    markdown: '',
    title: '',
    tags: '',
    category: 'All',
  });

  return (
    <div className="container">
      <div className={s.page}>
        <UploadWindow
          handleChangeFile={handleChangeFile(setArticle)}
          banner={article.banner}
        />
        <InputTitle
          placeholder="Enter a title..."
          onChange={OnChangeTitle(setArticle)}
        />
        <ArticleMarkdownEditor article={article} setArticle={setArticle} />
        <div className={s.buttons}>
          <PrimaryButton onClick={onSubmit(article, false, router)}>
            Create post
          </PrimaryButton>
          <button
            className={`btn-reset ${s.buttons__cancel}`}
            onClick={() => router.push('/')}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCreatePage;
