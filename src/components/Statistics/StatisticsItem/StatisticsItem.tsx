import './StatisticsItem.scss';

type IProps = {
  icon: string;
  title: string;
  text: string;
}

const StatisticsItem: React.FC<IProps> = ({icon, title, text}) => {
  return (
    <div className="statistics__item">
      <div className="statistics__item-image">
        <img src={icon} alt="icon" />
      </div>
      <div className="statistics__item-content">
        <h3 className="statistics__item-title">{title}</h3>
        <p className="statistics__item-text">{text}</p>
      </div>
    </div>
  );
};

export default StatisticsItem;