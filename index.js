// Add your Circle class here
const pie = Math.PI
class Circle {
    constructor(radius) {
        this.radius = radius
    }
        get area() {
           return pie * (this.radius ** 2)
        }

        get diameter() {
           return this.radius * 2
        }

        get circumference() {
           return pie * (this.radius * 2)
        }

        set area(area) {
            this.radius = Math.sqrt( area / pie ) 
        }
        set diameter(diameter) {
            this.radius = diameter / 2
        }
        set circumference(circumference) {
            this.radius = circumference / (pie * 2)
        }
}