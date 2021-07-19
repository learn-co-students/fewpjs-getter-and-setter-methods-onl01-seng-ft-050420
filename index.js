class Circle{
    constructor(radius) {
        this.radius = radius;
      }

      get diameter() {
       //this.diameter = diameter
        return this.diameter = this.radius * 2;
      }

      get circumference() {
        //this.circumference = circumference
        return this.circumference = (Math.PI) * this.diameter
      }

      get area() {
        //this.area = area;
        return this.area = Math.PI * (this.radius * this.radius)
      }

      set diameter(newDiameter) {
        this.radius = newDiameter / 2
      }
      
      set circumference(newCircumference) {
        this.radius = newCircumference / (2 * Math.PI)
      }

      set area(newArea) {
        this.radius = this.diameter / 2
     }
      
     
}