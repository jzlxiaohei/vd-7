(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if(process.env.NODE_ENV!=='production'){var REACT_ELEMENT_TYPE=typeof Symbol==='function'&&Symbol.for&&Symbol.for('react.element')||0xeac7;var isValidElement=function isValidElement(object){return(typeof object==='undefined'?'undefined':_typeof(object))==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;};// By explicitly using `prop-types` you are opting into new development behavior.
// http://fb.me/prop-types-in-prod
var throwOnDirectAccess=true;module.exports=__webpack_require__(12)(isValidElement,throwOnDirectAccess);}else{// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
module.exports=__webpack_require__(15)();}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});var _hoistStatics2=__webpack_require__(16);var _hoistStatics3=_interopRequireDefault(_hoistStatics2);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(2);var _propTypes2=_interopRequireDefault(_propTypes);var _classnames=__webpack_require__(18);var _classnames2=_interopRequireDefault(_classnames);var _invariant=__webpack_require__(19);var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}// this hoc is for design, prod should have another one
function widgetPreview(options){var className=options.className;if(process.env.NODE_ENV!=='production'){(0,_invariant2.default)(!!className,'className is required');// invariant(!!options.style, "@Page(options): options.style is required, if no style, pls set { style: false}");
}var hoc=function hoc(OriginComponent){var WidgetComponent=function(_React$Component){_inherits(WidgetComponent,_React$Component);function WidgetComponent(){var _ref;var _temp,_this,_ret;_classCallCheck(this,WidgetComponent);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=WidgetComponent.__proto__||Object.getPrototypeOf(WidgetComponent)).call.apply(_ref,[this].concat(args))),_this),_this.displayName='WidgetComponent_'+options.className,_this.getClassName=function(){var otherProps=_this.props.otherProps||{};return(0,_classnames2.default)(options.className,'vd7',{absolute:otherProps.style&&otherProps.style.position==='absolute'});},_this.getProps=function(){var otherProps=_this.props.otherProps||{};otherProps.className=_this.getClassName();return{otherProps:otherProps,attr:_this.props.attr||{}};},_temp),_possibleConstructorReturn(_this,_ret);}// static propTypes = {
//   model: PropTypes.object.isRequired,
// }
_createClass(WidgetComponent,[{key:'render',value:function render(){var props=this.getProps();return _react2.default.createElement(OriginComponent,_extends({childNodes:this.props.children},props));}}]);return WidgetComponent;}(_react2.default.Component);WidgetComponent.WrappedComponent=OriginComponent;WidgetComponent.$options=options;return WidgetComponent;};return(0,_hoistStatics3.default)(hoc);}exports.default=widgetPreview;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */function makeEmptyFunction(arg){return function(){return arg;};}/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */var emptyFunction=function emptyFunction(){};emptyFunction.thatReturns=makeEmptyFunction;emptyFunction.thatReturnsFalse=makeEmptyFunction(false);emptyFunction.thatReturnsTrue=makeEmptyFunction(true);emptyFunction.thatReturnsNull=makeEmptyFunction(null);emptyFunction.thatReturnsThis=function(){return this;};emptyFunction.thatReturnsArgument=function(arg){return arg;};module.exports=emptyFunction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *//**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */var validateFormat=function validateFormat(format){};if(process.env.NODE_ENV!=='production'){validateFormat=function validateFormat(format){if(format===undefined){throw new Error('invariant requires an error message argument');}};}function invariant(condition,format,a,b,c,d,e,f){validateFormat(format);if(!condition){var error;if(format===undefined){error=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else{var args=[a,b,c,d,e,f];var argIndex=0;error=new Error(format.replace(/%s/g,function(){return args[argIndex++];}));error.name='Invariant Violation';}error.framesToPop=1;// we don't care about invariant's own frame
throw error;}}module.exports=invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';module.exports=ReactPropTypesSecret;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */var emptyFunction=__webpack_require__(4);/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var warning=emptyFunction;if(process.env.NODE_ENV!=='production'){var printWarning=function printWarning(format){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});if(typeof console!=='undefined'){console.error(message);}try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(message);}catch(x){}};warning=function warning(condition,format){if(format===undefined){throw new Error('`warning(condition, format, ...args)` requires a warning '+'message argument');}if(format.indexOf('Failed Composite propType: ')===0){return;// Ignore CompositeComponent proptype check.
}if(!condition){for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){args[_key2-2]=arguments[_key2];}printWarning.apply(undefined,[format].concat(args));}};}module.exports=warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactDom=__webpack_require__(10);var _reactDom2=_interopRequireDefault(_reactDom);var _Preview=__webpack_require__(11);var _Preview2=_interopRequireDefault(_Preview);var _Preview3=__webpack_require__(20);var _Preview4=_interopRequireDefault(_Preview3);var _Preview5=__webpack_require__(26);var _Preview6=_interopRequireDefault(_Preview5);var _Preview7=__webpack_require__(27);var _Preview8=_interopRequireDefault(_Preview7);var _Preview9=__webpack_require__(28);var _Preview10=_interopRequireDefault(_Preview9);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Vd=function(_React$Component){_inherits(Vd,_React$Component);function Vd(){_classCallCheck(this,Vd);return _possibleConstructorReturn(this,(Vd.__proto__||Object.getPrototypeOf(Vd)).apply(this,arguments));}_createClass(Vd,[{key:'render',value:function render(){return _react2.default.createElement(_Preview2.default,{attr:{inline:false}},_react2.default.createElement(_Preview4.default,{otherProps:{style:{color:'red'}},attr:{text:'button text',draggable:false}}),_react2.default.createElement(_Preview2.default,{attr:{inline:false,draggable:false}},_react2.default.createElement(_Preview4.default,{otherProps:{style:{color:'red'}},attr:{text:'button text',draggable:false}}),_react2.default.createElement(_Preview4.default,{otherProps:{style:{color:'red'}},attr:{text:'button text',draggable:false}})),_react2.default.createElement(_Preview6.default,{attr:{url:'https://avatars1.githubusercontent.com/u/1884248?s=460&v=4',draggable:false}}),_react2.default.createElement(_Preview8.default,{attr:{text:'link text',draggable:false}}),_react2.default.createElement(_Preview10.default,{attr:{draggable:false}},_react2.default.createElement(_Preview4.default,{otherProps:{style:{color:'red'}},attr:{text:'button text',draggable:false}}),_react2.default.createElement(_Preview4.default,{otherProps:{style:{color:'red'}},attr:{text:'button text',draggable:false}})));}}]);return Vd;}(_react2.default.Component);_reactDom2.default.render(_react2.default.createElement(Vd,null),document.getElementById('root'));

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class;var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(2);var _propTypes2=_interopRequireDefault(_propTypes);var _preview=__webpack_require__(3);var _preview2=_interopRequireDefault(_preview);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ContainerPreview=(_dec=(0,_preview2.default)({className:'v7_container'}),_dec(_class=function(_React$Component){_inherits(ContainerPreview,_React$Component);function ContainerPreview(){_classCallCheck(this,ContainerPreview);return _possibleConstructorReturn(this,(ContainerPreview.__proto__||Object.getPrototypeOf(ContainerPreview)).apply(this,arguments));}_createClass(ContainerPreview,[{key:'render',value:function render(){var props=this.props;var className=props.otherProps.className;if(props.attr.inline){className+=' inline';}return _react2.default.createElement('div',_extends({},props.otherProps,{className:className}),props.childNodes);}}]);return ContainerPreview;}(_react2.default.Component))||_class);exports.default=ContainerPreview;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var emptyFunction=__webpack_require__(4);var invariant=__webpack_require__(5);var warning=__webpack_require__(7);var assign=__webpack_require__(13);var ReactPropTypesSecret=__webpack_require__(6);var checkPropTypes=__webpack_require__(14);module.exports=function(isValidElement,throwOnDirectAccess){/* global Symbol */var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';// Before Symbol spec.
/**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}/**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */var ANONYMOUS='<<anonymous>>';// Important!
// Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),symbol:createPrimitiveTypeChecker('symbol'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,exact:createStrictShapeTypeChecker};/**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   *//*eslint-disable no-self-compare*/function is(x,y){// SameValue algorithm
if(x===y){// Steps 1-5, 7-10
// Steps 6.b-6.e: +0 != -0
return x!==0||1/x===1/y;}else{// Step 6.a: NaN == NaN
return x!==x&&y!==y;}}/*eslint-enable no-self-compare*//**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */function PropTypeError(message){this.message=message;this.stack='';}// Make `instanceof Error` still work for returned errors.
PropTypeError.prototype=Error.prototype;function createChainableTypeChecker(validate){if(process.env.NODE_ENV!=='production'){var manualPropTypeCallCache={};var manualPropTypeWarningCount=0;}function checkType(isRequired,props,propName,componentName,location,propFullName,secret){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(secret!==ReactPropTypesSecret){if(throwOnDirectAccess){// New behavior only for users of `prop-types` package
invariant(false,'Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use `PropTypes.checkPropTypes()` to call them. '+'Read more at http://fb.me/use-check-prop-types');}else if(process.env.NODE_ENV!=='production'&&typeof console!=='undefined'){// Old behavior for people using React.PropTypes
var cacheKey=componentName+':'+propName;if(!manualPropTypeCallCache[cacheKey]&&// Avoid spamming the console because they are often not actionable except for lib authors
manualPropTypeWarningCount<3){warning(false,'You are manually calling a React.PropTypes validation '+'function for the `%s` prop on `%s`. This is deprecated '+'and will throw in the standalone `prop-types` package. '+'You may be seeing this warning due to a third-party PropTypes '+'library. See https://fb.me/react-warning-dont-call-proptypes '+'for details.',propFullName,componentName);manualPropTypeCallCache[cacheKey]=true;manualPropTypeWarningCount++;}}}if(props[propName]==null){if(isRequired){if(props[propName]===null){return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required '+('in `'+componentName+'`, but its value is `null`.'));}return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required in '+('`'+componentName+'`, but its value is `undefined`.'));}return null;}else{return validate(props,propName,componentName,location,propFullName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName,secret){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){// `propValue` being instance of, say, date/regexp, pass the 'object'
// check, but we can offer a more precise error message here rather than
// 'of type `object`'.
var preciseType=getPreciseType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'));}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunction.thatReturnsNull);}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');}var propValue=props[propName];if(!Array.isArray(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']',ReactPropTypesSecret);if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!isValidElement(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement.'));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName]instanceof expectedClass)){var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){process.env.NODE_ENV!=='production'?warning(false,'Invalid argument supplied to oneOf, expected an instance of array.'):void 0;return emptyFunction.thatReturnsNull;}function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(is(propValue,expectedValues[i])){return null;}}var valuesString=JSON.stringify(expectedValues);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of value `'+propValue+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');}var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}for(var key in propValue){if(propValue.hasOwnProperty(key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){process.env.NODE_ENV!=='production'?warning(false,'Invalid argument supplied to oneOfType, expected an instance of array.'):void 0;return emptyFunction.thatReturnsNull;}for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(typeof checker!=='function'){warning(false,'Invalid argument supplied to oneOfType. Expected an array of check functions, but '+'received %s at index %s.',getPostfixForTypeWarning(checker),i);return emptyFunction.thatReturnsNull;}}function validate(props,propName,componentName,location,propFullName){for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(checker(props,propName,componentName,location,propFullName,ReactPropTypesSecret)==null){return null;}}return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`.'));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}return null;}return createChainableTypeChecker(validate);}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}for(var key in shapeTypes){var checker=shapeTypes[key];if(!checker){continue;}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function createStrictShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}// We need to check all keys in case some are required but missing from
// props.
var allKeys=assign({},props[propName],shapeTypes);for(var key in allKeys){var checker=shapeTypes[key];if(!checker){return new PropTypeError('Invalid '+location+' `'+propFullName+'` key `'+key+'` supplied to `'+componentName+'`.'+'\nBad object: '+JSON.stringify(props[propName],null,'  ')+'\nValid keys: '+JSON.stringify(Object.keys(shapeTypes),null,'  '));}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue==='undefined'?'undefined':_typeof(propValue)){case'number':case'string':case'undefined':return true;case'boolean':return!propValue;case'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue===null||isValidElement(propValue)){return true;}var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else{// Iterator will provide entry [k,v] tuples rather than values.
while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else{return false;}return true;default:return false;}}function isSymbol(propType,propValue){// Native Symbol.
if(propType==='symbol'){return true;}// 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
if(propValue['@@toStringTag']==='Symbol'){return true;}// Fallback for non-spec compliant Symbols which are polyfilled.
if(typeof Symbol==='function'&&propValue instanceof Symbol){return true;}return false;}// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue){var propType=typeof propValue==='undefined'?'undefined':_typeof(propValue);if(Array.isArray(propValue)){return'array';}if(propValue instanceof RegExp){// Old webkits (at least until Android 4.0) return 'function' rather than
// 'object' for typeof a RegExp. We'll normalize this here so that /bla/
// passes PropTypes.object.
return'object';}if(isSymbol(propType,propValue)){return'symbol';}return propType;}// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue){if(typeof propValue==='undefined'||propValue===null){return''+propValue;}var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return'date';}else if(propValue instanceof RegExp){return'regexp';}}return propType;}// Returns a string that is postfixed to a warning about an invalid type.
// For example, "undefined" or "of type array"
function getPostfixForTypeWarning(value){var type=getPreciseType(value);switch(type){case'array':case'object':return'an '+type;case'boolean':case'date':case'regexp':return'a '+type;default:return type;}}// Returns class name of the object, if any.
function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return ANONYMOUS;}return propValue.constructor.name;}ReactPropTypes.checkPropTypes=checkPropTypes;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*//* eslint-disable no-unused-vars */var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var test1=new String('abc');// eslint-disable-line no-new-wrappers
test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys(Object.assign({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(err){// We don't expect any of the above to throw, but better to be safe.
return false;}}module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};if(process.env.NODE_ENV!=='production'){var invariant=__webpack_require__(5);var warning=__webpack_require__(7);var ReactPropTypesSecret=__webpack_require__(6);var loggedTypeFailures={};}/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */function checkPropTypes(typeSpecs,values,location,componentName,getStack){if(process.env.NODE_ENV!=='production'){for(var typeSpecName in typeSpecs){if(typeSpecs.hasOwnProperty(typeSpecName)){var error;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
invariant(typeof typeSpecs[typeSpecName]==='function','%s: %s type `%s` is invalid; it must be a function, usually from '+'the `prop-types` package, but received `%s`.',componentName||'React class',location,typeSpecName,_typeof(typeSpecs[typeSpecName]));error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);}catch(ex){error=ex;}warning(!error||error instanceof Error,'%s: type specification of %s `%s` is invalid; the type checker '+'function must return `null` or an `Error` but returned a %s. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).',componentName||'React class',location,typeSpecName,typeof error==='undefined'?'undefined':_typeof(error));if(error instanceof Error&&!(error.message in loggedTypeFailures)){// Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error.message]=true;var stack=getStack?getStack():'';warning(false,'Failed %s type: %s%s',location,error.message,stack!=null?stack:'');}}}}}module.exports=checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var emptyFunction=__webpack_require__(4);var invariant=__webpack_require__(5);var ReactPropTypesSecret=__webpack_require__(6);module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){// It is still safe when called from React.
return;}invariant(false,'Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use PropTypes.checkPropTypes() to call them. '+'Read more at http://fb.me/use-check-prop-types');};shim.isRequired=shim;function getShim(){return shim;};// Important!
// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim};ReactPropTypes.checkPropTypes=emptyFunction;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;var _hoistNonReactStatics=__webpack_require__(17);var _hoistNonReactStatics2=_interopRequireDefault(_hoistNonReactStatics);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var hoistStatics=function hoistStatics(higherOrderComponent){return function(BaseComponent){var NewComponent=higherOrderComponent(BaseComponent);(0,_hoistNonReactStatics2.default)(NewComponent,BaseComponent);return NewComponent;};};exports.default=hoistStatics;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */var REACT_STATICS={childContextTypes:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,mixins:true,propTypes:true,type:true};var KNOWN_STATICS={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true};var defineProperty=Object.defineProperty;var getOwnPropertyNames=Object.getOwnPropertyNames;var getOwnPropertySymbols=Object.getOwnPropertySymbols;var getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;var getPrototypeOf=Object.getPrototypeOf;var objectPrototype=getPrototypeOf&&getPrototypeOf(Object);module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if(typeof sourceComponent!=='string'){// don't hoist over string (html) components
if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);if(inheritedComponent&&inheritedComponent!==objectPrototype){hoistNonReactStatics(targetComponent,inheritedComponent,blacklist);}}var keys=getOwnPropertyNames(sourceComponent);if(getOwnPropertySymbols){keys=keys.concat(getOwnPropertySymbols(sourceComponent));}for(var i=0;i<keys.length;++i){var key=keys[i];if(!REACT_STATICS[key]&&!KNOWN_STATICS[key]&&(!blacklist||!blacklist[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{// Avoid failures from read-only properties
defineProperty(targetComponent,key,descriptor);}catch(e){}}}return targetComponent;}return targetComponent;};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*//* global define */(function(){'use strict';var hasOwn={}.hasOwnProperty;function classNames(){var classes=[];for(var i=0;i<arguments.length;i++){var arg=arguments[i];if(!arg)continue;var argType=typeof arg==='undefined'?'undefined':_typeof(arg);if(argType==='string'||argType==='number'){classes.push(arg);}else if(Array.isArray(arg)){classes.push(classNames.apply(null,arg));}else if(argType==='object'){for(var key in arg){if(hasOwn.call(arg,key)&&arg[key]){classes.push(key);}}}}return classes.join(' ');}if(typeof module!=='undefined'&&module.exports){module.exports=classNames;}else if("function"==='function'&&_typeof(__webpack_require__(8))==='object'&&__webpack_require__(8)){// register as 'classnames', consistent with npm package name
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return classNames;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else{window.classNames=classNames;}})();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *//**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */var invariant=function invariant(condition,format,a,b,c,d,e,f){if(process.env.NODE_ENV!=='production'){if(format===undefined){throw new Error('invariant requires an error message argument');}}if(!condition){var error;if(format===undefined){error=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else{var args=[a,b,c,d,e,f];var argIndex=0;error=new Error(format.replace(/%s/g,function(){return args[argIndex++];}));error.name='Invariant Violation';}error.framesToPop=1;// we don't care about invariant's own frame
throw error;}};module.exports=invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class;var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(2);var _propTypes2=_interopRequireDefault(_propTypes);var _preview=__webpack_require__(3);var _preview2=_interopRequireDefault(_preview);__webpack_require__(21);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ButtonPreview=(_dec=(0,_preview2.default)({className:'v7_button'}),_dec(_class=function(_React$Component){_inherits(ButtonPreview,_React$Component);function ButtonPreview(){_classCallCheck(this,ButtonPreview);return _possibleConstructorReturn(this,(ButtonPreview.__proto__||Object.getPrototypeOf(ButtonPreview)).apply(this,arguments));}_createClass(ButtonPreview,[{key:'render',value:function render(){var props=this.props;return _react2.default.createElement('div',props.otherProps,props.attr.text,props.extra);}}]);return ButtonPreview;}(_react2.default.Component))||_class);exports.default=ButtonPreview;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(24)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!../../../node_modules/less-loader/dist/cjs.js!./style.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!../../../node_modules/less-loader/dist/cjs.js!./style.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(undefined);
// imports


