function deliverPresents(houses) {

  if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
  } else {
    var mid = Math.ceil(houses.length / 2)
    var firsthalf = houses.slice(0, mid)
    var secHalf = houses.slice(mid, houses.length)  //no end goes straight to the end

    deliverPresents(firsthalf)
    deliverPresents(secHalf)
  }
}

module.exports = deliverPresents
