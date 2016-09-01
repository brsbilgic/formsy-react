var React = global.React || require('react');
var Mixin = require('./Mixin.js');
module.exports = function (Component) {
  return React.createClass({
    displayName: 'Formsy(' + getDisplayName(Component) + ')',
    mixins: [Mixin],
    render: function () {
      return React.createElement(Component, {
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
        ref: 'instance',
        ...this.props
      });
    },
    getInstance: function() {
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
  return (
    Component.displayName ||
    Component.name ||
    (typeof Component === 'string' ? Component : 'Component')
  );
}
