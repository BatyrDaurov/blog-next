import { PrimaryButton } from '../../../../UI/buttons';
import { InputMail } from '../../../../UI/inputs';
import s from './NewsletterForm.module.scss';

const NewsletterForm = () => {
  return (
    <form action="" className={s.newsletterForm}>
      <InputMail placeholder="Enter your email here...." />
      <PrimaryButton>Subscribe</PrimaryButton>
    </form>
  );
};

export default NewsletterForm;
