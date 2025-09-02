import * as React from 'react';
import { IInputWrapper } from './Form/InputWrapper';
interface IProps extends IInputWrapper {
    hours?: number;
    minutes?: number;
    seconds?: number;
    onChange(e: number): void;
}
interface IState {
    hours?: any;
    minutes?: any;
    seconds?: any;
    blink?: string;
}
export declare class DurationInput extends React.PureComponent<IProps, IState> {
    hourRef: React.RefObject<HTMLInputElement>;
    minuteRef: React.RefObject<HTMLInputElement>;
    secondRef: React.RefObject<HTMLInputElement>;
    private htmlId;
    constructor(props: IProps);
    stateUpdate(state: string, parametar1?: number, parametar2?: number, parametar3?: number): string | number;
    componentDidUpdate(prevProps: any, prevState: IState): void;
    valueUpdate(): void;
    handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void;
    handleKeyValue(event: React.KeyboardEvent<HTMLInputElement>, state: 'hours' | 'minutes' | 'seconds'): void;
    zeroPad(value: number | string): string | number;
    handleChange(event: React.ChangeEvent<HTMLInputElement>, state: 'hours' | 'minutes' | 'seconds'): void;
    handleFocus(ref: HTMLInputElement | null, state: 'hours' | 'minutes' | 'seconds'): void;
    handleFocusOnKeyUp(event: React.KeyboardEvent<HTMLInputElement>, ref: HTMLInputElement | null): void;
    render(): JSX.Element;
}
export declare function getDurationString(seconds: number, minSections?: 1 | 2 | 3): string;
export {};
