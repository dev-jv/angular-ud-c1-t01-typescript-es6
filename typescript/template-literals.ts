(function () {
    function getEdad() {
        return 10 + 20 + 4
    }
    const nombre = 'Nick';
    const apellido = 'Burkhardt';
    const edad = 33;

    // const salida = nombre + apellido + edad;
    // const salida = nombre + " " + apellido + "(" + edad + ")";
    // const salida = `${ nombre } ${ apellido } (${edad})`;
    const salida = `${ nombre }\n${ apellido }\n(${getEdad()})`;

    console.log(salida);

})();



