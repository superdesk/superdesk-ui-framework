export function assertNever(x: never): never {
    throw new Error('Unexpected object: ' + x);
}

export function nameof<T>(name: keyof T): string {
    return name.toString();
}

export function getTextColor(backgroundColor: string): 'black' | 'white' | undefined {
    if (backgroundColor) {
        const r = parseInt(backgroundColor.substr(1, 2), 16);
        const g = parseInt(backgroundColor.substr(3, 2), 16);
        const b = parseInt(backgroundColor.substr(5, 2), 16);
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

        return (yiq >= 128) ? 'black' : 'white';
    } else {
        return;
    }
}

export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
