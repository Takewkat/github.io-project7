import "./host.scss";

interface Props {
  name: string;
  picture: string;
}

function Host ({ 
  name, 
  picture 
}: Props) {
  return (
    <div className="host__section">
      { name && <div className="host__section__name">{name}</div> }
      { picture && <img src={picture} alt="avatar" className="host__section__picture" /> }
    </div>
  );
};

export default Host;