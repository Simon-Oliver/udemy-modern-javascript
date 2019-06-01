const moment = require('moment');

class Item {
  constructor(name, hasExpiryDate, expiryDate) {
    this.name = name;
    this.hasExpiryDate = hasExpiryDate;
    this.expiryDate = expiryDate;
    this.isExpired = moment(this.expiryDate).isBefore();
  }

  updateItem(newObj) {
    const keys = Object.keys(newObj);
    keys.forEach(e => {
      this[e] = newObj[e];
    });
  }
}

class FoodItem extends Item {
  constructor(
    name,
    hasExpiryDate = false,
    expiryDate = null,
    isOpened = false,
    useByAfterOpening = null
  ) {
    super(name, hasExpiryDate, expiryDate);
    this.isOpened = isOpened;
    this.useByAfterOpening = useByAfterOpening;
  }
}

const beef = new FoodItem('Beef', true, '2019-04-29', true, '2019-04-29');

console.log(beef.isExpired);
console.log(beef.isOpened);

console.log(beef.updateItem({ name: 'Test123', date: '12-05-19', isOpened: false }));
console.log(beef);
