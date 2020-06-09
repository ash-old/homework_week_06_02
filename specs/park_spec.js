const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Mega World', 10);
  })

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Mega World')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('Triceratops');
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur('Triceratops');
    park.removeDinosaur('Triceratops');
    const actual = park.collectionOfDinosaurs.includes('Triceratops');
    assert.strictEqual(actual, false)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    //park.addDinosaur('Triceratops');
    park.addDinosaur('t-rex');
    const actual = park.attractsMostVisitors();
    assert.strictEqual(actual, 50);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
