class Circle{
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }
  
  get circumference() {
    return 2 * this.radius * 3.14;
  }
  
   get area() {
    return this.radius * this.radius * 3.14;
  }
  
    set phrase((radius) {
    this.radius = radius
  }
}
const circle = new Circle( 6 )