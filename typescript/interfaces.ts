(() => {

    interface Observers {
        nombre: string;
        edad: number;
        poder?: string;
    }

    const enviarMisionTwelve = (obserber: Observers) => {
        console.log(`Enviando a ${ obserber.nombre } a la misión Twelve`);
    };

    const regresarAlFuturo = (observer: Observers) => {
        console.log(`Regresando a ${ observer.nombre } al futuro`)
    };

    const september: Observers = {
        nombre: 'September',
        edad: 30
    };

    enviarMisionTwelve( september );
    regresarAlFuturo( september );
})();



