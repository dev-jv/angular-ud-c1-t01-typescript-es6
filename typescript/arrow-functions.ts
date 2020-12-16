(function () {
    const funExp = function( a: String ){
        return a.toUpperCase();
    };

    const funArrow = ( a: String ) => a.toUpperCase();

    console.log( funExp('normal') );
    console.log( funArrow( 'arrow' ) )

    const sumNor = function( a:number, b:number ){
        return a+b;
    };

    const sumArr = (a:number, b:number) => a+b;

    console.log(sumNor(5,20));
    console.log(sumArr(2,58));

    const deshojo = {
        color: 'rojo',
        expresion(){
            setTimeout(()=>{
                console.log(`El deshojo es ${this.color} en primavera!`) // this en un arrow function!!
            }, 100);
        }
    };

    deshojo.expresion();
})();



