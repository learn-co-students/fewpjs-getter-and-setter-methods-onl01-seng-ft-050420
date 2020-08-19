class Circle {
  constructor(radius) {
    this.radius = radius
  }
  pi() {
    return Math.PI
  }
  get diameter() {
    return 2 * this.radius
  }
  get circumference() {
    return 2 * this.pi() * this.radius
  }
  get area() {
    return this.pi() * this.radius ** 2
  }
  set diameter(diameter) {
    this.radius = diameter / 2
  }
  set circumference(circumference) {
    this.radius = circumference / 2 / this.pi()
  }
  set area(area) {
    this.radius = Math.sqrt(area / this.pi())
  }
}
