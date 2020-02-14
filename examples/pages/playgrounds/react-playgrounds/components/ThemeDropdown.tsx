import * as React from 'react';
import classNames from 'classnames';
interface IProps {
    handleThemeParent(child): void;
}

interface IState {
    checked: boolean,
}

export class ThemeDropdown extends React.PureComponent<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = { checked: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleTheme = this.handleTheme.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            checked: !state.checked
        }));
    }

    handleTheme(newTheme) {
        this.setState({
            checked: !this.state.checked,
        })
        this.props.handleThemeParent(newTheme);
    }

    render() {
        let classes = classNames("dropdown", {
            "open" : this.state.checked,
        })

        let themes = ['light', 'dark'];
        return (
            <div className={classes}>
                <button className="dropdown__toggle" aria-expanded="false" onClick={this.handleClick}>
                    Testing theme
                </button>
                <ul className="dropdown__menu">
                    <li>
                        <div className="dropdown__menu-label">Themes</div>
                    </li>
                    <li className="dropdown__menu-divider"></li>
                    {themes.map((theme, index)=>
                    <li key={index}><button onClick={()=>this.handleTheme(theme)}>{theme}</button></li>)}
                </ul>
            </div>
        )
    }
}
