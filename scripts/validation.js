(function (window) {
  'use strict';
  App = window.App || {};

  // Check if email format is "@bignerdranch.com"
  const Validation = {
    isCompanyEmail: function (email) {
      return /.+@bignerdranch\.com$/.test(email);
    }
  };

  App.Validation = Validation;
  window.App = App;
})(window);
