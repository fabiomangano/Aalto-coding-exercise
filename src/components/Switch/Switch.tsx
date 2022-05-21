import * as React from 'react';
import { Toggle, IToggleProps as ISwitchProps } from '@fluentui/react/lib/Toggle';
import style from './Switch.module.scss';


const Switch: React.FC<ISwitchProps> = (props) => {
  return (
      <Toggle
        className={style['ms-Toggle-root']}
        {...props}
      />
  );
};

export default Switch;