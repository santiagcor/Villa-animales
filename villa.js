var vs=document.getElementById("villasanti");
var papel=vs.getContext("2d");


var fondo=
{  
    url:"tile.png",
    cargaOK: false
};

var vaca=
{  
    url:"vaca.png",
    cargaOK: false
};

var cerdo=
{  
    url:"cerdo.png",
    cargaOK: false
};

var pollo=
{  
    url:"pollo.png",
    cargaOK: false
};

var lobo=
{
    url:"lobo.png",
    cargaOK: false
};

var teclas=
    {
    UP:38,
    LEFT: 37,
    DOWN: 40,
    RIGHT: 39
    
};

var cantidad=aleatorio(1,5);
var xlobo=420;
var ylobo=420;
var xvaca=new Array();
var yvaca=new Array();
var xpollo=new Array();
var ypollo=new Array();
var xcerdo=new Array();
var ycerdo=new Array();

document.addEventListener("keydown",moverlobo);

fondo.imagen=new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen=new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

cerdo.imagen=new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

pollo.imagen=new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

lobo.imagen=new Image();
lobo.imagen.src=lobo.url;
lobo.imagen.addEventListener("load",cargarLobo);


function moverlobo(evento)
{   
    var movimiento=10;
    switch(evento.keyCode)
    {
        case teclas.DOWN:
            if(lobo.cargaOK && ylobo<=papel.canvas.height-80)
            {
                
                ylobo=ylobo+movimiento;
                dibujar();
                eliminar_animal();
                
            }
        break;
        
        case teclas.UP:
            if(lobo.cargaOK && ylobo>=0)
            {
                  ylobo=ylobo-movimiento;
                dibujar();
                eliminar_animal();
               
            }
        break;

        case teclas.LEFT:
            if(lobo.cargaOK && xlobo>=0)
            {
                
                xlobo=xlobo-movimiento;
                dibujar();
                eliminar_animal();
                
            }
        break;

        case teclas.RIGHT:

            if(lobo.cargaOK && xlobo<papel.canvas.width-80)
            {
        
                xlobo=xlobo+movimiento;
                 dibujar();
                 eliminar_animal();
                 
            }
        break;
    }
    mostrarmensaje();
}

function eliminar_animal()
{
    if(cerdo.cargaOK)
    
    {
        for(var i=0;i<cantidad;i++)
        {   
            if(xcerdo[i]==xlobo && ycerdo[i]==ylobo)
           {      
                papel.clearRect(xcerdo[i],ycerdo[i], 80, 80);
                papel.drawImage(fondo.imagen,0,0);
                papel.drawImage(vaca.imagen,xvaca[i],yvaca[i]);
                papel.drawImage(pollo.imagen,xpollo[i],ypollo[i]); 
                papel.drawImage(lobo.imagen,xlobo,ylobo);
                xcerdo[i]=xcerdo[i+1];
                ycerdo[i]=ycerdo[i+1];
            }
        }
    }     
    if(vaca.cargaOK)
    {
        for(var i=0;i<cantidad;i++)
        {   
            if(xvaca[i]==xlobo && yvaca[i]==ylobo)
           {    
            
                papel.clearRect(xvaca[i],yvaca[i], 80, 80);
                papel.drawImage(fondo.imagen,0,0);
                papel.drawImage(cerdo.imagen,xcerdo[i],ycerdo[i]);
                papel.drawImage(pollo.imagen,xpollo[i],ypollo[i]); 
                papel.drawImage(lobo.imagen,xlobo,ylobo);
                xvaca[i]=xvaca[i+1];    
                yvaca[i]=yvaca[i+1];

            }
        }
    }
    if(pollo.cargaOK)
    {
        for(var i=0;i<cantidad;i++)
        {   
            if(xpollo[i]==xlobo && ypollo[i]==ylobo)
           {    
                papel.clearRect(xpollo[i],ypollo[i], 80, 80);
                papel.drawImage(fondo.imagen,0,0);
                papel.drawImage(vaca.imagen,xvaca[i],yvaca[i]);
                papel.drawImage(cerdo.imagen,xcerdo[i],ycerdo[i]);
                papel.drawImage(lobo.imagen,xlobo,ylobo);
                xpollo[i]=xpollo[i+1];
                ypollo[i]=ypollo[i+1];

            }
        }
    }
}

function mostrarmensaje(){
    if(xcerdo==0 && ycerdo==0 && xpollo==0 && ypollo==0 && xvaca==0 && yvaca==0){
        window.alert("Has matado a los animales; ganaste!");
    }
}

 function dibujar()
{   
    var x;
    var y;
    if(fondo.cargaOK){
        papel.drawImage(fondo.imagen,0,0);
    }

    if(vaca.cargaOK){
        for(var i=0;i<cantidad;i++)
        {   

            papel.drawImage(vaca.imagen,xvaca[i],yvaca[i]);
        }
    }

    if(pollo.cargaOK){

        for(var i=0;i<cantidad;i++)
        {   
        
            papel.drawImage(pollo.imagen,xpollo[i],ypollo[i]);
        }
    }

    if(cerdo.cargaOK){
        for(var i=0;i<cantidad;i++)
        {   
            papel.drawImage(cerdo.imagen,xcerdo[i],ycerdo[i]);
        }
    }

    if(lobo.cargaOK)
    {
        papel.drawImage(lobo.imagen,xlobo,ylobo);
    }
}


function cargarFondo()
{
    fondo.cargaOK=true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK=true;
    mantenerpos();
    dibujar();
}

function cargarPollos()
{
   pollo.cargaOK=true;
   mantenerpos();
   dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK=true;
    mantenerpos();
    dibujar();
}

function cargarLobo()
{
    lobo.cargaOK=true;
    dibujar();

}

function mantenerpos()
{   
    var x,y;
    if(vaca.cargaOK){
        for(var i=0;i<cantidad;i++)
        {   
            x=aleatorio(0,10);
            y=aleatorio(0,10);
            x=x*40;
            y=y*40;
            xvaca[i]=x;
            yvaca[i]=y;
        }
    }

    var x,y;
    if(pollo.cargaOK){
        for(var i=0;i<cantidad;i++)
        {   
            x=aleatorio(0,10);
            y=aleatorio(0,10);
            x=x*40;
            y=y*40;
            xpollo[i]=x;
            ypollo[i]=y;
        }
    }

    var x,y;
    if(cerdo.cargaOK){
        for(var i=0;i<cantidad;i++)
        {   
            x=aleatorio(0,10);
            y=aleatorio(0,10);
            x=x*40;
            y=y*40;
            xcerdo[i]=x;
            ycerdo[i]=y;
        }
    }

}



function aleatorio(min, maxi)
{
    var resultado;
    resultado=Math.floor(Math.random()*(maxi-min + 1))+ min;
    return resultado;
}