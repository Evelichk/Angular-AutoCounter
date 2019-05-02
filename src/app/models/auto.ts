export class Auto {
  name: string;
  model: string;
  year: string;
  miles: string;
  engine: string;
  transmission: string;
  color: string;
  photoURL: string;


  constructor(name: string, model: string, year: string, miles: string,
              engine: string, transmission: string, color: string, photoURL: string) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.engine = engine;
    this.transmission = transmission;
    this.color = color;
    this.photoURL = photoURL;
  }
}
