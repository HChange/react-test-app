import { renderRoutes } from 'react-router-config';

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
        进度：流水线测试...
      </div>
      {renderRoutes(props.route.routes)}
    </>
  );
};

export default About;
