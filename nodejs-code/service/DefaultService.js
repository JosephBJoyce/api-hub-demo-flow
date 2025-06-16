'use strict';


/**
 * Create a new customer
 *
 * body Customers_body 
 * returns Customer
 **/
exports.createCustomer = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "phone" : "phone",
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a customer
 *
 * customerId Integer 
 * no response value expected for this operation
 **/
exports.deleteCustomer = function(customerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a single customer
 *
 * customerId Integer 
 * returns Customer
 **/
exports.getCustomerById = function(customerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "phone" : "phone",
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List all customers
 *
 * returns List
 **/
exports.listCustomers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "phone" : "phone",
  "id" : 0,
  "email" : "email"
}, {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "phone" : "phone",
  "id" : 0,
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing customer
 *
 * body Customers_customerId_body 
 * customerId Integer 
 * returns Customer
 **/
exports.updateCustomer = function(body,customerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "phone" : "phone",
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

