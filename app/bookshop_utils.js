function addVAT(price) {
    if (typeof price !== "number") {
        throw new Error("Please provide a number")
    }
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    if (typeof(firstName) !== 'string' || typeof(lastName) !== 'string') {
        throw new Error("Please provide strings")

    } else if (firstName.length === 0 || lastName.length === 0) {
        throw new Error("Please do not leave blank fields");
    }

    firstName = firstName.trim();
    lastName = lastName.trim();

    return firstName + ' ' + lastName;
}

function makeHalfPrice(price) {
    if (typeof price !== 'number') {
        throw new Error("Please provide a number");

    } else if (price <= 0) {
        throw new Error("The price cannot be 0 or lower");
    }

    return price - (0.5 * price);
}

function countBooks(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Please provide an array");
    }

    return arr.length;
}

function isInStock(obj) {
    if (Object.prototype.toString.call(obj) !== "[object Object]") {
        throw new Error("Please provide an object");
    }

    if (obj.quantity > 0) {
        return true
    }
    return false;
}

function getTotalOrderPrice(price, quantity) {
    if (typeof price !== "number" || typeof quantity !== "number") {
        throw new Error("Please provide numbers")

    } else if (price <= 0 || quantity <= 0) {
        throw new Error("The price or quantity cannot be 0 or lower")
    }

    let result = price * quantity;
    return result + (result * 0.2);
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};