import * as React from 'react';
import { Icon } from './Icon';

interface IProps {
  id: string;
  title?: string | React.ReactNode;
  avatar?: string;
  icon?: string;
  onClose: () => void;
}

const Text = ({ id, title, icon, avatar, onClose }: IProps) => {
  return (
    <React.Fragment>
      {icon ?
        <div className='sd-toast__icon'>
          <Icon name={icon} />
        </div> : null}
      {avatar ? <figure className='sd-toast__avatar avatar'>{avatar}</figure> : null}
      <div id={id} className='sd-toast__message'>
        {title}
      </div>
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

export default Text;
