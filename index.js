class Circle {
    constructor(radius){
        this.radius = radius;
    }

    mathPi() {
        return Math.PI
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return  this.radius * 2 * this.mathPi()
    }

    get area() {
        return (this.radius ** 2) * this.mathPi()
    }

    set diameter(input) {
        this.radius = input / 2
    }

    set circumference(input) {
        this.radius = input / 2 / this.mathPi()
    }

    set area(input) {
        this.radius = (input / this.mathPi()) ** .5
    }
}