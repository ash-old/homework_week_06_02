const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
}

Park.prototype.numberOfDinosaurs = function(){
  return this.collectionOfDinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur){
  this.collectionOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
  this.collectionOfDinosaurs.splice(this.collectionOfDinosaurs.indexOf(dinosaur), 1)
}

Park.prototype.attractsMostVisitors = function(dinosaur){
  this.addDinosaur('t-rex')
  const found = this.collectionOfDinosaurs.find(dinosaur.guestsAttractedPerDay.max)
}





module.exports = Park;
