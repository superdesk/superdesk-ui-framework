import * as React from 'react';
import {ThemeDropdown} from '../components/ThemeDropdown';
interface IProps {
    children?: React.ReactNode;
    handleClick(child): void;
    handleClickA(child): void;
    handleFilter(child): void;
    sendTheme(child): void;
}

interface IState {
    open: boolean;
    openA: boolean;
    openF: boolean;
}

export class MainContent extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            open: true,
            openA: true,
            openF: true,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickA = this.handleClickA.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleClick() {
        this.setState((state) => ({
            open: !state.open,
        }));
        this.props.handleClick(this.state.open);
    }

    handleClickA() {
        this.setState((state) => ({
            openA: !state.openA,
        }));
        this.props.handleClickA(this.state.openA);
    }

    handleFilter() {
        this.setState((state) => ({
            openF: !state.openF,
        }));
        this.props.handleFilter(this.state.openF);
    }
    
    handleThemeParent = (childData) => {
        this.props.sendTheme(childData);
    }

    render() { 
        return (
            <div className='sd-main-content-grid__content sd-padding--2'>
                <button onClick={this.handleFilter}>Test filter</button>
                <button onClick={this.handleClick}>Test preview</button>
                <button onClick={this.handleClickA}>Test authoring</button>
                <ThemeDropdown handleThemeParent = {this.handleThemeParent}/>
                {this.props.children}
            </div>
        );
    }
}
