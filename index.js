// Code your solution in this file!

let distanceTravelledInFeet

function distanceFromHqInBlocks(currentLocation){
  return Math.abs(42-currentLocation)
}

function distanceFromHqInFeet(currentLocation){
  return Math.abs(42-currentLocation)*264
}

function distanceTravelledInFeet(startStreet, endStreet){
  return Math.abs(startStreet-endStreet)*264
}

function calculatesFarePrice(feetTravelled){
  if distanceTravelledInFeet <= 400){
    return 0
  }
}