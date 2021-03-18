(() => {
// Use of Let and Const
    let name = "Ricardo Tapia";
    let age = 23;
    const FIGURE = {
        name,
        age
    };


// Create an interface to validate the following object
    interface hero {
        name:string,
        martialArts:string[]
    }
    const batman:hero = {
        name: "Bruno Díaz",
        martialArts: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
    };


// Convert this function to an arrow function
//     function doubleResult( a, b ){
//         return (a + b) * 2
//     }
    const doubleResult = (a:number, b:number):number => (a+b)*2;
    // console.log(doubleResult(1,2));
// Function with mandatory, optional and default parameters
//  where NAME = obligatorio
//       POWER  = optional
//       WEAPON   = by default = "arco"
    function getAvenger( name:string, power?:string, weapon:string = 'intellect' ){
        let message;
        if( power ){
            message = name + " Has the power of: " + power + "and a weapon: " + weapon;
        }else{
            message = name + " has a " + power
        }
    }

// Create a class that allows to handle the following structure
// The class should be called rectangle,
// it must have two properties:
// * base
// * height
// Also a method that calculates the area = base * height,
// that method must return a number.

    class Rectangle {
        // base: number;
        // height: number;
        //
        // constructor(base:number, height:number){
        //     this.base=base;
        //     this.height=height;
        // }

        constructor(public base:number,
                    public height:number) {}

        // area(){
        //     return this.base*this.height;
        // }

        area = () => this.base*this.height;
    }
    const reBlue = new Rectangle(5,8);
    reBlue.area();

})();
