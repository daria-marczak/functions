
function getTriangleArea(a, h) {
    if (a < 0 || h < 0){
        return "Invalid data";
    }

    else {
        return a * h / 2;
    }
}
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, -15);
var triangle2Area = getTriangleArea(30, 40);
var triangle3Area = getTriangleArea(-3, 5);

console.log(getTriangleArea(-3,5));
