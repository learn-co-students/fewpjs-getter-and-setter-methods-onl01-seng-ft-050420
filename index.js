// Add your Circle class here
const pi = Math.PI
class Circle {
    constructor(radius) {
        this.radius = radius;
        
    };

    get diameter() {
        return this.radius + this.radius;
    };

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get circumference() {
        return this.diameter * pi;
    };

    set circumference(circumference) {
        this.radius = circumference / (2 * pi)
    }

    get area() {
        return this.radius**2 * pi;
    };

    set area(area) {
        this.area = this.area(area);
    }

}