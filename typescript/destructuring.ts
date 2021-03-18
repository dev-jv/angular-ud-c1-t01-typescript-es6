(() => {
    const hunter = {
        name: 'Nick Burkhardt',
        blood: 'Grimm',
        state: 'active'
    };

    const extraer = ({name, state }:any) => {
        // const { name, state } = hunter;
        console.log( name );
        console.log( state );
    };
    extraer( hunter );

    const wesen = ['Siegbarste', 'Hexenbiest', 'Fuchsbau'];

    const [x, y, z] = wesen;

    console.log(x);
    console.log(y);
    console.log(z);

    const extraerArr = ([a,b,c]:String[]) => {
        console.log(a);
        console.log(b);
        console.log(c);
    };

    extraerArr( wesen );
})();
