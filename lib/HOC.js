'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = global.React || require('react');
var Mixin = require('./Mixin.js');
module.exports = function (Component) {
  return React.createClass({
    displayName: 'Formsy(' + getDisplayName(Component) + ')',
    mixins: [Mixin],
    render: function render() {
      return React.createElement(Component, _extends({
        setValidations: this.setValidations,
        setValue: this.setValue,
        resetValue: this.resetValue,
        getValue: this.getValue,
        hasValue: this.hasValue,
        getErrorMessage: this.getErrorMessage,
        getErrorMessages: this.getErrorMessages,
        isFormDisabled: this.isFormDisabled,
        isValid: this.isValid,
        isPristine: this.isPristine,
        isFormSubmitted: this.isFormSubmitted,
        isRequired: this.isRequired,
        showRequired: this.showRequired,
        showError: this.showError,
        isValidValue: this.isValidValue,
        ref: 'instance'
      }, this.props));
    },
    getInstance: function getInstance() {
      var instance = this.refs.instance;
      // we could be wrapping some other HOC. Turtles all the way down.
      if (typeof instance.getInstance === "function") {
        return instance.getInstance();
      }
      // unless we run out of turtles.
      return instance;
    }
  });
};

function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' ? Component : 'Component');
}