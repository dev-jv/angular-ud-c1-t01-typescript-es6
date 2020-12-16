"use strict";
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
        constructor(name, blood, skills, state = true) {
            this.name = name;
            this.blood = blood;
            this.skills = skills;
            this.state = state;
        }
    }
    // const grimm: Hunter = new Hunter();
    const hunter1 = new Hunter('Nick Burkhardt', 'Grimm');
    console.log(hunter1);
})();
