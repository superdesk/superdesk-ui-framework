
import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    illustration: 'headlines' | 'keywords'  | 'optimise' | 'summary' | 'translate';
}

export class SvgIconIllustration extends React.PureComponent<IProps> {
    /* tslint:disable */
    renderSVG() {
        switch (this.props.illustration) {
            case 'headlines':
                return (
                    <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1958_28602)">
                            <path d="M26 14.5C26 14.2239 26.2239 14 26.5 14H32.5C32.7761 14 33 14.2239 33 14.5C33 14.7761 32.7761 15 32.5 15H26.5C26.2239 15 26 14.7761 26 14.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                            <path d="M26 17.5C26 17.2239 26.2239 17 26.5 17H32.5C32.7761 17 33 17.2239 33 17.5C33 17.7761 32.7761 18 32.5 18H26.5C26.2239 18 26 17.7761 26 17.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                            <path d="M35 17.5C35 17.2239 35.2239 17 35.5 17H41.5C41.7761 17 42 17.2239 42 17.5C42 17.7761 41.7761 18 41.5 18H35.5C35.2239 18 35 17.7761 35 17.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                            <path d="M26.5 20C26.2239 20 26 20.2239 26 20.5C26 20.7761 26.2239 21 26.5 21H32.5C32.7761 21 33 20.7761 33 20.5C33 20.2239 32.7761 20 32.5 20H26.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                            <path d="M35.5 20C35.2239 20 35 20.2239 35 20.5C35 20.7761 35.2239 21 35.5 21H41.5C41.7761 21 42 20.7761 42 20.5C42 20.2239 41.7761 20 41.5 20H35.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                            <path d="M26 23.5C26 23.2239 26.2239 23 26.5 23H32.5C32.7761 23 33 23.2239 33 23.5C33 23.7761 32.7761 24 32.5 24H26.5C26.2239 24 26 23.7761 26 23.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                            <path d="M34.998 23.5C34.998 23.2239 35.2219 23 35.498 23H41.498C41.7742 23 41.998 23.2239 41.998 23.5C41.998 23.7761 41.7742 24 41.498 24H35.498C35.2219 24 34.998 23.7761 34.998 23.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                        </g>
                        <path opacity="0.6" fillRule="evenodd" clipRule="evenodd" d="M27 5C26.4477 5 26 5.44772 26 6V10C26 10.5523 26.4477 11 27 11H33V8.6C33 7.71634 33.7163 7 34.6 7H42V6C42 5.44772 41.5523 5 41 5H27Z" fill="var(--sd-colour-primary--active)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M21 5V2C21 0.981692 21.9378 0 23 0H45C46.1043 0 47 0.895715 47 2V7H45V2H23V27C23 27.5523 22.5523 28 22 28C21.4477 28 21 27.5523 21 27V7H19V28C19 29.0889 19.9118 30 21 30H43C44 30 45 29 45 28V17H47V28C47 29.0608 46.579 30.0782 45.8281 30.8281C45.0783 31.579 44.0608 32 43 32H21C19.9392 32 18.9218 31.579 18.1719 30.8281C17.421 30.0782 17 29.0608 17 28V6C17 5.5 17.4477 5 18 5H21Z" fill="var(--color-text-light)" fillOpacity="0.8"/>
                        <rect x="35" y="9" width="16" height="6" rx="1" fill="var(--sd-colour-primary--active)"/>
                        <path d="M53.25 10L54.8167 6.56667L58.25 5L54.8167 3.43333L53.25 0L51.6833 3.43333L48.25 5L51.6833 6.56667L53.25 10Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                        <path d="M58.25 14L58.8767 12.6267L60.25 12L58.8767 11.3733L58.25 10L57.6233 11.3733L56.25 12L57.6233 12.6267L58.25 14Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                        <path d="M59 23L59.94 20.94L62 20L59.94 19.06L59 17L58.06 19.06L56 20L58.06 20.94L59 23Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                        <path d="M5 15L5.94 12.94L8 12L5.94 11.06L5 9L4.06 11.06L2 12L4.06 12.94L5 15Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                        <path d="M10 9L11.2533 6.25333L14 5L11.2533 3.74667L10 1L8.74667 3.74667L6 5L8.74667 6.25333L10 9Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                        <path d="M10 19L10.6267 17.6267L12 17L10.6267 16.3733L10 15L9.37333 16.3733L8 17L9.37333 17.6267L10 19Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                        <defs>
                            <clipPath id="clip0_1958_28602">
                                <rect width="16" height="10" fill="white" transform="translate(26 14)"/>
                            </clipPath>
                        </defs>
                    </svg>
                );
            case 'keywords':
                return (
                    <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1814_54108)">
                            <g clipPath="url(#clip1_1814_54108)">
                                <rect x="21" y="5" width="22" height="5" rx="1" fill="var(--color-text-lighter)" fillOpacity="0.8"/>
                                <path d="M21.5 13C21.2239 13 21 13.2239 21 13.5C21 13.7761 21.2239 14 21.5 14H30.5C30.7761 14 31 13.7761 31 13.5C31 13.2239 30.7761 13 30.5 13H21.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M33.5 13C33.2239 13 33 13.2239 33 13.5C33 13.7761 33.2239 14 33.5 14H42.5C42.7761 14 43 13.7761 43 13.5C43 13.2239 42.7761 13 42.5 13H33.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M21.5 16C21.2239 16 21 16.2239 21 16.5C21 16.7761 21.2239 17 21.5 17H30.5C30.7761 17 31 16.7761 31 16.5C31 16.2239 30.7761 16 30.5 16H21.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M33.5 16C33.2239 16 33 16.2239 33 16.5C33 16.7761 33.2239 17 33.5 17H42.5C42.7761 17 43 16.7761 43 16.5C43 16.2239 42.7761 16 42.5 16H33.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M21 19.5C21 19.2239 21.2239 19 21.5 19H30.5C30.7761 19 31 19.2239 31 19.5C31 19.7761 30.7761 20 30.5 20H21.5C21.2239 20 21 19.7761 21 19.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M33 19.5C33 19.2239 33.2239 19 33.5 19H42.5C42.7761 19 43 19.2239 43 19.5C43 19.7761 42.7761 20 42.5 20H33.5C33.2239 20 33 19.7761 33 19.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M21.5 22C21.2239 22 21 22.2239 21 22.5C21 22.7761 21.2239 23 21.5 23H30.5C30.7761 23 31 22.7761 31 22.5C31 22.2239 30.7761 22 30.5 22H21.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M33.5 22C33.2239 22 33 22.2239 33 22.5C33 22.7761 33.2239 23 33.5 23H42.5C42.7761 23 43 22.7761 43 22.5C43 22.2239 42.7761 22 42.5 22H33.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M21 25.5C21 25.2239 21.2239 25 21.5 25H30.5C30.7761 25 31 25.2239 31 25.5C31 25.7761 30.7761 26 30.5 26H21.5C21.2239 26 21 25.7761 21 25.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M33 25.5C33 25.2239 33.2239 25 33.5 25H42.5C42.7761 25 43 25.2239 43 25.5C43 25.7761 42.7761 26 42.5 26H33.5C33.2239 26 33 25.7761 33 25.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M47 2H17V6H15V2C15 0.895431 15.8954 0 17 0H47C48.1046 0 49 0.895431 49 2V15H47V2ZM47 27V30H17V20H15V30C15 31.1046 15.8954 32 17 32H47C48.1046 32 49 31.1046 49 30V27H47Z" fill="var(--color-text-light)" fillOpacity="0.8"/>
                            <rect x="45" y="17" width="19" height="8" rx="1" fill="var(--sd-colour-primary--active)"/>
                            <path d="M48 19.5C48 19.2239 48.2239 19 48.5 19H51.5C51.7761 19 52 19.2239 52 19.5C52 19.7761 51.7761 20 51.5 20H48.5C48.2239 20 48 19.7761 48 19.5Z" fill="#F6F7F8"/>
                            <path d="M48 22.5C48 22.2239 48.2239 22 48.5 22H53.5C53.7761 22 54 22.2239 54 22.5C54 22.7761 53.7761 23 53.5 23H48.5C48.2239 23 48 22.7761 48 22.5Z" fill="#F6F7F8"/>
                            <path d="M53.5 19C53.2239 19 53 19.2239 53 19.5C53 19.7761 53.2239 20 53.5 20H54.5C54.7761 20 55 19.7761 55 19.5C55 19.2239 54.7761 19 54.5 19H53.5Z" fill="#F6F7F8"/>
                            <path d="M56 19.5C56 19.2239 56.2239 19 56.5 19H60.5C60.7761 19 61 19.2239 61 19.5C61 19.7761 60.7761 20 60.5 20H56.5C56.2239 20 56 19.7761 56 19.5Z" fill="#F6F7F8"/>
                            <path d="M55.5 22C55.2239 22 55 22.2239 55 22.5C55 22.7761 55.2239 23 55.5 23H57.5C57.7761 23 58 22.7761 58 22.5C58 22.2239 57.7761 22 57.5 22H55.5Z" fill="#F6F7F8"/>
                            <rect y="8" width="19" height="10" rx="1" fill="var(--sd-colour-primary--active)"/>
                            <path d="M3 11.5C3 11.2239 3.22386 11 3.5 11H6.5C6.77614 11 7 11.2239 7 11.5C7 11.7761 6.77614 12 6.5 12H3.5C3.22386 12 3 11.7761 3 11.5Z" fill="#F6F7F8"/>
                            <path d="M3 14.5C3 14.2239 3.22386 14 3.5 14H8.5C8.77614 14 9 14.2239 9 14.5C9 14.7761 8.77614 15 8.5 15H3.5C3.22386 15 3 14.7761 3 14.5Z" fill="#F6F7F8"/>
                            <path d="M8.5 11C8.22386 11 8 11.2239 8 11.5C8 11.7761 8.22386 12 8.5 12H9.5C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11H8.5Z" fill="#F6F7F8"/>
                            <path d="M11 11.5C11 11.2239 11.2239 11 11.5 11H15.5C15.7761 11 16 11.2239 16 11.5C16 11.7761 15.7761 12 15.5 12H11.5C11.2239 12 11 11.7761 11 11.5Z" fill="#F6F7F8"/>
                            <path d="M10.5 14C10.2239 14 10 14.2239 10 14.5C10 14.7761 10.2239 15 10.5 15H12.5C12.7761 15 13 14.7761 13 14.5C13 14.2239 12.7761 14 12.5 14H10.5Z" fill="#F6F7F8"/>
                            <path d="M55 9L56.2533 6.25333L59 5L56.2533 3.74667L55 1L53.7467 3.74667L51 5L53.7467 6.25333L55 9Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                            <path d="M5 32L6.25333 29.2533L9 28L6.25333 26.7467L5 24L3.74667 26.7467L1 28L3.74667 29.2533L5 32Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                            <path d="M59.5 32L60.1267 30.6267L61.5 30L60.1267 29.3733L59.5 28L58.8733 29.3733L57.5 30L58.8733 30.6267L59.5 32Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                            <path d="M53 15L53.6267 13.6267L55 13L53.6267 12.3733L53 11L52.3733 12.3733L51 13L52.3733 13.6267L53 15Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                            <path d="M11 25L11.6267 23.6267L13 23L11.6267 22.3733L11 21L10.3733 22.3733L9 23L10.3733 23.6267L11 25Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                            <path d="M2 4L2.62667 2.62667L4 2L2.62667 1.37333L2 0L1.37333 1.37333L0 2L1.37333 2.62667L2 4Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                            <path d="M60.5 15L61.44 12.94L63.5 12L61.44 11.06L60.5 9L59.56 11.06L57.5 12L59.56 12.94L60.5 15Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                            <path d="M10 6L10.94 3.94L13 3L10.94 2.06L10 0L9.06 2.06L7 3L9.06 3.94L10 6Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1814_54108">
                                <rect width="64" height="32" fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_1814_54108">
                                <rect width="22" height="21" fill="white" transform="translate(21 5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                );
            case 'optimise':
                return (
                    <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1814_54107)">
                            <g clipPath="url(#clip1_1814_54107)">
                                <path d="M37.0012 22C37.2658 22.3521 37.5531 22.6861 37.8609 23H30.5C30.2239 23 30 22.7761 30 22.5C30 22.2239 30.2239 22 30.5 22H37.0012Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M35.4584 19C35.5658 19.3416 35.6911 19.6753 35.8331 20H30.5C30.2239 20 30 19.7761 30 19.5C30 19.2239 30.2239 19 30.5 19H35.4584Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M35 16H30.5C30.2239 16 30 16.2239 30 16.5C30 16.7761 30.2239 17 30.5 17H35.0495C35.0167 16.6711 35 16.3375 35 16Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M35.4584 13C35.3558 13.3265 35.2694 13.6601 35.2003 14H30.5C30.2239 14 30 13.7761 30 13.5C30 13.2239 30.2239 13 30.5 13H35.4584Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M18 13.5C18 13.2239 18.2239 13 18.5 13H27.5C27.7761 13 28 13.2239 28 13.5C28 13.7761 27.7761 14 27.5 14H18.5C18.2239 14 18 13.7761 18 13.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M18 16.5C18 16.2239 18.2239 16 18.5 16H27.5C27.7761 16 28 16.2239 28 16.5C28 16.7761 27.7761 17 27.5 17H18.5C18.2239 17 18 16.7761 18 16.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M18.5 19C18.2239 19 18 19.2239 18 19.5C18 19.7761 18.2239 20 18.5 20H27.5C27.7761 20 28 19.7761 28 19.5C28 19.2239 27.7761 19 27.5 19H18.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M18 22.5C18 22.2239 18.2239 22 18.5 22H27.5C27.7761 22 28 22.2239 28 22.5C28 22.7761 27.7761 23 27.5 23H18.5C18.2239 23 18 22.7761 18 22.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M18.5 25C18.2239 25 18 25.2239 18 25.5C18 25.7761 18.2239 26 18.5 26H27.5C27.7761 26 28 25.7761 28 25.5C28 25.2239 27.7761 25 27.5 25H18.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path d="M30.5 25C30.2239 25 30 25.2239 30 25.5C30 25.7761 30.2239 26 30.5 26H39.5C39.7761 26 40 25.7761 40 25.5C40 25.2239 39.7761 25 39.5 25H30.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 5C18.4477 5 18 5.44772 18 6V9C18 9.55228 18.4477 10 19 10H37.0012C37.8097 8.92425 38.83 8.01663 40 7.33929V6C40 5.44772 39.5523 5 39 5H19Z" fill="var(--color-text-lighter)" fillOpacity="0.8"/>
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M14 2H44V6.04946C44.3289 6.01675 44.6625 6 45 6C45.3375 6 45.6711 6.01675 46 6.04946V2C46 0.895431 45.1046 0 44 0H14C12.8954 0 12 0.895431 12 2V30C12 31.1046 12.8954 32 14 32H44C45.1046 32 46 31.1046 46 30V25.9505C45.6711 25.9833 45.3375 26 45 26C44.6625 26 44.3289 25.9833 44 25.9505V30H14L14 2Z" fill="var(--color-text-light)" fillOpacity="0.8"/>
                            <circle cx="45" cy="16" r="7" fill="var(--color-bg-00)"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M53 16C53 11.5848 49.4152 8 45 8C40.5848 8 37 11.5848 37 16C37 20.4152 40.5848 24 45 24C46.9918 24 48.8147 23.2704 50.2156 22.0642L52.7246 24.5732C52.5137 25.1115 52.6257 25.7471 53.0607 26.182L56.5962 29.7175C57.182 30.3033 58.1317 30.3033 58.7175 29.7175C59.3033 29.1317 59.3033 28.182 58.7175 27.5962L55.182 24.0607C54.747 23.6257 54.1114 23.5137 53.5732 23.7247L51.0641 21.2156C52.2704 19.8147 53 17.9919 53 16ZM51 16C51 12.6894 48.3106 10 45 10C41.6894 10 39 12.6894 39 16C39 19.3106 41.6894 22 45 22C48.3106 22 51 19.3106 51 16Z" fill="var(--sd-colour-primary--active)"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M48.7046 13.2955C49.0937 13.6846 49.0937 14.3155 48.7046 14.7046L44.7046 18.7046C44.3155 19.0938 43.6846 19.0938 43.2954 18.7046L41.2954 16.7046C40.9063 16.3155 40.9063 15.6846 41.2954 15.2955C41.6846 14.9064 42.3155 14.9064 42.7046 15.2955L44 16.5909L47.2954 13.2955C47.6846 12.9064 48.3155 12.9064 48.7046 13.2955Z" fill="var(--sd-colour-primary--hover)"/>
                            <path d="M53.75 9L55.0033 6.25333L57.75 5L55.0033 3.74667L53.75 1L52.4967 3.74667L49.75 5L52.4967 6.25333L53.75 9Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                            <path d="M3.75 13L5.00333 10.2533L7.75 9L5.00333 7.74667L3.75 5L2.49667 7.74667L-0.25 9L2.49667 10.2533L3.75 13Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                            <path d="M55.75 16L56.3767 14.6267L57.75 14L56.3767 13.3733L55.75 12L55.1233 13.3733L53.75 14L55.1233 14.6267L55.75 16Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                            <path d="M8.5 29L9.12667 27.6267L10.5 27L9.12667 26.3733L8.5 25L7.87333 26.3733L6.5 27L7.87333 27.6267L8.5 29Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                            <path d="M60.75 18L61.3767 16.6267L62.75 16L61.3767 15.3733L60.75 14L60.1233 15.3733L58.75 16L60.1233 16.6267L60.75 18Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                            <path d="M7.75 5L8.37667 3.62667L9.75 3L8.37667 2.37333L7.75 1L7.12333 2.37333L5.75 3L7.12333 3.62667L7.75 5Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                            <path d="M50.75 32L51.3767 30.6267L52.75 30L51.3767 29.3733L50.75 28L50.1233 29.3733L48.75 30L50.1233 30.6267L50.75 32Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                            <path d="M58.75 25L59.69 22.94L61.75 22L59.69 21.06L58.75 19L57.81 21.06L55.75 22L57.81 22.94L58.75 25Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                            <path d="M6.75 21L7.69 18.94L9.75 18L7.69 17.06L6.75 15L5.81 17.06L3.75 18L5.81 18.94L6.75 21Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1814_54107">
                                <rect width="64" height="32" fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_1814_54107">
                                <rect width="22" height="21" fill="white" transform="translate(18 5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                );
            case 'summary':
                return (
                    <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1814_54105)">
                            <g clipPath="url(#clip1_1814_54105)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M41 6.34267V6C41 5.44772 40.5523 5 40 5H20C19.4477 5 19 5.44772 19 6V9C19 9.55228 19.4477 10 20 10H39.223C39.5322 8.63763 40.1504 7.39265 41 6.34267Z" fill="var(--color-text-lighter)" fillOpacity="0.8"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M31.5 13H39.0549C39.0924 13.3394 39.1488 13.6731 39.223 14H31.5C31.2239 14 31 13.7761 31 13.5C31 13.2239 31.2239 13 31.5 13ZM31.5 16H39.9355C40.1077 16.3465 40.3016 16.6804 40.5154 16.9998L40.5 17H31.5C31.2239 17 31 16.7761 31 16.5C31 16.2239 31.2239 16 31.5 16ZM19.5 13C19.2239 13 19 13.2239 19 13.5C19 13.7761 19.2239 14 19.5 14H28.5C28.7761 14 29 13.7761 29 13.5C29 13.2239 28.7761 13 28.5 13H19.5ZM20.9291 20C20.8802 19.6581 20.8066 19.3241 20.7101 19H28.5C28.7761 19 29 19.2239 29 19.5C29 19.7761 28.7761 20 28.5 20H20.9291ZM20.7101 23C20.8066 22.6759 20.8802 22.3419 20.9291 22H28.5C28.7761 22 29 22.2239 29 22.5C29 22.7761 28.7761 23 28.5 23H20.7101ZM19.0978 16.2029C19.1889 16.0798 19.3351 16 19.5 16H28.5C28.7761 16 29 16.2239 29 16.5C29 16.7761 28.7761 17 28.5 17H19.7453C19.5489 16.7185 19.3324 16.4521 19.0978 16.2029ZM19.0978 25.7971C19.3324 25.5479 19.5489 25.2815 19.7453 25H28.5C28.7761 25 29 25.2239 29 25.5C29 25.7761 28.7761 26 28.5 26H19.5C19.3351 26 19.1889 25.9202 19.0978 25.7971ZM31 19.5C31 19.2239 31.2239 19 31.5 19H40.5C40.7761 19 41 19.2239 41 19.5C41 19.7761 40.7761 20 40.5 20H31.5C31.2239 20 31 19.7761 31 19.5ZM31.5 22C31.2239 22 31 22.2239 31 22.5C31 22.7761 31.2239 23 31.5 23H40.5C40.7761 23 41 22.7761 41 22.5C41 22.2239 40.7761 22 40.5 22H31.5ZM31 25.5C31 25.2239 31.2239 25 31.5 25H40.5C40.7761 25 41 25.2239 41 25.5C41 25.7761 40.7761 26 40.5 26H31.5C31.2239 26 31 25.7761 31 25.5Z" fill="var(--color-text-lighter)" fillOpacity="0.5"/>
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M45 2H15V14.0709C14.6734 14.0242 14.3395 14 14 14C13.6605 14 13.3266 14.0242 13 14.0709V2C13 0.895431 13.8954 0 15 0H45C46.1046 0 47 0.895431 47 2V3.05493C46.3065 3.13159 45.6368 3.28703 45 3.51212V2ZM45 20.4879V30H15V27.9291C14.6734 27.9758 14.3395 28 14 28C13.6605 28 13.3266 27.9758 13 27.9291V30C13 31.1046 13.8954 32 15 32H45C46.1046 32 47 31.1046 47 30V20.9451C46.3065 20.8684 45.6368 20.713 45 20.4879Z" fill="var(--color-text-light)" fillOpacity="0.8"/>
                            <circle cx="48" cy="12" r="7" fill="var(--sd-colour-primary--active)"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M51.2043 9.67574C51.4386 9.91005 51.4386 10.2899 51.2043 10.5243L47.3614 14.3671C47.1271 14.6014 46.7472 14.6014 46.5129 14.3671L44.9757 12.83C44.7414 12.5957 44.7414 12.2158 44.9757 11.9814C45.21 11.7471 45.5899 11.7471 45.8243 11.9814L46.9371 13.0943L50.3557 9.67574C50.59 9.44142 50.9699 9.44142 51.2043 9.67574Z" fill="white"/>
                            <circle cx="14" cy="21" r="5" fill="var(--sd-colour-primary--active)"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.1743 19.3256C16.4086 19.56 16.4086 19.9399 16.1743 20.1742L13.6743 22.6742C13.4399 22.9085 13.06 22.9085 12.8257 22.6742L11.8257 21.6742C11.5914 21.4399 11.5914 21.06 11.8257 20.8256C12.06 20.5913 12.4399 20.5913 12.6743 20.8256L13.25 21.4014L15.3257 19.3256C15.56 19.0913 15.9399 19.0913 16.1743 19.3256Z" fill="white"/>
                            <path d="M55.25 27L56.5033 24.2533L59.25 23L56.5033 21.7467L55.25 19L53.9967 21.7467L51.25 23L53.9967 24.2533L55.25 27Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                            <path d="M57.5 6L58.1267 4.62667L59.5 4L58.1267 3.37333L57.5 2L56.8733 3.37333L55.5 4L56.8733 4.62667L57.5 6Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                            <path d="M60.25 16L61.19 13.94L63.25 13L61.19 12.06L60.25 10L59.31 12.06L57.25 13L59.31 13.94L60.25 16Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                            <path d="M3 14L3.94 11.94L6 11L3.94 10.06L3 8L2.06 10.06L0 11L2.06 11.94L3 14Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                            <path d="M8 8L9.25333 5.25333L12 4L9.25333 2.74667L8 0L6.74667 2.74667L4 4L6.74667 5.25333L8 8Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                            <path d="M8 16L8.62667 14.6267L10 14L8.62667 13.3733L8 12L7.37333 13.3733L6 14L7.37333 14.6267L8 16Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1814_54105">
                                <rect width="64" height="32" fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_1814_54105">
                                <rect width="22" height="21" fill="white" transform="translate(19 5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                );
            case 'translate':
                return (
                    <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M28 20V25C28 26.1046 28.8954 27 30 27H45L50 32V11C50 9.89543 49.1046 9 48 9H34V11L48 11V27.1716L45.8284 25H30L30 20H28Z" fill="var(--color-text-light)" fillOpacity="0.8"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M39 13.3C39.2943 13.3 39.5573 13.4842 39.6578 13.7608L41.654 19.2504L42.6499 21.7401C42.7935 22.099 42.6189 22.5064 42.26 22.65C41.901 22.7936 41.4936 22.619 41.3501 22.26L40.5261 20.2H37.4739L36.6499 22.26C36.5063 22.619 36.099 22.7936 35.74 22.65C35.3811 22.5064 35.2065 22.099 35.3501 21.7401L36.3459 19.2504L38.3421 13.7608C38.4427 13.4842 38.7056 13.3 39 13.3ZM37.9994 18.8H40.0006L39 16.0484L37.9994 18.8Z" fill="var(--color-text-light)"/>
                        <path d="M49 8L50.2533 5.25333L53 4L50.2533 2.74667L49 0L47.7467 2.74667L45 4L47.7467 5.25333L49 8Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                        <path d="M59 5L59.6267 3.62667L61 3L59.6267 2.37333L59 1L58.3733 2.37333L57 3L58.3733 3.62667L59 5Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                        <path d="M10 2C10 0.89543 10.8954 0 12 0H30C31.1046 0 32 0.895431 32 2V16C32 17.1046 31.1046 18 30 18H15L10 23V2Z" fill="var(--sd-colour-primary--active)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.505 3.00507C19.7784 2.73171 20.2216 2.73171 20.495 3.00507L21.495 4.00507C21.7683 4.27844 21.7683 4.72166 21.495 4.99502C21.2216 5.26839 20.7784 5.26839 20.505 4.99502L19.505 3.99502C19.2316 3.72166 19.2316 3.27844 19.505 3.00507ZM16.3 6.50005C16.3 6.11345 16.6134 5.80005 17 5.80005H25C25.3866 5.80005 25.7 6.11345 25.7 6.50005C25.7 6.88665 25.3866 7.20005 25 7.20005H24.1474C23.9415 8.57972 23.1504 9.87026 22.1242 10.8808C23.055 11.4606 24.0746 11.8 25 11.8C25.3866 11.8 25.7 12.1134 25.7 12.5C25.7 12.8866 25.3866 13.2 25 13.2C23.6228 13.2 22.2014 12.6549 21 11.8152C19.7985 12.6549 18.3772 13.2 17 13.2C16.6134 13.2 16.3 12.8866 16.3 12.5C16.3 12.1134 16.6134 11.8 17 11.8C17.9254 11.8 18.945 11.4606 19.8757 10.8808C18.8495 9.87026 18.0584 8.57972 17.8526 7.20005H17C16.6134 7.20005 16.3 6.88665 16.3 6.50005ZM19.2749 7.20005C19.4819 8.1869 20.1062 9.18668 21 10.0193C21.8937 9.18668 22.5181 8.1869 22.7251 7.20005H19.2749Z" fill="white"/>
                        <path d="M19 28L20.2533 25.2533L23 24L20.2533 22.7467L19 20L17.7467 22.7467L15 24L17.7467 25.2533L19 28Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.4"/>
                        <path d="M7 31L7.94 28.94L10 28L7.94 27.06L7 25L6.06 27.06L4 28L6.06 28.94L7 31Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                        <path d="M25 31L25.6267 29.6267L27 29L25.6267 28.3733L25 27L24.3733 28.3733L23 29L24.3733 29.6267L25 31Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                        <path d="M54 16L54.94 13.94L57 13L54.94 12.06L54 10L53.06 12.06L51 13L53.06 13.94L54 16Z" fill="var(--sd-colour-primary--active)" fillOpacity="0.32"/>
                    </svg>
                );
            default:
                return null;
        }
    }
    /* tslint:enable */
    render() {
        let classes = classNames('svg-icon-illustration', {
            [`svg-icon-illustration--${this.props.illustration}`] : this.props.illustration,
        });
        return (
            <figure className={classes} aria-hidden="true">
                {this.renderSVG()}
            </figure>
        );
    }
}
