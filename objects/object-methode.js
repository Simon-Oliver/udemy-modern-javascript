const restaurant = {
  name: 'Courgette',
  paxCapacity: 120,
  pax: 0,
  checkAvailabilty(partySize) {
    const availability = this.paxCapacity - this.pax;
    return availability >= partySize;
  },
  seatParty(partySize) {
    this.pax += partySize;
  },
  removeParty(partySize) {
    this.pax -= partySize;
  }
};

restaurant.seatParty(120);
console.log(restaurant.pax);
console.log(restaurant.checkAvailabilty(5));
restaurant.removeParty(5);
console.log(restaurant.pax);
console.log(restaurant.checkAvailabilty(5));
