import {HelmetProvider} from 'react-helmet-async';
import Router from './config/router';

function App() {
  return (
    <>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </>
  );
}

export default App;
