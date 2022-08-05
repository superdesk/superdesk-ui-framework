import React from 'react';
import {TreeSelect} from 'superdesk-ui-framework/react';
import {ITreeNode} from 'superdesk-ui-framework/react/components/TreeSelect';

type IProps = {};

interface IVocabularyItem {
    qcode: string;
    name: string;
}

interface IState {
    value: Array<IVocabularyItem>;
}

const source = [
    {
        'name': 'Article (news)',
        'qcode': 'Article',
    },
    {
        'name': 'Sidebar',
        'qcode': 'Sidebar',
    },
    {
        'name': 'Factbox',
        'qcode': 'Factbox',
    },
];

function searchOptions(
    term: string,
    callback: (res: Array<ITreeNode<{name: string; qcode: string;}>>) => void,
): void {
    setTimeout(() => {
        callback(
            source
                .filter((item) => item.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
                .map((item) => ({value: item})),
        );
    }, 1000);
}


export class MultiSelectDemo extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            value: [],
        };
    }

    render() {
        return (
            <TreeSelect
                kind="asynchronous"
                searchOptions={searchOptions}
                value={this.state.value}
                onChange={(val) => {
                    this.setState({value: val});
                }}
                getLabel={({name}) => name}
                getId={({qcode}) => qcode}
                selectBranchWithChildren={false}
                optionTemplate={(item) => <span style={{color: 'blue'}}>{item.name}</span>}
                allowMultiple={true}
            />
        );
    }
}