import React from 'react';
import { RecoilRoot } from 'recoil';
import Layout from './layout';
import RenderRoutes from './config/routes';
import { GlobalContextWrapper } from './components';

function App() {
  return (
    <RecoilRoot>
      <GlobalContextWrapper>
        <Layout>
          <RenderRoutes />
        </Layout>
      </GlobalContextWrapper>
    </RecoilRoot>
  );
}

export default App;
