(function () {
     function activate( who : string, moment? : string, object : string = 'signal'){
         if(moment){
             console.log(`${ who } actived the ${ object } in that moment ${ moment } `)
         } else {
             console.log(`${ who } actived the ${ object }`)
         }
     }
     activate('Gordon','night');
})();
