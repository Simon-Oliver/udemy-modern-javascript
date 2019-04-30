class Item {
  constructor(name, hasExpiryDate, expiryDate) {
    this.name = name;
    this.hasExpiryDate = hasExpiryDate;
    this.expiryDate = expiryDate;
  }

  isExpired() {
    if (!this.hasExpiryDate) {
      return 'This Item has no expiry date';
    }
  }
}

class FoodItem extends Item {
  constructor(name, hasExpiryDate, expiryDate, isOpened, useBy) {
    super(name, hasExpiryDate, expiryDate);
    this.isOpened = isOpened;
    this.useBy = useBy;
  }
}

const beef = new FoodItem('Beef', false, '', true, '1/05/2019');

console.log(beef.isExpired());
