(function () {
     function activar( quien : string, momento? : string, objeto : string = 'señal'){
         if(momento){
             console.log(`${ quien } activó la ${ objeto } en aquella ${ momento } `)
         } else {
             console.log(`${ quien } activó la ${ objeto }`)
         }
     }
     activar('Gordon','noche');
})();



