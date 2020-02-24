import * as React from 'react';
import { Message, MessageProp, IMessageOptions, Position, NotesType } from './Message';
import { Icon } from './Icon';

interface IProps {
  notify: (fn: (...args: any) => any) => void;
}

export interface IOptions {
  type?: NotesType;
  icon?: string;
  avatar?: string;
  position?: Position;
  duration?: number | null;
}

interface IArgs extends IMessageOptions {
  message: MessageProp;
}

type State = {
  top: Array<IArgs>;
  bottom: Array<IArgs>;
  right: Array<IArgs>;
  left: Array<IArgs>;
};

const firstState: State = {
  top: [],
  bottom: [],
  right: [],
  left: [],
};

type Keys = keyof State;

export default class Wrapper extends React.PureComponent<IProps, State> {
  static idCounter = 0;

  state: State = firstState;

  constructor(props: IProps) {
    super(props);
    props.notify(this.notify);
  }

  notify = (message: string, options: IOptions) => {
    const toast = this.createToastState(message, options);
    const { position } = toast;

    const isTop = position.includes("top");
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
    options: IOptions,
  ) => {
    const id = ++Wrapper.idCounter;
    const position = options.hasOwnProperty("position") && typeof options.position === "string"
      ? options.position
      : "top";

    return {
      id,
      message,
      icon: options.icon,
      position,
      duration: options.duration,
      type: options.type,
      avatar: options.avatar,
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
            return <Message position={pos} type={toast.type} icon={toast.icon} closeElement={this.requestClose}
              avatar={toast.avatar} duration={toast.duration} key={toast.id} {...toast} />;
          })}
        </div>
      );
    });
  }
}
