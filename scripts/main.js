(function (window) {
  'use strict';
  // Instantiate "FormHandler" instance
  const FORM_SELECTOR = '[data-coffee-order="form"]';
  const App = window.App;
  const Truck = App.Truck;
  const DataStore = App.DataStore;
  const FormHandler = App.FormHandler;
  const myTruck = new Truck('nc-1701', new DataStore());
  window.myTruck = myTruck;
  // Call "FormHanlder" & pass it "FORM_SELECTOR" so it works with DOM
  const formHandler = new FormHandler(FORM_SELECTOR);

  // Call "FormHandler" "addSubmitHandler()" function
  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);
})(window);
