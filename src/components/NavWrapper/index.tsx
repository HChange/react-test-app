import React, { memo, useContext, useEffect, useState } from 'react';
import { Drawer } from 'tdesign-react';
import { BulletpointIcon } from 'tdesign-icons-react';
import { NavWrapperProps } from './types';
import styles from './index.less';
import { GlobalContext } from '../GlobalContextWrapper/utils';

const NavWrapper = memo((props: NavWrapperProps) => {
  const { children } = props;
  const {
    state: { isMobile },
  } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return isMobile ? (
    <div className={styles['nav-wrapper__drawer']}>
      <Drawer
        size="160px"
        placement="left"
        visible={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        footer={false}
      >
        {props.children}
      </Drawer>
      {!isOpen && (
        <BulletpointIcon
          size={30}
          className={styles['nav-wrapper__menu']}
          onClick={() => {
            setIsOpen(true);
          }}
        />
      )}
    </div>
  ) : (
    <>{children}</>
  );
});

export { NavWrapper };
