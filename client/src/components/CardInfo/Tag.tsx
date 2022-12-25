import './tag.scss';

interface Props {
  tag: string;
}

function Tag ({
  tag
}: Props) {

  return (
    <div className="tag__section">
      <div className="tag__section__text">{tag}</div>
    </div>
  );
}

export default Tag;