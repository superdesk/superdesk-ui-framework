import * as React from 'react';
import { Skeleton } from './Skeleton';

export class ListItemLoader extends React.Component<{}> {
    render() {
        return (
            <div className="sd-list-item sd-shadow--z1 sd-list-item--no-hover">
                <div className="sd-list-item__border"></div>
                <div className="sd-list-item__column">
                    <Skeleton shape="circle" size="2rem" />
                </div>
                <div className="sd-list-item__column sd-padding-y--1">
                    <Skeleton shape="circle" size="2rem" className="sd-margin-b--0-5" />
                    <Skeleton shape="circle" size="2rem" />
                </div>
                <div className="sd-list-item__column sd-list-item__column--grow sd-list-item__column--no-border">
                    <div className="sd-list-item__row sd-padding-b--0-5">
                        <Skeleton borderRadius="16px" />
                        <Skeleton width="10rem" borderRadius="16px" className="sd-margin-l--0-5" />
                    </div>
                    <div className="sd-list-item__row">
                        <Skeleton width="8rem" borderRadius="16px" />
                        <Skeleton width="8rem" borderRadius="16px" className="sd-margin-l--0-5" />
                        <Skeleton width="8rem" borderRadius="16px" className="sd-margin-l--0-5" />
                    </div>
                </div>
            </div>
        );
    }
}
