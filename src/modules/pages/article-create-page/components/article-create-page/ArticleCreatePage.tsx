import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/router';
import React from 'react';
import { ErrorMessage } from '../../../../../components';
import { useCustomSelector } from '../../../../../hooks/store';
import { PrimaryButton } from '../../../../../UI/buttons';
import { InputTitle } from '../../../../../UI/inputs';
import {
  handleChangeFile,
  OnChangeCategory,
  OnChangeTitle,
  onSubmit,
} from '../../helpers';
import { ArticleStateType } from '../../types/ArticleStateType';
import ArticleMarkdownEditor from '../article-markdown-editor/ArticleMarkdownEditor';
import InputTags from '../input-tags/InputTags';
import UploadWindow from '../upload-window/UploadWindow';
import s from './ArticleCreatePage.module.scss';

type Props = {
  token: string;
};

const ArticleCreatePage = ({ token }: Props) => {
  const router = useRouter();
  const user = useCustomSelector((state) => state.LoginReducer);
  const [article, setArticle] = React.useState<ArticleStateType>({
    banner: '',
    markdown: '',
    title: '',
    tags: [],
    category: '',
  });

  if (!user.user.role.includes('admin')) {
    return (
      <ErrorMessage
        redirectURL="/"
        message="You don't have a permission to stay here 😠"
      />
    );
  }

  return (
    <div className="container">
      <div className={s.page}>
        <UploadWindow
          handleChangeFile={handleChangeFile(setArticle, token)}
          banner={article.banner}
        />
        <InputTitle
          placeholder="* Enter a title..."
          onChange={OnChangeTitle(setArticle)}
        />
        <InputTitle
          placeholder="* Enter a category..."
          onChange={OnChangeCategory(setArticle)}
        />
        <InputTags setArticle={setArticle} article={article} />

        <ArticleMarkdownEditor article={article} setArticle={setArticle} />
        <div className={s.buttons}>
          <PrimaryButton onClick={onSubmit(article, token, router)}>
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
