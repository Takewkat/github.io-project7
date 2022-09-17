import { Helmet } from "react-helmet";
import styled from "styled-components";

const GeneralContainer = styled.main`
  word-break: break-all;
`;

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Title` : "Title"}</title>
      </Helmet>
      <GeneralContainer className="container-xxl">
        {children}
      </GeneralContainer>
    </>
  );
};

export default Layout;