let alto = 8;
let ancho =8;
let cell; 

class Celula{
    x;
    y;
    estado;
    estadoprox;
    vecinos;
    constructor(x,y,estado){
        this.x=x;
        this.y=y;
        this.estado=estado;
        this.estadoprox=estado;
        this.vecinos =[];
    }
    
    addVecinos(){
        let vecinoX;
        let vecinoY;
        
        for(let i =-1; i<2;i++){
            for(let j = -1; j<2;i++){

                vecinoX=this.x+j;
                vecinoY=this.y+i;
                
                if(i!=0 ||j!=0){
                    this.vecinos.push(cell[vecinoY][vecinoX]);
                }
            }
        }
    }
    
    nuevoCiclo(){
        let suma=0;
        
        //calculo de vecinos vivos
        for(i=0;this.vecinos.length;i++){
            suma +=this.vecinos[i].estado;
        }

        //aplicamos las reglas
        this.estadoprox = this.estado;

        //muerte: tiene menos de 2 o mas de 3
        if(suma<2||suma>3){
            this.estadoprox=0;
        }
        //VIDA/REPRODUCCION: tiene exactamente 3 vecinos
        else if(suma==3){
            this.estadoprox=1;
        }
    }
}

function generarMatriz(){
    

    var matriz = [];
    var matrizInterna = [];
    
    /*
    let obj = new Array(alto);
    for(y=0;y<alto;y++){
        obj[y]=new Array(fila);
    }
    */
    if(matriz != null){

    }
    else{
        for (let y=0;y<alto;y++){
            for(let x=0;x<ancho;x++){
                var random = Math.floor(Math.random() * (10 - 1) + 1);
    
                if(random%2 == 0){
                    cell = new Celula(x,y,1);
                }
                else{
                    cell = new Celula(x,y,0);
                   
                }
                matrizInterna.push(cell); //Agregamos la celula a matriz Interna (vector en eje x)   
            }
            
            matriz.push(matrizInterna); //Agregamos la matrizInterna a la matriz general
            matrizInterna = []; //Limpiamos matrizInterna para generar el siguiente vector en eje X
        }
    }
    
    return matriz;
}

function matrix(){
    generarMatriz();
    cell.addVecinos();
    cell.nuevoCiclo();
    generarMatriz()
}