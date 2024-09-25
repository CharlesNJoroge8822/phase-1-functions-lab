// Code your solution in this file!
// Function to calculate the distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; // Scuber's headquarters
    return Math.abs(someValue - hqLocation);
}

// Function to calculate the distance from HQ in feet
function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // 1 block = 264 feet
}

// Function to calculate the distance traveled in feet
function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination - start);
    return distanceInBlocks * 264; // 1 block = 264 feet
}

// Function to calculate the fare price based on distance
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for 2000 to 2500 feet
    } else {
        return 'cannot travel that far'; // Over 2500 feet
    }
}

// Test cases
console.log("Distance from HQ in blocks (50):", distanceFromHqInBlocks(50)); // 8
console.log("Distance from HQ in feet (50):", distanceFromHqInFeet(50)); // 2112
console.log("Distance traveled in feet (34 to 42):", distanceTravelledInFeet(34, 42)); // 2112
console.log("Fare price (34 to 42):", calculatesFarePrice(34, 42)); // 0.00
console.log("Fare price (34 to 50):", calculatesFarePrice(34, 50)); // 25.00
console.log("Fare price (34 to 60):", calculatesFarePrice(34, 60)); // 'cannot travel that far'

// Additional test cases
console.log("Distance from HQ in blocks (42):", distanceFromHqInBlocks(42)); // 0
console.log("Distance from HQ in feet (42):", distanceFromHqInFeet(42)); // 0
console.log("Distance traveled in feet (42 to 50):", distanceTravelledInFeet(42, 50)); // 2112
console.log("Fare price (42 to 50):", calculatesFarePrice(42, 50)); // 25.00
