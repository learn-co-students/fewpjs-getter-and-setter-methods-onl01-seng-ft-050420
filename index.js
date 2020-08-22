// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    set diameter(diameter) {
        this.radius = diameter / 2
    }
    get diameter() {
        return this.radius * 2
    }
    set circumference(circumference) {
        this.radius = circumference / 2 / Math.PI
    }
    get circumference() {
        return this.diameter * Math.PI
    }
    set area(area) {
        this.area = area
    }
    get area() {
        let pi = Math.PI
        return (this.radius * this.radius) * pi
    }
    set redius(radius) {
        if (radius) {
            this.radius = this.diameter / 2
        }
    }
}