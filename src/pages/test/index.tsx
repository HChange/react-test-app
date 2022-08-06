import React from 'react';
import { Marked, CodeViewer, Page, Block } from '@/components';
import codeString from './useEffect/_index.tsx.code.md';
import Effect from './useEffect/_index';

const Text = () => {
  return (
    <>
      <Page>
        <Block title="useEffect VS useLayoutEffect">
          <CodeViewer render={<Effect />} code={<Marked>{codeString}</Marked>} />
        </Block>
      </Page>
    </>
  );
};

export default Text;
