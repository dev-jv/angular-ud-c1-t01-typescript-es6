(function () {
    const funExp = function( a: String ){
        return a.toUpperCase();
    };

    const funArrow = ( a: String ) => a.toUpperCase();

    console.log( funExp('normal') );
    console.log( funArrow( 'arrow' ) )

    const addNor = function( a:number, b:number ){
        return a+b;
    };

    const addArr = (a:number, b:number) => a+b;

    console.log(addNor(5,20));
    console.log(addArr(2,58));

    const deshojo = {
        color: 'rojo',
        expresion(){
            setTimeout(()=>{
                console.log(`The deshojo is ${this.color} in spring!`) // this en un arrow function!!
            }, 100);
        }
    };

    deshojo.expresion();
})();
