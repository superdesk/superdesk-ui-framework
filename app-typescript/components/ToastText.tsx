import * as React from 'react';
import { Icon } from './Icon';

interface IProps {
  id?: string;
  title?: string | React.ReactNode;
  icon?: string;
  onClose: () => void;
}

const ToastText = ({ id, title, icon, onClose}: IProps) => {
  const ref = React.useRef(null);
  return (
    <React.Fragment>
      {icon ?
        <div className='sd-toast__icon'>
          <Icon name={icon} />
        </div> : null}
      {typeof title === 'string' ?
        (<span style={{width: '100%'}} ref={ref} id={id}>
          <div className='sd-toast__message'>{title}</div>
        </span>) :
        <span style={{width: '100%', display: 'inherit'}} ref={ref} id={id}>
          {title}
        </span>}
      {onClose && <Close onClose={onClose} />}
    </React.Fragment>
  );
};

const Close = ({ onClose }: { onClose: () => void }) => (
  <button
    className="icn-btn sd-toast__actions"
    type="button"
    aria-label="Close"
    onClick={onClose}
  >
    <Icon name='close-small' />
  </button>
);

export default ToastText;
