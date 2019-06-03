const data = {
  get location() {
    return this._location;
  },
  set location(value) {
    this._location = value.trim();
  }
};

data.location = '  Canberra    ';

console.log(data.location);
