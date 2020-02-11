class Ave {
    nombre;
    comerStrategy;
    vueloStrategy;
// le da un valor a la propiedad
    volando(volandoAndo) {
        this.vueloStrategy = volandoAndo
    }
    comiendo(comiendoAndo) {
        this.comerStrategy = comiendoAndo;
    }
// ejecuta un metodo de otras clases
    volar(){
        this.vueloStrategy.vuelo();
    }
    comer(){
        this.comerStrategy.comer();
    }
}
class Aguila extends Ave {};
class Colibri extends Ave {};

class VueloAlto{
   vuelo(){
       console.log('vuelo mucho')
   }
}
class VueloMucho{
    vuelo(){
        console.log('vuelo mucho')
    }   
}
class ComoMucho{
    comer(){
        console.log('como mucho')
    }
}
class ComoPoco{
    comer(){
        console.log('como Poco')
    }
}

