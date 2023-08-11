import * as React from 'react';
import {IPropsBase} from './interfaces';

interface IPropsImageAvatar extends IPropsBase {
    imageUrl?: string | null; // defaults to a placeholder image
    onClick?(): void;
}

export class AvatarContentImage extends React.PureComponent<IPropsImageAvatar> {
    render() {
        const {imageUrl, tooltipText, onClick} = this.props;

        const maybeButtonProps: React.HTMLAttributes<HTMLSpanElement> = onClick == null ? {} : {
            role: 'button',
            onClick: () => onClick(),
        };

        if (imageUrl == null) {
            return (
                <span
                    {...maybeButtonProps}
                    className="sd-avatar-content sd-avatar-content--dummy-img"
                    title={tooltipText}
                >
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="100" fill="white" fill-opacity="0.01"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40 153V145.384C40 141.557 41.16 137.981 43.16 135C49.14 126.057 66.24 119.711 77.14 118C82.74 117.115 90.16 116.538 100 116.538C109.84 116.538 117.26 117.115 122.86 118C133.76 119.711 150.86 126.057 156.84 135C158.84 137.981 160 141.557 160 145.384V153C150 165 130 180 100 180C70 180 50 165 40 153ZM100 30C122.08 30 140 47.2307 140 68.4614C140 89.6922 122.08 106.923 100 106.923C77.92 106.923 60 89.6922 60 68.4614C60 47.2307 77.92 30 100 30Z" fill="var(--sd-colour-avatar-dummy)" fill-opacity="1"/>
                    </svg>
                </span>);
        } else {
            return (
                <span
                    {...maybeButtonProps}
                    className="sd-avatar-content"
                    title={tooltipText}
                >
                    <img src={imageUrl} />
                </span>
            );
        }
    }
}
