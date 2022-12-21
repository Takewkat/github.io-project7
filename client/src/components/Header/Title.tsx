import { Helmet } from "react-helmet";

interface TitleProps {
  title?: string;
  children?: React.ReactNode;
}

function Title ({ 
  title 
}: TitleProps) {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Kasa` : ""}</title>
      </Helmet>
    </>
  );
};

export default Title;