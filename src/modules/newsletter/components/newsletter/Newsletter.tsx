import Image from 'next/image';
import NewsletterForm from '../newsletter-form/NewsletterForm';
import s from './Newsletter.module.scss';

const Newsletter = () => {
  return (
    <section className={s.newsletter}>
      <div className={s.newsletter__container}>
        <Image
          src="icons/mailbox.svg"
          className={s.newsletter__icon}
          width={130}
          height={130}
          alt="Mailbox icon | Batyr.blog"
        />
        <h3 className={s.newsletter__title}>
          Subscribe For the lastest updates
        </h3>
        <p className={s.newsletter__descr}>
          Subscribe to newsletter and never miss the new post every week.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
};

export default Newsletter;
