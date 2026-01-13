import React from 'react';
import type {IAvatarWithInlineText, IPropsAvatar} from './avatar';
import classNames from 'classnames';

interface IProps {
    placement: IAvatarWithInlineText['placement'];
    displayName: IPropsAvatar['displayName'];
    avatarElement: JSX.Element;
}

export const AvatarWithInlineTextWrapper = ({placement, avatarElement, displayName}: IProps) => {
    return (
        <span
            className={classNames('sd-avatar--inline', {
                'sd-avatar--inline--text-start': placement === 'start',
            })}
        >
            {avatarElement}
            <span className="sd-avatar--inline__text">{displayName}</span>
        </span>
    );
};
