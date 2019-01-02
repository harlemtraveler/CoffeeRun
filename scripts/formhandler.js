(function (window) {
  'use strict';
  const App = window.App || {};
  // Assign jQuery to the "$" symbol
  const $ = window.jQuery;

  function FormHandler(selector) {
    // Verify selector was passed
    if (!selector) {
      throw new Error('[!] No selector provided');
    }

    // Assigns passed selector to $formElement
    this.$formElement = $(selector);
    // Check if DOM element was matched (jQuery doesn't do this automatically)
    if (this.$formElement.length === 0) {
      throw new Error('[!] Could not find element with selector: ' + selector);
    }
  }

  // Adds a "submit" handler to passed argument & exec callback functionality
  FormHandler.prototype.addSubmitHandler = function (fn) {
    console.log('[*] Setting submit handler for form');
    this.$formElement.on('submit', function (e) {
      e.preventDefault();

      // Callback functionality
      const data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
        console.log('[+] ' + item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  // Run a passed func when each character is entered or removed
  FormHandler.prototype.addInputHandler = function (fn) {
    console.log('[*] Setting input handler for form');
    this.$formElement.on('input', '[name="emailAddress"]', function (e) {
      let emailAddress = e.target.value;
      let message = '';
      if (fn(emailAddress)) {
        e.target.setCustomValidity('');
      } else {
        message = emailAddress + ' is not an auhtorized email address!';
        e.target.setCustomValidity(message);
      }
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
