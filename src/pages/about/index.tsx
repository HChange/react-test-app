import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

const About = (props: any) => {
  console.log('render');

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
        <NavLink to="/about/process">当前进度</NavLink>
        进度：流水线测试...
        <Outlet />
      </div>
    </>
  );
};

export default About;
