//GUARDA EN EL CACHE DINAMICO
function actualizaAcacheDinamico( dynamicCache , req , res) {
    console.log('Actualizacion Cache dinamico' , res );

    if( res.ok ){
        return caches.open( dynamicCache ).then( cache => {
            cache.put( req , res.clone() );
            return res.clone();
        });
    
    } else {

        return res;
    }



}