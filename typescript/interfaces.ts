(() => {

    interface Observers {
        name: string;
        age: number;
        power?: string;
    }

    const sendMissionTwelve = (obserber: Observers) => {
        console.log(`Sending ${ obserber.name } to the mission Twelve`);
    };

    const returnrToFuture = (observer: Observers) => {
        console.log(`Returning a ${ observer.name } to the future`)
    };

    const september: Observers = {
        name: 'September',
        age: 30
    };

    sendMissionTwelve( september );
    returnrToFuture( september );
})();
