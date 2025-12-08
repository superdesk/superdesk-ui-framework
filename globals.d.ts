declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*/_big-icon-font.scss' {
    const content: {icon: string};
    export default content;
}

declare module '*/_icon-font.scss' {
    const content: {icon: string};
    export default content;
}

declare module '*.scss' {
    const content: {[className: string]: string};
    export default content;
}
