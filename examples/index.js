/* eslint-disable */

import 'angular-route';
import 'code-prettify/src/prettify';
import 'code-prettify/styles/sons-of-obsidian.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import './css/reset.css';
import './css/docs-page.css';
import './js/doc';

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
                    page: 'buttons.html',
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
        general: {
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
        },
        helpers: {
            name: 'Helper classes',
            items: {
                'spacing': {
                    name: 'Spacing',
                    page: 'spacing.html'
                },
                'text': {
                    name: 'Text helpers',
                    page: 'text.html'
                },
                'shadows': {
                    name: 'Shadows',
                    page: 'shadows.html'
                }
            }
        }
    }))

    .factory('design', () => ({
        basicComponents: {
            name: 'Basic Components',
            items: {
                'buttons': {
                    name: 'Buttons',
                    page: 'buttons.html',
                },
                'checkbox-and-radio': {
                    name: 'Checkbox & Radio',
                    page: 'checkbox-and-radio.html',
                },
                'switch': {
                    name: 'Switch',
                    page: 'switch.html',
                },
            },
        },
        layoutComponents: {
            name: 'Layout',
            items: {
                'layout-principles': {
                    name: 'Layout principles',
                    page: 'layout-principles.html',
                },
                'application-structure': {
                    name: 'Main application structure',
                    page: 'application-structure.html',
                },
                'pages': {
                    name: 'Page layouts',
                    page: 'pages.html',
                },
                'modules': {
                    name: 'Modules',
                    page: 'modules.html',
                },
            },
        }
        
    }))

    .factory('playgrounds', () => ({
        // Superdesk playgrounds
        superdesk: {
            'planning': {
                name: 'Planning',
                page: 'buttons.html'
            },
            'layout-grid': {
                name: 'Layout Grid',
                page: 'layout-grid.html'
            },
            'cards': {
                name: 'Cards',
                page: 'cards.html'
            },
            'side-navigation': {
                name: 'Side Navigation',
                page: 'side-navigation.html'
            },
            'list-item-test': {
                name: 'List Item Test',
                page: 'list-item-test.html'
            },
            'settings': {
                name: 'Settings',
                page: 'settings.html'
            },
            'photo-desk': {
                name: 'Photo Desk',
                page: 'photo-desk.html'
            },
            'media-carousel': {
                name: 'Media Carousel',
                page: 'media-carousel.html'
            },
            'tags-input': {
                name: 'Tags Input',
                page: 'tags-input.html'
            },
            'circular-progress': {
                name: 'Circular Progress',
                page: 'circular-progress.html'
            },
            'publish': {
                name: 'Publish Pane',
                page: 'publish.html'
            },
            'swimlane-view': {
                name: 'Swimlane View',
                page: 'swimlane-view.html'
            },
            'layout-test-2': {
                name: 'Layout Test',
                page: 'layout-test-2.html'
            },
            'toasts': {
                name: 'Toasts',
                page: 'toasts.html'
            },
            'form-layout': {
                name: 'Form layout',
                page: 'form-layout.html'
            },
            'boxed-list': {
                name: 'Boxed-list',
                page: 'boxed-list.html'
            },
            'video-editor': {
                name: 'Video editor',
                page: 'video-editor.html'
            },
            'nav-buttons': {
                name: 'Nav buttons',
                page: 'nav-buttons.html'
            },
            'accessible-theme-test': {
                name: 'Accessible theme',
                page: 'accessible-theme-test.html'
            },
            'master-desk': {
                name: 'Master Desk',
                page: 'master-desk.html'
            },
        },
        // Publisher playgrounds
        publisher: {
            'publisher-dashboard': {
                name: 'Dashboard',
                page: 'publisher-dashboard.html'
            },
            'publisher-content-lists': {
                name: 'Content Lists',
                page: 'publisher-content-lists.html'
            },
            'publisher-content-list-manual': {
                name: 'Content List - Manual',
                page: 'publisher-content-list-manual.html'
            },
            'publisher-content-list-automatic': {
                name: 'Content List - Automatic',
                page: 'publisher-content-list-automatic.html'
            },
            'publisher-output-control': {
                name: 'Output Control',
                page: 'publisher-output-control.html'
            },
            'publisher-content-analytics': {
                name: 'Content Analytics',
                page: 'publisher-content-analytics.html'
            },
            'publisher-website-settings': {
                name: 'Website Settings',
                page: 'publisher-website-settings.html'
            },
            'publisher-website-settings-general': {
                name: 'Website Settings - General',
                page: 'publisher-website-settings-general.html'
            },
        },

        // React playgrounds
        react: {
            'first-playground': {
                name: 'First playground',
                component: 'FirstPlayground'
            },
            'sams-playground': {
                name: 'SAMS',
                component: 'SamsPlayground'
            },
            'test-ground': {
                name: 'Test Ground',
                component: 'TestGround'
            },
            'ui-playground': {
                name: 'UI',
                component: 'UiPlayground'
            }
        }
    }))

    .config(($routeProvider) => {
        $routeProvider
            .when('/', {
                title: 'Main',
                template: require('../examples/pages/main.html')
            })
            .when('/design', {
                template: require('../examples/pages/design.html')
            })
            .when('/design/:name*', {
                template: require('../examples/pages/design.html')
            })
            .when('/components', {
                template: require('../examples/pages/components.html')
            })
            .when('/components/:name*', {
                template: require('../examples/pages/components.html')
            })
            .when('/react', {
                template: require('../examples/pages/react.html')
            })
            .when('/react/:name*', {
                template: require('../examples/pages/react.html')
            })
            .when('/playgrounds', {
                template: require('../examples/pages/playgrounds.html')
            })
            .when('/playgrounds/react/:name*', {
                template: '<doc-react-playground />'
            })
            .when('/playgrounds/:name*', {
                template: function (urlattr) {
                    return require('../examples/pages/playgrounds/' + urlattr.name + '.html');
                }
            })

            .otherwise({ redirectTo: '/' });

    }).run(function ($rootScope, $route) {
        $rootScope.$route = $route;
    });