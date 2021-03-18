(() => {
    console.log('Inicio');
    const prom1 = new Promise( (resolve, reject ) => {
        setTimeout(()=>{
            // resolve('timeout ended');
            reject('timeout ended');
        },1000);
    });

    prom1
        .then( message => console.log( message ) )
        .catch( e => { console.warn( e ) });

    console.log('End')
})();
