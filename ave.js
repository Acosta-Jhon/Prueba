class Ave { 
     nombre;
     comerStrategy;
     vueloStrategy;
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

