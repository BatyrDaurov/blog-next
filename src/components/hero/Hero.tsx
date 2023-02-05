import Image from 'next/image';
import { PrimaryButton } from '../../UI/buttons';
import { InputMail } from '../../UI/inputs';
import s from './Hero.module.scss';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={s.hero}>
      <div className={s.hero__info}>
        <h1 className={s.hero__title}>Hi, i’m Batyr Front end dev</h1>
        <p className={s.hero__text}>
          On this blog I share tips and tricks, frameworks, projects, tutorials,
          etc Make sure you subscribe to get the latest updates
        </p>
        <div className={`${s.mail} ${s.hero__sending}`}>
          <InputMail placeholder="Enter your email here...." />
          <PrimaryButton>Subscribe</PrimaryButton>
        </div>
      </div>
      <div className={s.hero__banner}>
        <Image src="hero.svg" width={370} height={435} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
