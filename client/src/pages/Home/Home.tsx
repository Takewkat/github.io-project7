import { useTranslation } from 'react-i18next';

import Layout from '../../containers/Layout';


const HomePage: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('pageTitles:homePage')}>
      <div>
        1 step : set up
      </div>
    </Layout>
  );
};

export default HomePage;
