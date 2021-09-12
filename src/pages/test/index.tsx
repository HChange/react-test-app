import React from 'react';
import { Page, Block } from '@/components';
import AnchorPoint from '@/components/AnchorPoint';
import { Marked } from '@/components/Marked';
const Text = () => {
  return (
    <Page>
      <div style={{ height: '1800px' }} />
      <Block title="useEffect&useLayoutEffect区别">123</Block>
      <div style={{ height: '1800px' }} />
      <AnchorPoint to="useEffect&useLayoutEffect区别">前往</AnchorPoint>

      <Marked type="javascript">{`
				import React, { useState } from 'react';
				import { Page, Block } from '@/components';
				import AnchorPoint from '@/components/AnchorPoint';
				import { Marked } from '@/components/Marked';
				const Text = () => {
					return (
						<Page>
							<div style={{ height: '1800px' }} />
							<Block title='useEffect&useLayoutEffect区别'>123</Block>
							<div style={{ height: '1800px' }} />
							<AnchorPoint to='useEffect&useLayoutEffect区别'>前往</AnchorPoint>
						</Page>
					);
				};

				export default Text;
			`}</Marked>
    </Page>
  );
};

export default Text;
