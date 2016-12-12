'use strict';

angular.module('ui-docs', [

]).directive('prettyprint', function () {
    return {
        restrict: 'C',
        link: function (scope, element, attrs) {

            // Remove leading whitespaces
            var str = element[0].innerHTML;
            var pos = 0;
            var sum = 0;
            while (str.charCodeAt(pos) === 32) {
                sum = sum + 1;
                pos = pos + 1;
            }
            var pattern = '\\s{' + sum + '}';
            var spaces = new RegExp(pattern, 'g');
            element[0].innerHTML = str.replace(spaces, '\n');

            // Remove ng-non-bindable from code
            element.find('[ng-non-bindable=""]').each(function (i, val) {
                $(val).removeAttr('ng-non-bindable');
            });

            var langExtension = attrs['class'].match(/\blang(?:uage)?-([\w.]+)(?!\S)/);
            if (langExtension) {
                langExtension = langExtension[1];
            }

            element.html(window.prettyPrintOne(_.escape(element.html()), langExtension, true));
        }
    };
}).directive('docTabs', function () {
    return {
        link: function (scope, elem, attr, ctrl) {
            elem.find('.docs-page__window-bar').children('a').click(function (e) {
                e.preventDefault();
                $(this).addClass('active').siblings().removeClass('active');
                elem.find('.docs-page__code-' + $(this).attr('id')).show().siblings().hide();
            });
        }
    };
});
