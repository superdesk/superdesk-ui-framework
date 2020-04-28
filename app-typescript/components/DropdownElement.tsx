import * as React from 'react';

export default class DropdownMenu extends React.PureComponent<{}> {
    constructor(props: {}) {
        super(props);
        this.append = this.append.bind(this);
    }

    append = () => {
        console.log("some calculation goes here");
    }

    render() {
        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}
