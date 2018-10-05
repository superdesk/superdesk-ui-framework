/* eslint-disable react/no-children-prop, eqeqeq, brace-style */

import React from 'react';
import ReactDOM from 'react-dom';

class Angular1Bridge extends React.Component {
    constructor(props) {
        super(props);

        this.setRef = this.setRef.bind(this);
    }
    setRef(childrenContainer) {
        if (childrenContainer != null && this.props.angularTranscludeEl != null) {
            // Allow Angular to handle transclusion before the element is moved
            setTimeout(() => {
                // Moves transcluded component into component passed as children to `ComponentToBridge`
                childrenContainer.appendChild(this.props.angularTranscludeEl);
            });
        }
    }
    render() {
        const ComponentToBridge = this.props.component;

        return (
            <ComponentToBridge
                {...this.props.componentProps}
                children={<div ref={this.setRef} />}
            />
        );
    }
}

export function reactToAngular1(component, bindings = [], dependenciesToInject = []) {
    return {
        transclude: true,
        bindings: bindings.reduce((result, key) => {
            result[key] = '<';
            return result;
        }, {}),
        controller: ['$element', ...dependenciesToInject, class {
            constructor($element, ...dependenciesInjected) {
                this._private = {
                    componentProps: {},
                    lastComponentPropsStringified: '',
                    angular1BridgeInstance: null,
                    $element: $element,
                };

                dependenciesToInject.forEach((dependencyName, i) => {
                    this._private.componentProps[dependencyName] = dependenciesInjected[i];
                });
            }
            setComponentProps() {
                for (let key in this) {
                    if (key !== '_private') {
                        this._private.componentProps[key] = this[key];
                    }
                }
            }
            $onInit() {
                const {$element} = this._private;

                // initialize props so we don't get propType validation errors from React
                this.setComponentProps();

                ReactDOM.render(
                    <Angular1Bridge
                        ref={(i) => { this._private.angular1BridgeInstance = i; }}
                        component={component}
                        componentProps={this._private.componentProps}
                        angularTranscludeEl={$element[0].children[1].children[0]}
                    />
                    , $element[0].children[0]
                );
            }
            $onDestroy() {
                const {$element} = this._private;

                ReactDOM.unmountComponentAtNode($element[0].children[0]);
            }
            $doCheck() {
                const propsStringified = JSON.stringify({...this, _private: null});

                if (propsStringified !== this._private.lastComponentPropsStringified) {
                    this.setComponentProps();

                    this._private.lastComponentPropsStringified = propsStringified;

                    if (this._private.angular1BridgeInstance != null) { // null until component mounts
                        this._private.angular1BridgeInstance.forceUpdate();
                    }
                }
            }
        }],

        // First div is where original react element will be rendered
        // the second one is a wrapper for transcluded item coming from angular component
        // the item needs to be wrapped so it can be hidden without touching the original angular element
        // it needs to be hidden so it's not displayed until react component decides to render it
        // when it does, it will be moved out of the hidden wrapper and will show up
        template: '<div></div><div style="display: none;"><div ng-transclude></div></div>',
    };
}