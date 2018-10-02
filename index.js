// Code your solution in this file!


function distanceFromHqInBlocks(currentLocation){
  return Math.abs(42-currentLocation)
}

function distanceFromHqInFeet(currentLocation){
  return Math.abs(42-currentLocation)*264
}

function distanceTravelledInFeet(startStreet, endStreet){
  return Math.abs(startStreet-endStreet)*264
}

function calculatesFarePrice(startStreet, endStreet){
  if (Math.abs(startStreet-endStreet)*264 <= 400){
    return 0
  }
  // else if (){
  //   //2 cents per foot minus first 400
  // }
  // else if (Math.abs(startStreet-endStreet)*264 > 2000){
  //   return 'cannot travel that far'
  // }
}

