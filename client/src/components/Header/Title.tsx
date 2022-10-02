import { Helmet } from "react-helmet";

interface TitleProps {
  title?: string;
  children?: React.ReactNode;
}

const Title = ({ title }: TitleProps) => {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Kasa` : "Title"}</title>
      </Helmet>
    </>
  );
};

export default Title;