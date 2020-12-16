(() => {
    console.log('Inicio');
    const prom1 = new Promise( (resolve, reject ) => {
        setTimeout(()=>{
            // resolve('Se terminó el timeout');
            reject('Se terminó el timeout');
        },1000);
    });

    prom1
        .then( message => console.log( message ) )
        .catch( e => { console.warn( e ) });

    console.log('Fin')
})();



