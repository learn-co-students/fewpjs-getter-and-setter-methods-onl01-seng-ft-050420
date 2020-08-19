class Circle {

    constructor(radius) {
        this.radius = radius;
    };

    get diameter() {
        return this.radius * 2;
    };

    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    };

    get circumference() {
        return 2 * Math.PI * this.radius;
    };

    set circumference(newCircumference) {
        this.radius = (newCircumference / 2) / Math.PI;
    };

    get area() {
        return Math.PI * (this.radius ** 2);
    };

    set area(newArea) {
        this.radius = Math.sqrt(newArea / Math.PI);
    };

};