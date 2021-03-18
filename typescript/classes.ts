(() => {
//     class Hunter {
//         name: string;
//         blood: string;
//         skills?: number;
//         state: boolean;
//
//         constructor( name:string, blood:string ){
//             this.name = name;
//             this.blood = blood;
//         }
//     }

    class Hunter {
        constructor( public name:string,
                     public blood:string,
                     public skills?: number,
                     public state: boolean = true){}
    }

    // const grimm: Hunter = new Hunter();
    const hunter1 = new Hunter('Nick Burkhardt', 'Grimm');

    console.log(hunter1);

})();
