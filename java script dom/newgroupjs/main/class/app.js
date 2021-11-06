// let car1={
//     name:'Gentra',
//     color:'black',
//     brand:'GMUZB',
//     price:11000,
//     madeOf:function(){
//         console.log(`${this.name} - this car made in Uzb `)
//     }
// }

// let car2={
//     name:'Toyota Express',
//     color:'Silver',
//     brand:'Toyota',
//     horsepower:210,
//     price:13000,
//     madeOf:function(){
//         console.log(`${this.name} - this car made in Uzb `);
//     },
//     infoHorsePower:function(){
//         console.log(`${this.name} - this car has ${this.horsepower} `);
//     }
// }

// class Cars{
//     name;
//     color;
//     brand;
//     horsepower;
//     price;
//     madeOf(){
//         console.log(`${this.name} - this car made in Uzb `);
//     };
//     infoHorsePower(){
//         console.log(`${this.name} - this car has ${this.horsepower} `);
//     }
// }
// car1=new Cars();
// car1.name='Nexia3';
// car1.brand='GmUz';
// car1.horsepower=140;
// car1.madeOf();
// car1.infoHorsePower ();

// function Car(name,brand,price,madeOfYear){
//     this.name=name;
//     this.brand=brand;
//     this.price=price;
//     this.madeOfYear=new Date(madeOfYear);

//     Car.prototype.getFullYear=function(){
//         return this.madeOfYear.getFullYear()
//     }
//     Car.prototype.information=function(){
//         return `${this.name} made by ${this.brand} in ${this.getFullYear()}`
//     }
// }
// const car1=new Car('Malibu','GMUZ',11000,'08-05-2015');
// console.log(car1);
// console.log(car1.getFullYear());
// console.log(car1.information());

// class Car{
//     constructor(name,brand,price,madeOfYear){
//         this.name=name;
//         this.brand=brand;
//         this.price=price;
//         this.madeOfYear=new Date(madeOfYear);
//     }
//     getFullYear(){
//         return this.madeOfYear.getFullYear();
//     };
//     information(){
//         return `${this.name} made by ${this.brand} in ${this.getFullYear()}`
//     }
// }

// const car1=new Car('Malibu','GMUZ',11000,'08-05-2015');
// console.log(car1.information());