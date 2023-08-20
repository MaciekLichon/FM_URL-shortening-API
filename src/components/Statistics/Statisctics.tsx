import './Statistics.scss';
import Container from '../Container/Container';
import StatisticsItem from './StatisticsItem/StatisticsItem';

import recognitionIcon from '../../images/icon-brand-recognition.svg';
import recordsIcon from '../../images/icon-detailed-records.svg';
import customizableIcon from '../../images/icon-fully-customizable.svg';

const statisticsData = [
  {
    icon: recognitionIcon,
    title: 'Brand Recognition',
    text: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
  },
  {
    icon: recordsIcon,
    title: 'Detailed Records',
    text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'  
  },
  {
    icon: customizableIcon,
    title: 'Fully Customizable',
    text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
  }
]

const Statistics: React.FC = () => {
  return (
    <section className="statistics">
      <Container>
        <h2 className="statistics__title">Advanced Statistics</h2>
        <p className="statistics__text">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
        <div className="statistics__list">
          {statisticsData.map(item => (
            <StatisticsItem key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Statistics;