(function (window) {
  'use strict';
  const App = window.App;
  const Truck = App.Truck;
  const DataStore = App.DataStore;
  const myTruck = new Truck('nc-1701', new DataStore());
  window.myTruck = myTruck;
})(window);
