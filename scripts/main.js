(function (window) {
  'use strict';
  // Instantiate "FormHandler" instance
  const FORM_SELECTOR = '[data-coffee-order="form"]';
  const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  const App = window.App;
  const Truck = App.Truck;
  const DataStore = App.DataStore;
  const FormHandler = App.FormHandler;
  const CheckList = App.CheckList;
  const myTruck = new Truck('nc-1701', new DataStore());
  window.myTruck = myTruck;
  const checkList = new CheckList(CHECKLIST_SELECTOR);

  // Connect "addClickHandler" from checklist.js
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

  // Call "FormHanlder" & pass it "FORM_SELECTOR" so it works with DOM
  const formHandler = new FormHandler(FORM_SELECTOR);

  // Call "FormHandler" "addSubmitHandler()" function
  formHandler.addSubmitHandler(function (data) {
    myTruck.createOrder(data);
    checkList.addRow(data);
  });
})(window);
