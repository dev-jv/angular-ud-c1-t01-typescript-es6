(() => {
    const add = (a: number, b: number):number =>  a + b;
    const name = ():string => '...Y';

    const getTerm = ():Promise<string> =>{
        return new Promise(( resolve, reject ) => {
            resolve('Reciprocity')
        });
    };

    getTerm().then( a => console.log( a.toUpperCase() ) )

})();
