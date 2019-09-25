function deliverPresents(houses) {


  while ((i = houses.shift()) !== undefined) {
    console.log('Delivering presents to ' + i)
  }


}

module.exports = deliverPresents
