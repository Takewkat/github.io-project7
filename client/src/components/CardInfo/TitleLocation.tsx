import "./titlelocation.scss";

interface Props {
  title: string;
  location: string;
}

function TitleLocation ({ 
  title, 
  location 
}: Props) {
  return (
    <div className="title-location__section">
      {
        title && <div className="title-location__section__title">{title}</div>
      }
      { location && <div className="title-location__section__text">{location}</div> }
    </div>
  );
};

export default TitleLocation;