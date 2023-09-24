class Category {
    constructor(categoryName, categoryId) {
        this._categoryName = categoryName;
        this._categoryId = categoryId;
    }

    get categoryName() {
        return this._categoryName;
    }

    get categoryId() {
        return this._categoryId;
    }
}

class Product {
    constructor(productName, productId, categoryId, price, image) {
        this._productId = productId;
        this._productName = productName;
        this._categoryId = categoryId;
        this._price = price;
        this._image = image;
    }

    get productName() {
        return this._productName;
    }
    get productId() {
        return this._productId;
    }
    get category() {
        return this._categoryId;
    }

    get price() {
        return this._price;
    }

    get categoryId() {
        return this._categoryId;
    }

    get image() {
        return this._image;
    }
}