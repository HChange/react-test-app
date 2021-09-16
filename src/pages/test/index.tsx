import React from 'react';
import { Marked, CodeViewer, Page, Block } from '@/components';
import codeString from './useEffect/_index.code';
import Effect from './useEffect/_index';

const Text = () => {
  return (
    <>
      <Page backLine={{ stepx: 20, stepy: 20 }}>
        <Block title="useEffect&useLayoutEffect区别">
          <CodeViewer render={<Effect />} code={<Marked>{codeString}</Marked>} />
        </Block>
      </Page>
    </>
  );
};

export default Text;
