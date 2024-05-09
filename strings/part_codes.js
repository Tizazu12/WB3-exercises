"use strict";



//ACME:123-L
//DI:12345-M
//ACE:1-12

function getSupplier(code) {
  let end = code.indexOf(":");
  let supplierCode = code.substring(0, end)
  return supplierCode;
}
console.log(getSupplier("ACME:123-L"))

//
function getProductNumber(code) {
  let productStart = code.indexOf(":");
  let productEnd = code.indexOf("-");
  let ProductNumber = code.substring(productStart + 1, productEnd)
  return ProductNumber;
}

console.log(getProductNumber("ACME:123-L"))

function getSize(code) {
  let sizestart = code.indexOf("-");
  let productSize = code.substring(sizestart + 1)
  return productSize
}
console.log(getSize("ACME:123-L"))

