(() => {
    const removeMoney = (amountToGet:number):Promise<number> => {
        let currentMoney = 1000;
        console.log('maybe');
        return new Promise((resolve, reject) => {
            if(amountToGet>currentMoney){
                reject('Not enough funds');
            }else{
                currentMoney -= amountToGet;
                resolve(currentMoney);
            }
        })
    };

    removeMoney( 500 )
        .then( currentMoney => console.log(`I have ${ currentMoney }`))
        .catch( console.warn )
})();
