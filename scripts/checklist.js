(function (window) {
  'use strict';
  const App = window.App || {};
  const $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error('[!] No selector provided');
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('[!] Could not find element with selector: ' + selector);
    }
  }

  CheckList.prototype.addRow = function (coffeeOrder) {
    // Remove any existing rows that match the email address
    this.removeRow(coffeeOrder.emailAddress);

    // Create a new instance of a row, using the coffee order info
    const rowElement = new Row(coffeeOrder);

    // Add the new row instance's $element property to the checklist
    this.$element.append(rowElement.$element);
  };

  CheckList.prototype.removeRow = function (email) {
    this.$element
      .find('[value="' + email + '"]')
      .closest('[data-coffee-order="checkbox"]')
      .remove();
  };

  // Row constructor
  function Row(coffeeOrder) {
    const $div = $('<div></div>', {
      'data-coffee-order': 'checkbox',
      'class': 'checkbox'
    });

    // Create <label>
    const $label = $('<label></label>');

    // Create <input type="checkbox">
    const $checkbox = $('<input></input>', {
      type: 'checkbox',
      value: coffeeOrder.emailAddress
    });

    // Create plaintext description (i.e.: <>...desc...</>)
    let description = coffeeOrder.size + ' ';
    if (coffeeOrder.flavor) {
      description += coffeeOrder.flavor + ' ';
    }

    // Concant contents of plaintext description with prop values
    description += coffeeOrder.coffee + ', ';
    description += ' (' + coffeeOrder.emailAddress + ')';
    description += ' [' + coffeeOrder.strength + 'x]';

    // Create DOM subtree (from inner to outer)
    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    // Make new subtree available as prop of instance | stored as "$element"
    this.$element = $div;
  }

  App.CheckList = CheckList;
  window.App = App;
})(window);
