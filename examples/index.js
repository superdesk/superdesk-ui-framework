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
            'tag-labels': {
                name: 'Tag labels',
                page: 'tag-labels.html'
            },
            'icon-labels': {
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
            'panel-info': {
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
            'left-nav': {
                name: 'Left navigation',
                page: 'left-nav.html'
            },
            'vertical-tabs': {
                name: 'Vertical tabs',
                page: 'vertical-tabs.html'
            }
        }
    },
    formElements: {
        name: 'Form elements',
        items: {
            input: {
                name: 'Inputs',
                page: 'input.html'
            },
            select: {
                name: 'Select',
                page: 'select.html'
            },
            'tag-input': {
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
            'form-layout': {
                name: 'Form layout',
                page: 'form-layout.html'
            },
            'other-elements': {
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
            'basic-grid': {
                name: 'Basic grid',
                page: 'basic-grid.html'
            },
            'layout-grid': {
                name: 'Layout grid',
                page: 'layout-grid.html'
            }
        }
    },
    layoutElements: {
        name: 'Layout elements',
        items: {
            'list-item': {
                name: 'List item',
                page: 'list-item.html'
            },
            'simple-list': {
                name: 'Simple list',
                page: 'simple-list.html'
            },
            toggle: {
                name: 'Toggle box',
                page: 'toggle.html'
            }
        }
    },
    icons: {
        name: 'General',
        items: {
            'icons': {
                name: 'Icon font',
                page: 'icons.html'
            },
            'big-icons': {
                name: 'Big icon font',
                page: 'big-icons.html'
            },
            'colors': {
                name: 'Colors',
                page: 'colors.html'
            }
        }
    }
}))

.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            title: 'Main',
            templateUrl: '../examples/playgrounds/buttons.html'
        })
        .when('/playground/react', {
            title: 'React',
            playground: 'main',
            templateUrl: '../examples/playgrounds/react.html'
        })
        .when('/playground/planning', {
            title: 'Planning',
            playground: 'main',
            templateUrl: '../examples/playgrounds/planning.html'
        })
        .when('/playground/layout', {
            title: 'Layout Grid',
            playground: 'main',
            templateUrl: '../examples/playgrounds/layout-grid.html'
        })
        .when('/playground/cards', {
            title: 'Cards',
            playground: 'main',
            templateUrl: '../examples/playgrounds/cards.html'
        })
        .when('/playground/side-navigation', {
            title: 'Side Navigation',
            playground: 'main',
            templateUrl: '../examples/playgrounds/side-navigation.html'
        })
        .when('/playground/list-item-test', {
            title: 'List items test',
            playground: 'main',
            templateUrl: '../examples/playgrounds/list-item-test.html'
        })
        .when('/playground/playground-5', {
            title: 'Playground 5',
            playground: 'main',
            templateUrl: '../examples/playgrounds/playground-5.html'
        })
        .when('/playground/settings', {
            title: 'Settings',
            playground: 'main',
            templateUrl: '../examples/playgrounds/settings.html'
        })
        .when('/playground/photo-desk', {
            title: 'Photo Desk',
            playground: 'main',
            templateUrl: '../examples/playgrounds/photo-desk.html'
        })
        .when('/playground/media-carousel', {
            title: 'Media Carousel',
            playground: 'main',
            templateUrl: '../examples/playgrounds/media-carousel.html'
        })
        .when('/playground/tags-input', {
            title: 'Tags Input',
            playground: 'main',
            templateUrl: '../examples/playgrounds/tags-input.html'
        })
        .when('/playground/circular-progress', {
            title: 'Circular Progress',
            playground: 'main',
            templateUrl: '../examples/playgrounds/circular-progress.html'
        })
        .when('/playground/publish', {
            title: 'Publish pane test',
            playground: 'main',
            templateUrl: '../examples/playgrounds/publish.html'
        })
        .when('/playground/publisher-dashboard', {
            title: 'Publisher Dashboard',
            playground: 'publisher',
            templateUrl: '../examples/playgrounds/publisher-dashboard.html'
        })
        .when('/playground/publisher-content-lists', {
            title: 'Publisher Content Lists',
            playground: 'publisher',
            templateUrl: '../examples/playgrounds/publisher-content-lists.html'
        })
        .when('/playground/publisher-content-list-manual', {
            title: 'Publisher Content List Manual',
            playground: 'publisher',
            templateUrl: '../examples/playgrounds/publisher-content-list-manual.html'
        })
        .when('/playground/publisher-content-list-automatic', {
            title: 'Publisher Content List Automatic',
            playground: 'publisher',
            templateUrl: '../examples/playgrounds/publisher-content-list-automatic.html'
        })
        .when('/playground/publisher-output-control', {
            title: 'Publisher Output Control',
            playground: 'publisher',
            templateUrl: '../examples/playgrounds/publisher-output-control.html'
        })
        .when('/playground/publisher-content-analytics', {
            title: 'Publisher Content Analytics',
            playground: 'publisher',
            templateUrl: '../examples/playgrounds/publisher-content-analytics.html'
        })
        .when('/playground/swimlane-view', {
            title: 'Swimlane View',
            playground: 'main',
            templateUrl: '../examples/playgrounds/swimlane-view.html'
        })
        .when('/playground/layout-test', {
            title: 'Layout test',
            playground: 'main',
            templateUrl: '../examples/playgrounds/layout-test-2.html'
        })
        .when('/playground/toasts', {
            title: 'Toasts',
            playground: 'main',
            templateUrl: '../examples/playgrounds/toasts.html'
        })
        .when('/playground/form-layout', {
            title: 'Form layout',
            playground: 'main',
            templateUrl: '../examples/playgrounds/form-layout.html'
        })
        .when('/playground/publisher-website-settings', {
            title: 'Publisher Website Settings',
            playground: 'publisher',
            templateUrl: '../examples/playgrounds/publisher-website-settings.html'
        })
        .when('/playground/publisher-website-settings-general', {
            title: 'Publisher Website Settings General',
            playground: 'publisher',
            templateUrl: '../examples/playgrounds/publisher-website-settings-general.html'
        })
        .when('/:name*', {
            title: 'Main',
            templateUrl: function(urlattr){
                return '../examples/templates/' + urlattr.name + '.html';
            }
        })
        .otherwise({redirectTo: '/'});
}).run(function ($rootScope, $route) {
    $rootScope.$route = $route;
});
