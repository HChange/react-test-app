import React, { useState, useRef, useImperativeHandle, useCallback } from 'react';
import { Page, Block } from '@/components';
import AnchorPoint from '@/components/AnchorPoint';
import { Marked } from '@/components/Marked';
import codeString from './useEffect/_index.code';

const FancyInput = React.forwardRef((props, ref) => {
  const [fresh, setFresh] = useState(false);
  const attRef = useRef(0);
  useImperativeHandle(
    ref,
    () => ({
      attRef,
      fresh,
    }),
    [fresh],
  );

  const handleClick = useCallback(() => {
    attRef.current++;
  }, []);

  return (
    <div>
      {attRef.current}
      <button onClick={handleClick}>Fancy</button>
      <button onClick={() => setFresh(!fresh)}>刷新</button>
    </div>
  );
});

const App = () => {
  const fancyInputRef = useRef();

  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      <button onClick={() => console.log(fancyInputRef.current)}>父组件访问子组件的实例属性</button>
    </div>
  );
};

const Text = () => {
  return (
    <>
      <Page backLine={{ stepx: 20, stepy: 20 }}>
        <Block title="useEffect&useLayoutEffect区别">
          <App />
        </Block>
        <div style={{ height: '1800px' }} />
        <AnchorPoint to="useEffect&useLayoutEffect区别">前往</AnchorPoint>

        <Marked>{codeString}</Marked>
      </Page>
    </>
  );
};

export default Text;
