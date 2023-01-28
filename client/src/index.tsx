import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

//HashRouter is used instead of BrowserRouter because of the github pages deployment
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <App /> 
  </BrowserRouter>
);
