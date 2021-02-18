const calculateVat1 = function (num){
    console.log("entering VAT1");
    vat1 = num*0.21;
    console.log(vat1);
    return vat1;
};

const calculateVat2 = function (num){
    console.log("entering VAT2");
    vat2 = num*0.09
    console.log(vat2);
    return vat2;
};

const AddVatToBasePrice = function (basePrice){
    calculateVat1(basePrice);
    calculateVat2(basePrice);
    console.log(vat1 + vat2)
const newPriceVat1 = basePrice + vat1;
const newPriceVat2 = basePrice + vat2;
    return "the price with 21% VAT = € "+ newPriceVat1 +
  ", and the price with 9% VAT = € "+ newPriceVat2
};
const getBasePrice = function(totalPrice, percentage){
    console.log("entering getBaseprice...");
    basePrice = totalPrice / (100+percentage);
    console.log(basePrice);
    return basePrice;

}

const getBasePriceAndVatpriceApart = function (totalPrice, percentage){
console.log("starting....");
    getBasePrice(totalPrice, percentage);
    return totalPrice - basePrice;
}

console.log(getBasePriceAndVatpriceApart(100, 21));
console.log(AddVatToBasePrice(20))
