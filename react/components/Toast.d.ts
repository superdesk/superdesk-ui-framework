import { MessageProp, IMessageOptions, Position } from './ToastMessage';
import ToastWrapper from './ToastWrapper';
interface IMessageId {
    id: string;
    position: Position;
}
declare class Toasted {
    componentRef: ToastWrapper | null;
    constructor();
    setup(): void;
    notify(message: MessageProp, options: Partial<IMessageOptions>): IMessageId | null;
    close(messageId: IMessageId): void;
}
export declare const toasted: Toasted;
export {};
