// import { Outlet } from 'react-router';
// import { NavLink } from 'react-router-dom';
// import { Button } from 'tdesign-react';
import ReactFlow, { Background, BackgroundVariant } from 'react-flow-renderer';
import { useEffect } from 'react';
import { Edges, Nodes } from './constants';

const About = (props: any) => {
  useEffect(() => {
    const fake = document.querySelector('.react-flow__attribution') as any;
    if (fake) {
      fake.style.display = 'none';
    }
  }, []);

  // document.documentElement.setAttribute('theme-mode', 'dark');
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ReactFlow
          nodes={Nodes}
          defaultEdges={Edges}
          // panOnScroll={false}
          // panOnDrag={false}
          zoomOnPinch={false}
          zoomOnScroll={false}
          zoomOnDoubleClick={false}
        >
          <Background variant={BackgroundVariant.Lines} />
        </ReactFlow>
        {/* <NavLink to="/about/process">当前进度</NavLink>
        进度：流水线测试...
        <Outlet />
        <Button theme="primary" onClick={() => document.documentElement.setAttribute('theme-mode', 'dark')}>
          测试
        </Button> */}
      </div>
    </>
  );
};

export default About;