// module
exports.push([module.i, ".v7_button{height:44px;line-height:44px;text-align:center;background:#87d068;color:#fff;font-size:16px;margin:0 auto;width:100%}", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/// css base code, injected by the css-loader
module.exports=function(useSourceMap){var list=[];// return the list of modules as css string
list.toString=function toString(){return this.map(function(item){var content=cssWithMappingToString(item,useSourceMap);if(item[2]){return"@media "+item[2]+"{"+content+"}";}else{return content;}}).join("");};// import a list of modules into the list
list.i=function(modules,mediaQuery){if(typeof modules==="string")modules=[[null,modules,""]];var alreadyImportedModules={};for(var i=0;i<this.length;i++){var id=this[i][0];if(typeof id==="number")alreadyImportedModules[id]=true;}for(i=0;i<modules.length;i++){var item=modules[i];// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
if(typeof item[0]!=="number"||!alreadyImportedModules[item[0]]){if(mediaQuery&&!item[2]){item[2]=mediaQuery;}else if(mediaQuery){item[2]="("+item[2]+") and ("+mediaQuery+")";}list.push(item);}}};return list;};function cssWithMappingToString(item,useSourceMap){var content=item[1]||'';var cssMapping=item[3];if(!cssMapping){return content;}if(useSourceMap&&typeof btoa==='function'){var sourceMapping=toComment(cssMapping);var sourceURLs=cssMapping.sources.map(function(source){return'/*# sourceURL='+cssMapping.sourceRoot+source+' */';});return[content].concat(sourceURLs).concat([sourceMapping]).join('\n');}return[content].join('\n');}// Adapted from convert-source-map (MIT)
function toComment(sourceMap){// eslint-disable-next-line no-undef
var base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));var data='sourceMappingURL=data:application/json;charset=utf-8;base64,'+base64;return'/*# '+data+' */';}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(25);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */module.exports=function(css){// get current location
var location=typeof window!=="undefined"&&window.location;if(!location){throw new Error("fixUrls requires window.location");}// blank or null?
if(!css||typeof css!=="string"){return css;}var baseUrl=location.protocol+"//"+location.host;var currentDir=baseUrl+location.pathname.replace(/\/[^\/]*$/,"/");// convert each url(...)
/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */var fixedCss=css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(fullMatch,origUrl){// strip quotes (if they exist)
var unquotedOrigUrl=origUrl.trim().replace(/^"(.*)"$/,function(o,$1){return $1;}).replace(/^'(.*)'$/,function(o,$1){return $1;});// already a full url? no change
if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)){return fullMatch;}// convert the url to a full url
var newUrl;if(unquotedOrigUrl.indexOf("//")===0){//TODO: should we add protocol?
newUrl=unquotedOrigUrl;}else if(unquotedOrigUrl.indexOf("/")===0){// path should be relative to the base url
newUrl=baseUrl+unquotedOrigUrl;// already starts with '/'
}else{// path should be relative to current directory
newUrl=currentDir+unquotedOrigUrl.replace(/^\.\//,"");// Strip leading './'
}// send back the fixed url(...)
return"url("+JSON.stringify(newUrl)+")";});// send back the fixed css
return fixedCss;};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class;var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(2);var _propTypes2=_interopRequireDefault(_propTypes);var _preview=__webpack_require__(3);var _preview2=_interopRequireDefault(_preview);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ContainerPreview=(_dec=(0,_preview2.default)({className:'v7_picture'}),_dec(_class=function(_React$Component){_inherits(ContainerPreview,_React$Component);function ContainerPreview(){_classCallCheck(this,ContainerPreview);return _possibleConstructorReturn(this,(ContainerPreview.__proto__||Object.getPrototypeOf(ContainerPreview)).apply(this,arguments));}_createClass(ContainerPreview,[{key:'render',value:function render(){var props=this.props;var attr=props.attr;var link=attr.link;var imgDom=_react2.default.createElement('img',{src:attr.url,alt:'img err',draggable:'false'});return _react2.default.createElement('div',props.otherProps,link?_react2.default.createElement('a',{href:attr.link,draggable:'false'},imgDom):imgDom);}}]);return ContainerPreview;}(_react2.default.Component))||_class);exports.default=ContainerPreview;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class;var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(2);var _propTypes2=_interopRequireDefault(_propTypes);var _preview=__webpack_require__(3);var _preview2=_interopRequireDefault(_preview);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ContainerPreview=(_dec=(0,_preview2.default)({className:'v7_link'}),_dec(_class=function(_React$Component){_inherits(ContainerPreview,_React$Component);function ContainerPreview(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ContainerPreview);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ContainerPreview.__proto__||Object.getPrototypeOf(ContainerPreview)).call.apply(_ref,[this].concat(args))),_this),_this.handleClick=function(e){e.preventDefault();if(_this.props.otherProps.onClick)_this.props.otherProps.onClick(e);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ContainerPreview,[{key:'render',value:function render(){var props=this.props;var attr=props.attr;return _react2.default.createElement('a',_extends({},props.otherProps,{href:attr.link,onClick:this.handleClick}),attr.text||props.childNodes);}}]);return ContainerPreview;}(_react2.default.Component))||_class);exports.default=ContainerPreview;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _dec,_class,_class2,_temp;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(2);var _propTypes2=_interopRequireDefault(_propTypes);var _preview=__webpack_require__(3);var _preview2=_interopRequireDefault(_preview);var _siema=__webpack_require__(29);var _siema2=_interopRequireDefault(_siema);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var InnerComp=function(_React$Component){_inherits(InnerComp,_React$Component);function InnerComp(){_classCallCheck(this,InnerComp);return _possibleConstructorReturn(this,(InnerComp.__proto__||Object.getPrototypeOf(InnerComp)).apply(this,arguments));}_createClass(InnerComp,[{key:'componentDidMount',value:function componentDidMount(){this.init();}},{key:'init',value:function init(){this.siema=new _siema2.default({selector:this.containerRef});}},{key:'destroy',value:function destroy(){if(this.siema){this.siema.destroy();this.siema=undefined;this.containerRef=undefined;}}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.destroy();}},{key:'render',value:function render(){var _this2=this;return _react2.default.createElement('div',{className:'slick-container',ref:function ref(el){return _this2.containerRef=el;}},this.props.childNodes.map(function(ch,index){return _react2.default.createElement('div',{className:'slick-item',key:index},ch);}));}}]);return InnerComp;}(_react2.default.Component);var SwipePreview=(_dec=(0,_preview2.default)({className:'v7_swipe'}),_dec(_class=(_temp=_class2=function(_React$Component2){_inherits(SwipePreview,_React$Component2);function SwipePreview(){_classCallCheck(this,SwipePreview);return _possibleConstructorReturn(this,(SwipePreview.__proto__||Object.getPrototypeOf(SwipePreview)).apply(this,arguments));}_createClass(SwipePreview,[{key:'render',value:function render(){var props=this.props;var childNodes=props.childNodes;return _react2.default.createElement('div',props.otherProps,_react2.default.createElement(InnerComp,{key:childNodes.length,childNodes:childNodes}));}}]);return SwipePreview;}(_react2.default.Component),_class2.defaultProps={childNodes:[]},_temp))||_class);exports.default=SwipePreview;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Hi :-) This is a class representing a Siema.
 */var Siema=function(){/**
   * Create a Siema.
   * @param {Object} options - Optional settings object.
   */function Siema(options){var _this=this;_classCallCheck(this,Siema);// Merge defaults with user's settings
this.config=Siema.mergeSettings(options);// Resolve selector's type
this.selector=typeof this.config.selector==='string'?document.querySelector(this.config.selector):this.config.selector;// Early throw if selector doesn't exists
if(this.selector===null){throw new Error('Something wrong with your selector 😭');}// Create global references
this.selectorWidth=this.selector.offsetWidth;this.innerElements=[].slice.call(this.selector.children);this.currentSlide=this.config.startIndex;this.transformProperty=Siema.webkitOrNot();// Bind all event handlers for referencability
['resizeHandler','touchstartHandler','touchendHandler','touchmoveHandler','mousedownHandler','mouseupHandler','mouseleaveHandler','mousemoveHandler'].forEach(function(method){_this[method]=_this[method].bind(_this);});// Build markup and apply required styling to elements
this.init();}/**
   * Overrides default settings with custom ones.
   * @param {Object} options - Optional settings object.
   * @returns {Object} - Custom Siema settings.
   */_createClass(Siema,[{key:'attachEvents',/**
   * Attaches listeners to required events.
   */value:function attachEvents(){// Resize element on window resize
window.addEventListener('resize',this.resizeHandler);// If element is draggable / swipable, add event handlers
if(this.config.draggable){// Keep track pointer hold and dragging distance
this.pointerDown=false;this.drag={startX:0,endX:0,startY:0,letItGo:null};// Touch events
this.selector.addEventListener('touchstart',this.touchstartHandler,{passive:true});this.selector.addEventListener('touchend',this.touchendHandler);this.selector.addEventListener('touchmove',this.touchmoveHandler,{passive:true});// Mouse events
this.selector.addEventListener('mousedown',this.mousedownHandler);this.selector.addEventListener('mouseup',this.mouseupHandler);this.selector.addEventListener('mouseleave',this.mouseleaveHandler);this.selector.addEventListener('mousemove',this.mousemoveHandler);}}/**
   * Detaches listeners from required events.
   */},{key:'detachEvents',value:function detachEvents(){window.removeEventListener('resize',this.resizeHandler);this.selector.style.cursor='auto';this.selector.removeEventListener('touchstart',this.touchstartHandler);this.selector.removeEventListener('touchend',this.touchendHandler);this.selector.removeEventListener('touchmove',this.touchmoveHandler);this.selector.removeEventListener('mousedown',this.mousedownHandler);this.selector.removeEventListener('mouseup',this.mouseupHandler);this.selector.removeEventListener('mouseleave',this.mouseleaveHandler);this.selector.removeEventListener('mousemove',this.mousemoveHandler);}/**
   * Builds the markup and attaches listeners to required events.
   */},{key:'init',value:function init(){this.attachEvents();// update perPage number dependable of user value
this.resolveSlidesNumber();// hide everything out of selector's boundaries
// this.selector.style.overflow = 'hidden';
// Create frame and apply styling
this.sliderFrame=document.createElement('div');this.sliderFrame.classList.add('slide-frame');this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+'px';this.sliderFrame.style.webkitTransition='all '+this.config.duration+'ms '+this.config.easing;this.sliderFrame.style.transition='all '+this.config.duration+'ms '+this.config.easing;if(this.config.draggable){this.selector.style.cursor='-webkit-grab';}// Create a document fragment to put slides into it
var docFragment=document.createDocumentFragment();// Loop through the slides, add styling and add them to document fragment
for(var i=0;i<this.innerElements.length;i++){var elementContainer=document.createElement('div');elementContainer.style.width=100/this.innerElements.length+'%';elementContainer.appendChild(this.innerElements[i]);docFragment.appendChild(elementContainer);}// Add fragment to the frame
this.sliderFrame.appendChild(docFragment);// Clear selector (just in case something is there) and insert a frame
this.selector.innerHTML='';this.selector.appendChild(this.sliderFrame);// Go to currently active slide after initial build
this.slideToCurrent();this.config.onInit.call(this);}/**
   * Determinates slides number accordingly to clients viewport.
   */},{key:'resolveSlidesNumber',value:function resolveSlidesNumber(){if(typeof this.config.perPage==='number'){this.perPage=this.config.perPage;}else if(_typeof(this.config.perPage)==='object'){this.perPage=1;for(var viewport in this.config.perPage){if(window.innerWidth>=viewport){this.perPage=this.config.perPage[viewport];}}}}/**
   * Go to previous slide.
   * @param {number} [howManySlides=1] - How many items to slide backward.
   * @param {function} callback - Optional callback function.
   */},{key:'prev',value:function prev(){var howManySlides=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var callback=arguments[1];if(this.innerElements.length<=this.perPage){return;}var beforeChange=this.currentSlide;if(this.currentSlide===0&&this.config.loop){this.currentSlide=this.innerElements.length-this.perPage;}else{this.currentSlide=Math.max(this.currentSlide-howManySlides,0);}if(beforeChange!==this.currentSlide){this.slideToCurrent();this.config.onChange.call(this);if(callback){callback.call(this);}}}/**
   * Go to next slide.
   * @param {number} [howManySlides=1] - How many items to slide forward.
   * @param {function} callback - Optional callback function.
   */},{key:'next',value:function next(){var howManySlides=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var callback=arguments[1];if(this.innerElements.length<=this.perPage){return;}var beforeChange=this.currentSlide;if(this.currentSlide===this.innerElements.length-this.perPage&&this.config.loop){this.currentSlide=0;}else{this.currentSlide=Math.min(this.currentSlide+howManySlides,this.innerElements.length-this.perPage);}if(beforeChange!==this.currentSlide){this.slideToCurrent();this.config.onChange.call(this);if(callback){callback.call(this);}}}/**
   * Go to slide with particular index
   * @param {number} index - Item index to slide to.
   * @param {function} callback - Optional callback function.
   */},{key:'goTo',value:function goTo(index,callback){if(this.innerElements.length<=this.perPage){return;}var beforeChange=this.currentSlide;this.currentSlide=Math.min(Math.max(index,0),this.innerElements.length-this.perPage);if(beforeChange!==this.currentSlide){this.slideToCurrent();this.config.onChange.call(this);if(callback){callback.call(this);}}}/**
   * Moves sliders frame to position of currently active slide
   */},{key:'slideToCurrent',value:function slideToCurrent(){this.sliderFrame.style[this.transformProperty]='translate3d(-'+this.currentSlide*(this.selectorWidth/this.perPage)+'px, 0, 0)';}/**
   * Recalculate drag /swipe event and reposition the frame of a slider
   */},{key:'updateAfterDrag',value:function updateAfterDrag(){var movement=this.drag.endX-this.drag.startX;var movementDistance=Math.abs(movement);var howManySliderToSlide=this.config.multipleDrag?Math.ceil(movementDistance/(this.selectorWidth/this.perPage)):1;if(movement>0&&movementDistance>this.config.threshold&&this.innerElements.length>this.perPage){this.prev(howManySliderToSlide);}else if(movement<0&&movementDistance>this.config.threshold&&this.innerElements.length>this.perPage){this.next(howManySliderToSlide);}this.slideToCurrent();}/**
   * When window resizes, resize slider components as well
   */},{key:'resizeHandler',value:function resizeHandler(){// update perPage number dependable of user value
this.resolveSlidesNumber();this.selectorWidth=this.selector.offsetWidth;this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+'px';this.slideToCurrent();}/**
   * Clear drag after touchend and mouseup event
   */},{key:'clearDrag',value:function clearDrag(){this.drag={startX:0,endX:0,startY:0,letItGo:null};}/**
   * touchstart event handler
   */},{key:'touchstartHandler',value:function touchstartHandler(e){e.stopPropagation();this.pointerDown=true;this.drag.startX=e.touches[0].pageX;this.drag.startY=e.touches[0].pageY;}/**
   * touchend event handler
   */},{key:'touchendHandler',value:function touchendHandler(e){e.stopPropagation();this.pointerDown=false;this.sliderFrame.style.webkitTransition='all '+this.config.duration+'ms '+this.config.easing;this.sliderFrame.style.transition='all '+this.config.duration+'ms '+this.config.easing;if(this.drag.endX){this.updateAfterDrag();}this.clearDrag();}/**
   * touchmove event handler
   */},{key:'touchmoveHandler',value:function touchmoveHandler(e){e.stopPropagation();if(this.drag.letItGo===null){this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX);}if(this.pointerDown&&this.drag.letItGo){e.preventDefault();this.drag.endX=e.touches[0].pageX;this.sliderFrame.style.webkitTransition='all 0ms '+this.config.easing;this.sliderFrame.style.transition='all 0ms '+this.config.easing;this.sliderFrame.style[this.transformProperty]='translate3d('+(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))*-1+'px, 0, 0)';}}/**
   * mousedown event handler
   */},{key:'mousedownHandler',value:function mousedownHandler(e){e.preventDefault();e.stopPropagation();this.pointerDown=true;this.drag.startX=e.pageX;}/**
   * mouseup event handler
   */},{key:'mouseupHandler',value:function mouseupHandler(e){e.stopPropagation();this.pointerDown=false;this.selector.style.cursor='-webkit-grab';this.sliderFrame.style.webkitTransition='all '+this.config.duration+'ms '+this.config.easing;this.sliderFrame.style.transition='all '+this.config.duration+'ms '+this.config.easing;if(this.drag.endX){this.updateAfterDrag();}this.clearDrag();}/**
   * mousemove event handler
   */},{key:'mousemoveHandler',value:function mousemoveHandler(e){e.preventDefault();if(this.pointerDown){this.drag.endX=e.pageX;this.selector.style.cursor='-webkit-grabbing';this.sliderFrame.style.webkitTransition='all 0ms '+this.config.easing;this.sliderFrame.style.transition='all 0ms '+this.config.easing;this.sliderFrame.style[this.transformProperty]='translate3d('+(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))*-1+'px, 0, 0)';}}/**
   * mouseleave event handler
   */},{key:'mouseleaveHandler',value:function mouseleaveHandler(e){if(this.pointerDown){this.pointerDown=false;this.selector.style.cursor='-webkit-grab';this.drag.endX=e.pageX;this.sliderFrame.style.webkitTransition='all '+this.config.duration+'ms '+this.config.easing;this.sliderFrame.style.transition='all '+this.config.duration+'ms '+this.config.easing;this.updateAfterDrag();this.clearDrag();}}/**
   * Update after removing, prepending or appending items.
   */},{key:'updateFrame',value:function updateFrame(){// Create frame and apply styling
this.sliderFrame=document.createElement('div');this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+'px';this.sliderFrame.style.webkitTransition='all '+this.config.duration+'ms '+this.config.easing;this.sliderFrame.style.transition='all '+this.config.duration+'ms '+this.config.easing;if(this.config.draggable){this.selector.style.cursor='-webkit-grab';}// Create a document fragment to put slides into it
var docFragment=document.createDocumentFragment();// Loop through the slides, add styling and add them to document fragment
for(var i=0;i<this.innerElements.length;i++){var elementContainer=document.createElement('div');elementContainer.style.cssFloat='left';elementContainer.style.float='left';elementContainer.style.width=100/this.innerElements.length+'%';elementContainer.appendChild(this.innerElements[i]);docFragment.appendChild(elementContainer);}// Add fragment to the frame
this.sliderFrame.appendChild(docFragment);// Clear selector (just in case something is there) and insert a frame
this.selector.innerHTML='';this.selector.appendChild(this.sliderFrame);// Go to currently active slide after initial build
this.slideToCurrent();}/**
   * Remove item from carousel.
   * @param {number} index - Item index to remove.
   * @param {function} callback - Optional callback to call after remove.
   */},{key:'remove',value:function remove(index,callback){if(index<0||index>=this.innerElements.length){throw new Error('Item to remove doesn\'t exist 😭');}this.innerElements.splice(index,1);this.updateFrame();if(callback){callback.call(this);}}/**
   * Insert item to carousel at particular index.
   * @param {HTMLElement} item - Item to insert.
   * @param {number} index - Index of new new item insertion.
   * @param {function} callback - Optional callback to call after insert.
   */},{key:'insert',value:function insert(item,index,callback){if(index<0||index>this.innerElements.length+1){throw new Error('Unable to inset it at this index 😭');}if(this.innerElements.indexOf(item)!==-1){throw new Error('The same item in a carousel? Really? Nope 😭');}this.innerElements.splice(index,0,item);// Avoid shifting content
this.currentSlide=index<=this.currentSlide?this.currentSlide+1:this.currentSlide;this.updateFrame();if(callback){callback.call(this);}}/**
   * Prepernd item to carousel.
   * @param {HTMLElement} item - Item to prepend.
   * @param {function} callback - Optional callback to call after prepend.
   */},{key:'prepend',value:function prepend(item,callback){this.insert(item,0);if(callback){callback.call(this);}}/**
   * Append item to carousel.
   * @param {HTMLElement} item - Item to append.
   * @param {function} callback - Optional callback to call after append.
   */},{key:'append',value:function append(item,callback){this.insert(item,this.innerElements.length+1);if(callback){callback.call(this);}}/**
   * Removes listeners and optionally restores to initial markup
   * @param {boolean} restoreMarkup - Determinants about restoring an initial markup.
   * @param {function} callback - Optional callback function.
   */},{key:'destroy',value:function destroy(){var restoreMarkup=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var callback=arguments[1];this.detachEvents();if(restoreMarkup){var slides=document.createDocumentFragment();for(var i=0;i<this.innerElements.length;i++){slides.appendChild(this.innerElements[i]);}this.selector.innerHTML='';this.selector.appendChild(slides);this.selector.removeAttribute('style');}if(callback){callback.call(this);}}}],[{key:'mergeSettings',value:function mergeSettings(options){var settings={selector:'.siema',duration:200,easing:'ease-out',perPage:1,startIndex:0,draggable:true,multipleDrag:true,threshold:20,loop:false,onInit:function onInit(){},onChange:function onChange(){}};var userSttings=options;for(var attrname in userSttings){settings[attrname]=userSttings[attrname];}return settings;}/**
   * Determine if browser supports unprefixed transform property.
   * @returns {string} - Transform property supported by client.
   */},{key:'webkitOrNot',value:function webkitOrNot(){var style=document.documentElement.style;if(typeof style.transform==='string'){return'transform';}return'WebkitTransform';}}]);return Siema;}();exports.default=Siema;

/***/ })
/******/ ]);
});