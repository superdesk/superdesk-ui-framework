'use strict';
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k];
                      },
                  };
              }
              Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, 'default', {enumerable: true, value: v});
          }
        : function (o, v) {
              o['default'] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    (function () {
        var ownKeys = function (o) {
            ownKeys =
                Object.getOwnPropertyNames ||
                function (o) {
                    var ar = [];
                    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
                    return ar;
                };
            return ownKeys(o);
        };
        return function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
                for (var k = ownKeys(mod), i = 0; i < k.length; i++)
                    if (k[i] !== 'default') __createBinding(result, mod, k[i]);
            __setModuleDefault(result, mod);
            return result;
        };
    })();
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : {default: mod};
    };
Object.defineProperty(exports, '__esModule', {value: true});
exports.Tag = void 0;
var React = __importStar(require('react'));
var classnames_1 = __importDefault(require('classnames'));
var DragHandle_1 = require('./DragHandle');
var Tag = function (_a) {
    var _b;
    var text = _a.text,
        keyValue = _a.keyValue,
        shade = _a.shade,
        shape = _a.shape,
        readOnly = _a.readOnly,
        onClick = _a.onClick,
        label = _a.label,
        draggable = _a.draggable;
    var classes = (0, classnames_1.default)(
        'tag-label',
        ((_b = {}),
        (_b['tag-label--'.concat(shade)] = shade && shade !== 'light'),
        (_b['tag-label--square'] = shape === 'square'),
        (_b['tag-label--draggable'] = draggable === true),
        _b),
    );
    return React.createElement(
        React.Fragment,
        null,
        label
            ? React.createElement(
                  'span',
                  {className: classes, key: keyValue},
                  draggable &&
                      React.createElement(DragHandle_1.DragHandle, {blank: true, dotsInRow: '3', dotRows: '4'}),
                  React.createElement(
                      'span',
                      {className: 'tag-label--text-wrapper'},
                      React.createElement('span', {className: 'tag-label--text-label'}, label, ':'),
                      React.createElement('span', {className: 'tag-label--text'}, text),
                  ),
                  !readOnly
                      ? React.createElement(
                            'button',
                            {className: 'tag-label__remove', onClick: onClick},
                            React.createElement('i', {className: 'icon-close-small'}),
                        )
                      : null,
              )
            : React.createElement(
                  'span',
                  {className: classes, key: keyValue},
                  draggable &&
                      React.createElement(DragHandle_1.DragHandle, {blank: true, dotsInRow: '3', dotRows: '4'}),
                  React.createElement('span', {className: 'tag-label--text'}, text),
                  !readOnly
                      ? React.createElement(
                            'button',
                            {className: 'tag-label__remove', onClick: onClick},
                            React.createElement('i', {className: 'icon-close-small'}),
                        )
                      : null,
              ),
    );
};
exports.Tag = Tag;
