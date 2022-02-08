// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    let blocks
    if (location>=42) {
        blocks=location-42
    }
    else if (location<42) {
        blocks=42-location
    }
    return blocks
   
}
function distanceFromHqInFeet(location) {
    return 264*distanceFromHqInBlocks(location);
    
}
function distanceTravelledInFeet(start, destination) {
    let travel
    if (destination>start){
    travel=(destination-start)*264
  }
  else if (start>destination){
      travel=(start-destination)*264
  }
  return travel
}
function calculatesFarePrice(start,destination){
    let feet=distanceTravelledInFeet(start, destination)
    let cost
    const pricePerFoot =.02
    
    if (feet<=400){
        cost=0
    }
    else if(feet>400&feet<=2000){
        cost=(feet-400)*pricePerFoot
    }
    else if (feet>2000&feet<2500){
    cost=25
    }
    else if (feet>=2500){
    cost='cannot travel that far'
    }
    return cost
}