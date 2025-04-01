// Object room dimensions. could also be updated into a user input. make this into a square foot calc. //
const roomDimensions = {
    width: "50",
    length: "100",
    getArea: function() {
        return this.width * this.length;
    }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

console.log(boundGetArea());  // should be 5000 //
