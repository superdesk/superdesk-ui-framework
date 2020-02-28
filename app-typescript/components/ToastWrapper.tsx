import * as React from 'react';
import { ToastMessage, MessageProp, IMessageOptions } from './ToastMessage';
import { Icon } from './Icon';

interface IProps {
  notify: (fn: (...args: any) => any) => void;
}

interface IArgs extends IMessageOptions {
  message: MessageProp;
}

type State = {
  top: Array<IArgs>;
  bottom: Array<IArgs>;
  'top-right': Array<IArgs>;
  'top-left': Array<IArgs>;
  'bottom-right': Array<IArgs>;
  'bottom-left': Array<IArgs>;
};

const firstState: State = {
  top: [],
  bottom: [],
  'top-right': [],
  'top-left': [],
  'bottom-right': [],
  'bottom-left': [],
};

type Keys = keyof State;

export default class ToastWrapper extends React.PureComponent<IProps, State> {
  static idCounter = 0;

  state: State = firstState;

  constructor(props: IProps) {
    super(props);
    props.notify(this.notify);
  }
  notify = (message: string, options: IMessageOptions) => {
    const toast = this.createToastState(message, options);
    const { position } = toast;

    const isTop = position === 'top';
    this.setState((prev) => {
      return {
        ...prev,
        [position]: isTop
          ? [toast, ...prev[position]]
          : [...prev[position], toast],
      };
    });
    return { id: toast.id, position: toast.position };
  }

  createToastState = (
    message: string,
    options: IMessageOptions,
  ) => {
    const id = ++ToastWrapper.idCounter;
    const position = options.position ?? 'top';
    return {
      id,
      message,
      icon: options.icon,
      position,
      duration: options.duration,
      type: options.type,
    };
  }

  requestClose = (id: string, position: string) => {
    this.setState((prev) => {
      return {
        ...prev,
        [position]: prev[position].filter((toast) => toast.id !== id),
      };
    });
  }

  render() {
    return Object.keys(this.state).map((position) => {
      const pos = position as keyof State;
      const toasts = this.state[pos];
      return (
        <div
          key={position}
          className={"sd-toast__container sd-toast__container--" + pos}
        >
          {toasts.map((toast: IArgs) => {
            return <ToastMessage position={pos} type={toast.type} icon={toast.icon} closeElement={this.requestClose}
                duration={toast.duration} key={toast.id} show={toast.show} id={toast.id} message={toast.message} />;
          })}
        </div>
      );
    });
  }
}
