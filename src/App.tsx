import React from 'react';
import { renderRoutes } from 'react-router-config';
import { RecoilRoot } from 'recoil';
import routes from './config/routes';
import Layout from './layout';

function App() {
  return (
    <RecoilRoot>
      <Layout>{renderRoutes(routes)}</Layout>
    </RecoilRoot>
  );
}

export default App;
