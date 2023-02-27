var totalPrice = function (_a) {
    var price = _a.price, discount = _a.discount, isInstallment = _a.isInstallment, months = _a.months;
    var totalDiscount = (price * discount) / 100;
    var result = price - totalDiscount;
    if (isInstallment && months) {
        return result / months;
    }
    return result;
};
console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
