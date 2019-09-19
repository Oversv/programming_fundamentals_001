const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
    test("returns 36 when passed 30", () => {
        expect(utils.addVAT(30)).toBe(36);
    });

    test("returns 120 when passed 100", () => {
        expect(utils.addVAT(100)).toBe(120);
    });

    test("returns 118.8 when passed 99", () => {
        expect(utils.addVAT(99)).toBe(118.8);
    });

    test("returns an error if a string is passed", () => {
        expect(() => {
            utils.addVAT("Hello!");
        }).toThrow("Please provide a number");
    });
});

describe("utils.getFullName", () => {
    test("returns Haruki Murakami when passed Haruki and Murakami", () => {
        expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
    });

    test("returns an error if is not a string", () => {
        expect(() => {
            utils.getFullName(3, "Martínez");
        }).toThrow("Please provide strings");
    });

    test("returns an error if the lenght of strings is = 0", () => {
        expect(() => {
            utils.getFullName("", "");
        }).toThrow("Please do not leave blank fields");
    });
});

describe("utils.makeHalfPrice", () => {
    test("returns the price with a 50% discount applied", () => {
        expect(utils.makeHalfPrice(100)).toBe(50);
    });

    test("returns an error if is not a number", () => {
        expect(() => {
            utils.makeHalfPrice("Hello");
        }).toThrow("Please provide a number");
    });

    test("returns an error if the price is equal to 0 or lower", () => {
        expect(() => {
            utils.makeHalfPrice(0);
        }).toThrow("The price cannot be 0 or lower");
    });
});

describe("utils.countBooks", () => {
    test("returns the total number of books in the array", () => {
        expect(utils.countBooks(["book1", "book2"])).toBe(2);
    });

    test("returns an error if is not an array", () => {
        expect(() => {
            utils.countBooks(4);
        }).toThrow("Please provide an array");
    });
});

describe("utils.isInStock", () => {
    test("returns true if the title is in stock", () => {
        const book = {
            title: "The Stone Diaries",
            author: "Carol Shields",
            yearOfPublication: 1993,
            quantity: 9
        };
        expect(utils.isInStock(book)).toBe(true);
    });

    test("returns true if the title is in stock", () => {
        const book = {
            title: "The Stone Diaries",
            author: "Carol Shields",
            yearOfPublication: 1993,
            quantity: 0
        };
        expect(utils.isInStock(book)).toBe(false);
    });

    test("returns an error if is not an object", () => {
        expect(() => {
            utils.isInStock([2]);
        }).toThrow("Please provide an object");
    });
});

describe("utils.getTotalOrderPrice", () => {
    test("return the total price with VAT applied", () => {
        expect(utils.getTotalOrderPrice(18, 2)).toBe(43.2);
    });

    test("returns an error if is not numbers", () => {
        expect(() => {
            utils.getTotalOrderPrice(3, "Hello");
        }).toThrow("Please provide numbers");
    });

    test("returns an error if price or quantity is equal to 0 or lower", () => {
        expect(() => {
            utils.getTotalOrderPrice(4, 0);
        }).toThrow("The price or quantity cannot be 0 or lower");
    });

});