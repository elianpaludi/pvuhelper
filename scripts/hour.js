const Reloj = function () {
  let fecha = new Date();
  let hora = fecha.getUTCHours();
  let mins = fecha.getUTCMinutes();
  let secs = fecha.getUTCSeconds();

  if (hora < 10) { hora = '0' + hora; }
  if (mins < 10) { mins = '0' + mins; }
  if (secs < 10) { secs = '0' + secs; }

  document.getElementById("reloj").innerHTML = `${hora} : ${mins} :  ${secs}  `

}



const calculo = function () {
  let utc = new Date();
  let hora = utc.getUTCHours();
  let mins = utc.getUTCMinutes();
  let secs = utc.getUTCSeconds();
 
  let resetHora = 23;
  let resetMin = 60;
  let resetSec = 60;

  let horaRestante = resetHora - hora  ;
  let minutosRestante =  resetMin -  mins;
  let segundosRestante =   resetSec - secs;


  document.getElementById("relojReset").innerHTML = `${horaRestante} : ${minutosRestante} :  ${segundosRestante}  `
  return horaRestante
}



setInterval(Reloj, 1000)
setInterval(calculo, 1000)




function groups(){ 

   let or = new Date();
    let horasGrupo = or.getUTCHours(); //hora
   let minutosGrupo = or.getUTCMinutes(); //minutos
 
   if(horasGrupo >= 00 && minutosGrupo >= 40){
     document.getElementById("group").innerHTML = "group 1"
   }
   if(horasGrupo >= 01 && minutosGrupo < 40){
    document.getElementById("group").innerHTML = "group 1"
   }
  if(horasGrupo >= 01 && minutosGrupo >= 40){
    document.getElementById("group").innerHTML = "group 2"
  }
  if(horasGrupo >= 02 && minutosGrupo < 40){
    document.getElementById("group").innerHTML = "group 2"
  }

  if(horasGrupo >= 02 && minutosGrupo >= 40){
    document.getElementById("group").innerHTML = "group 3" 
  }
  if(horasGrupo >= 03 && minutosGrupo < 40){
    document.getElementById("group").innerHTML = "group 3"
  }
  if(horasGrupo >= 03 && minutosGrupo >= 40){
    document.getElementById("group").innerHTML = "group 1"
  }
  if(horasGrupo >= 04 && minutosGrupo < 40){
  document.getElementById("group").innerHTML = "group 1" 
  }
  if(horasGrupo >= 04 && minutosGrupo >= 40){
    document.getElementById("group").innerHTML = "group 2"
  }
  if(horasGrupo >= 05 && minutosGrupo < 40){
    document.getElementById("group").innerHTML = "group 2"  
  }
  if(horasGrupo >= 05 && minutosGrupo >= 40){
    document.getElementById("group").innerHTML = "group 3"
  }
    if(horasGrupo >= 06 && minutosGrupo < 40){
      document.getElementById("group").innerHTML = "group 3" 
    }
      if(horasGrupo >= 06 && minutosGrupo >= 40){
        document.getElementById("group").innerHTML = "group 1"  
      }
        if(horasGrupo >= 07 && minutosGrupo < 40){
          document.getElementById("group").innerHTML = "group1"  
        }
          if(horasGrupo >= 07 && minutosGrupo >= 40){
            document.getElementById("group").innerHTML = "group 2"  
          }
            if(horasGrupo >= 08 && minutosGrupo < 40){
              document.getElementById("group").innerHTML = "group 2"   
            }
              if(horasGrupo >= 08 && minutosGrupo >= 40){
                document.getElementById("group").innerHTML = "group 3"  
              }
                if(horasGrupo >= 09 && minutosGrupo < 40){
                  document.getElementById("group").innerHTML = "group 3"   
                }
                  if(horasGrupo >= 09 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 1"  
                  }
                  if(horasGrupo >= 10 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 1"  
                  }

                  if(horasGrupo >= 10 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 2"  
                  }
                  if(horasGrupo >= 11 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 2"  
                  }
                  if(horasGrupo >= 11 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 3"  
                  }
                  if(horasGrupo >= 12 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 3"  
                  }
                  if(horasGrupo >= 12 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 1"  
                  }
                  if(horasGrupo >=13 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 1"  
                  }
                  if(horasGrupo >= 13 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 2"  
                  }
                  if(horasGrupo >= 14 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 2"  
                  }
                  if(horasGrupo >= 14 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 3"  
                  }
                  if(horasGrupo >= 15 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 3"  
                  }
                  if(horasGrupo >= 15 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 1"  
                  }
                  if(horasGrupo >= 16 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 1"  
                  }
                  if(horasGrupo >= 16 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 2"  
                  }
                  if(horasGrupo >= 17 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 2"  
                  }
                  if(horasGrupo >= 17 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 3"  
                  }
                  if(horasGrupo >= 18 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 3"  
                  }
                  if(horasGrupo >= 18 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 1"  
                  }
                  if(horasGrupo >= 19 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 1"  
                  }
                  if(horasGrupo >= 19 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 2"  
                  }
                  if(horasGrupo >= 20 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 2"  
                  }
                  if(horasGrupo >= 20 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 3"  
                  }
                  if(horasGrupo >= 21 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 3"  
                  }
                  if(horasGrupo >= 21 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 1"  
                  }
                  if(horasGrupo >= 22 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 1"  
                  }
                  if(horasGrupo >= 22 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 2"  
                  }
                  if(horasGrupo >= 23 && minutosGrupo < 40){
                    document.getElementById("group").innerHTML = "group 2"  
                  }
                  if(horasGrupo >= 23 && minutosGrupo >= 40){
                    document.getElementById("group").innerHTML = "group 3"  
                  }
                 

}
//voy a hacer testing mientras, funciona bien
setInterval(groups, 1000)