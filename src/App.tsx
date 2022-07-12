import React from 'react';
import { RecoilRoot } from 'recoil';
import Layout from './layout';
import RenderRoutes from './config/routes';

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <RenderRoutes />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
