import * as React from 'react';
import classNames from 'classnames';
import { Color } from '@material-ui/lab';

interface IProps {
    border?: string;
    start?(): React.ReactNode;
    center?(): React.ReactNode;
    end?(): React.ReactNode;
    action?: React.ReactNode;
}

export default class ListItem extends React.PureComponent<IProps> {
    render() {
        // let classes = classNames('simple-list', {
        //     'simple-list--compact': this.props.density === undefined,
        //     'simple-list--dotted': this.props.border === true,
        //     [`simple-list--${this.props.density}`]: this.props.density || this.props.density !== undefined,
        //     '': this.props.width === undefined,
        //     [`simple-list--fixedW-${this.props.width}`]: this.props.width || this.props.width !== undefined,
        // }, this.props.className);


        return (
            // <div className={'lista'}>
            //     <div className='start'>
            //         {this.props.start()}
            //     </div>
            //     <div className='center'>
            //         {this.props.center()}
            //     </div> 
            //     <div className='end'>
            //         {this.props.end()}
            //     </div>
            // </div>
            <div className="sd-list-item sd-shadow--z1" ng-class="{'sd-list-item--activated':itemActive2}">

                <div className="sd-list-item__border sd-list-item__border--locked"></div>

                <div className="sd-list-item__column">
                    {this.props.start()}
                </div>

                <div className="sd-list-item__column">
                    <span className="badge">1</span>
                </div>

                <div className="sd-list-item__column sd-list-item__column--grow sd-list-item__column--no-border">
                    <div className="sd-list-item__row">
                        <span className="sd-overflow-ellipsis">List Item Heading</span>
                    </div>
                </div>

                <div className="sd-list-item__action-menu">
                    
                    <div>aaaa</div>
                    
                </div>
            </div>
        );
    }
}