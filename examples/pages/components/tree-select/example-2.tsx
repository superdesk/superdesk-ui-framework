import * as React from 'react';
import {TreeSelect} from '../../../../app-typescript/components/TreeSelect';

interface IVocabularyItem {
    name: string;
    qcode: string;
}

const authorRoles: Array<IVocabularyItem> = [
    {qcode: 'writer', name: 'Writer'},
    {qcode: 'photographer', name: 'Photographer'},
    {qcode: 'editor', name: 'Editor'},
];

type IProps = {};

interface IState {
    selectedRoles: Array<IVocabularyItem>;
}

/**
 * Same as example-1, only without option/value templates.
 * Issues: initial value is shown as empty, crashes when opening dropdown
 */
export class Example2 extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            selectedRoles: [
                {qcode: 'writer', name: 'Writer'},
            ],
        };
    }

    render() {
        const {selectedRoles} = this.state;

        return (
            <div>
                <TreeSelect
                    kind="synchronous"
                    getOptions={() => authorRoles.map((value) => ({value}))}
                    value={selectedRoles}
                    onChange={(val) => {
                        this.setState({selectedRoles: val.map((node) => node.value)});

                        // accessing qcodes should not cause TypeScript errors
                        val.forEach((node) => {
                            console.log(node.qcode);
                        })
                    }}
                    allowMultiple={true}
                />
            </div>
        );
    }
}

