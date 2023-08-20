import './Hero.scss';
import Container from '../Container/Container';

import heroBg from '../../images/illustration-working.svg';


const Hero: React.FC = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__container">
          <div className="hero__image">
            <img src={heroBg} alt="background" />
          </div>
          <div className="hero__content">
            <h1 className="hero__title">More than just shorter links</h1>
            <p className="hero__text">Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <button className="btn btn-rounded hero__btn">Get Started</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;