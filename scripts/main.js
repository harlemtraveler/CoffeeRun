(function (window) {
  'use strict';
  // Instantiate "FormHandler" instance
  const FORM_SELECTOR = '[data-coffee-order="form"]';
  const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  const SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
  const App = window.App;
  const Truck = App.Truck;
  const DataStore = App.DataStore;
  const RemoteDataStore = App.RemoteDataStore;
  const FormHandler = App.FormHandler;
  const Validation = App.Validation;
  const CheckList = App.CheckList;
  const remoteDS = new RemoteDataStore(SERVER_URL);
  // Remote Storage
  // const myTruck = new Truck('nc-1701', remoteDS);
  // Local Storage
  const myTruck = new Truck('nc-1701', new DataStore());
  window.myTruck = myTruck;
  const checkList = new CheckList(CHECKLIST_SELECTOR);

  // Connect "addClickHandler" from checklist.js
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

  // Call "FormHanlder" & pass it "FORM_SELECTOR" so it works with DOM
  const formHandler = new FormHandler(FORM_SELECTOR);

  // Call "FormHandler" "addSubmitHandler()" function
  formHandler.addSubmitHandler(function (data) {
    return myTruck.createOrder(data)
      .then(function () {
        checkList.addRow(data);
      });
  });

  // Runs Validation of email format when each character is entered or removed
  formHandler.addInputHandler(Validation.isCompanyEmail);

  myTruck.printOrders(checkList.addRow.bind(checkList));
})(window);
