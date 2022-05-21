import { Panel, IPanelProps } from '@fluentui/react/lib/Panel';
import style from './SidePanel.module.scss';

const SidePanel: React.FC<IPanelProps> = (props) => {
  return (
    <Panel
      closeButtonAriaLabel="Close"
      className={style['ms-Panel']}
      {...props}
    />
  )
};

export default SidePanel;