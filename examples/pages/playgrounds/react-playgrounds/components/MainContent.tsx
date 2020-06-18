import * as React from 'react';
import {ThemeDropdown} from '../components/ThemeDropdown';
interface IProps {
    children?: React.ReactNode;
}


export class MainContent extends React.PureComponent<IProps> {
    render() { 
        return (
            <div className='sd-main-content-grid__content sd-padding--2'>
                {this.props.children}
            </div>
        );
    }
}
