import './Container.scss';

type IProps = {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
};

export default Container;