(() => {
    const sumar = (a: number, b: number):number =>  a + b;

    const nombre = ():string => 'Hola Fernando';

    const obtenerTermino = ():Promise<string> =>{
        return new Promise(( resolve, reject ) => {
            resolve('Reciprocity')
        });
    };

    obtenerTermino().then( a => console.log( a.toUpperCase() ) )

})();



