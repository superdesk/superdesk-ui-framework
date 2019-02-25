/* eslint-disable */

import 'angular-route';
import 'code-prettify/src/prettify';
import 'code-prettify/styles/sons-of-obsidian.css';

import './css/reset.css';
import './css/docs-page.css';
import './js/doc';

import 'superdesk-ui';

export default angular.module('ui-docs', [
    'ngRoute',
    'superdesk-ui',
    'ui-docs.directives'

])
.config(['$locationProvider', function ($locationProvider) {
        return $locationProvider.hashPrefix('');
    }])

.factory('components', () => ({
        basicComponents: {
            name: 'Basic Components',
            items: {
                buttons: {
                    name: 'Buttons',
                    page: 'buttons.html'
                },
                labels: {
                    name: 'Labels',
                    page: 'labels.html'
                },
                badge: {
                    name: 'Badge',
                    page: 'badge.html'
                },
                tagLabels: {
                    name: 'Tag labels',
                    page: 'tag-labels.html'
                },
                iconLabels: {
                    name: 'Icon labels',
                    page: 'icon-labels.html'
                },
                alerts: {
                    name: 'Alerts',
                    page: 'alerts.html'
                },
                dropdown: {
                    name: 'Dropdown',
                    page: 'dropdown.html'
                },
                tooltips: {
                    name: 'Tooltips',
                    page: 'tooltips.html'
                },
                tables: {
                    name: 'Tables',
                    page: 'tables.html'
                },
                panelInfo: {
                    name: 'Panel info',
                    page: 'panel-info.html'
                },
                slider: {
                    name: 'Slider control',
                    page: 'slider.html'
                },
                loader: {
                    name: 'Animated loader',
                    page: 'loader.html'
                }
            }
        },
        navigation: {
            name: 'Navigation',
            items: {
                tabs: {
                    name: 'Tabs',
                    page: 'tabs.html'
                },
                leftNavigation: {
                    name: 'Left navigation',
                    page: 'left-nav.html'
                },
                verticalTabs: {
                    name: 'Vertical tabs',
                    page: 'vertical-tabs.html'
                }
            }
        },
        formElements: {
            name: 'Form elements',
            items: {
                inputs: {
                    name: 'Inputs',
                    page: 'input.html'
                },
                select: {
                    name: 'Select',
                    page: 'select.html'
                },
                tagInput: {
                    name: 'Tag Input',
                    page: 'tag-input.html'
                },
                checkbox: {
                    name: 'Checkbox',
                    page: 'checkbox.html'
                },
                radio: {
                    name: 'Radio',
                    page: 'radio.html'
                },
                'switch': {
                    name: 'Switch',
                    page: 'switch.html'
                },
                form: {
                    name: 'Form layout',
                    page: 'form-layout.html'
                },
                other: {
                    name: 'Other form elements',
                    page: 'other-elements.html'
                }
            }
        },
        containers: {
            name: 'Containers',
            items: {
                modals: {
                    name: 'Modals',
                    page: 'modals.html'
                },
                wizard: {
                    name: 'Wizard',
                    page: 'wizard.html'
                },
                carousel: {
                    name: 'Carousel',
                    page: 'carousel.html'
                }
            }
        },
        layout: {
            name: 'Layout',
            items: {
                basicCrid: {
                    name: 'Basic grid',
                    page: 'basic-grid.html'
                },
                layoutGrid: {
                    name: 'Layout grid',
                    page: 'layout-grid.html'
                }
            }
        },
        layoutElements: {
            name: 'Layout elements',
            items: {
                listItem: {
                    name: 'List item',
                    page: 'list-item.html'
                },
                simpleList: {
                    name: 'Simple list',
                    page: 'simple-list.html'
                },
                toggleBox: {
                    name: 'Toggle box',
                    page: 'toggle.html'
                }
            }
        },
        icons: {
            name: 'Icons',
            items: {
                iconFont: {
                    name: 'Icon font',
                    page: 'icons.html'
                },
                bigIconFont: {
                    name: 'Big icon font',
                    page: 'big-icons.html'
                }
            }
        }
    }))

.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            title: 'Main',
            templateUrl: '../examples/playgrounds/main.html'
        })
        .when('/react', {
            title: 'React',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/react.html'
        })
        .when('/planning', {
            title: 'Planning',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/planning.html'
        })
        .when('/layout', {
            title: 'Layout Grid',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/layout-grid.html'
        })
        .when('/cards', {
            title: 'Cards',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/cards.html'
        })
        .when('/side-navigation', {
            title: 'Side Navigation',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/side-navigation.html'
        })
        .when('/list-item-test', {
            title: 'List items test',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/list-item-test.html'
        })
        .when('/playground-5', {
            title: 'Playground 5',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/playground-5.html'
        })
        .when('/photo-desk', {
            title: 'Photo Desk',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/photo-desk.html'
        })
        .when('/media-carousel', {
            title: 'Media Carousel',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/media-carousel.html'
        })
        .when('/tags-input', {
            title: 'Tags Input',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/tags-input.html'
        })
        .when('/circular-progress', {
            title: 'Circular Progress',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/circular-progress.html'
        })
        .when('/publish', {
            title: 'Publish pane test',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/publish.html'
        })
        .when('/publisher-dashboard', {
            title: 'Publisher Dashboard',
            playground: 'publisher',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/publisher-dashboard.html'
        })
        .when('/publisher-content-lists', {
            title: 'Publisher Content Lists',
            playground: 'publisher',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/publisher-content-lists.html'
        })
        .when('/publisher-content-list-manual', {
            title: 'Publisher Content List Manual',
            playground: 'publisher',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/publisher-content-list-manual.html'
        })
        .when('/publisher-content-list-automatic', {
            title: 'Publisher Content List Automatic',
            playground: 'publisher',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/publisher-content-list-automatic.html'
        })
        .when('/publisher-output-control', {
            title: 'Publisher Output Control',
            playground: 'publisher',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/publisher-output-control.html'
        })
        .when('/publisher-content-analytics', {
            title: 'Publisher Content Analytics',
            playground: 'publisher',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/publisher-content-analytics.html'
        })
        .when('/swimlane-view', {
            title: 'Swimlane View',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/swimlane-view.html'
        })
        .when('/publisher-website-settings', {
            title: 'Publisher Website Settings',
            playground: 'publisher',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/publisher-website-settings.html'
        })
        .when('/publisher-website-settings-general', {
            title: 'Publisher Website Settings General',
            playground: 'publisher',
            removeHeader: true,
            removeFooter: true,
            templateUrl: '../examples/playgrounds/publisher-website-settings-general.html'
        })
        .otherwise({redirectTo: '/'});
});
