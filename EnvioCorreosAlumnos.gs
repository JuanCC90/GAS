//Modulo que recorrera la hoja de calculo, lee los campos de cada alumno que corresponda a su nota de trabajo
//suma su resultado y envia el correo a su destinatario.


function envioCorreos() {
  
  var hojaactiva=SpreadsheetApp.getActive().getSheetByName("Enviar");
  
  var rango= hojaactiva.getRange(2, 1, hojaactiva.getLastRow(), hojaactiva.getLastColumn());
  
  var datos= rango.getValues();
  

  for(var i=0;i<datos.length-1;i++){

    var correo = datos[i][0];
    
    var appFunciona=datos[i][1];
     
    
    var codEstructurado=datos[i][2];
    
    
    var buenJs=datos[i][3];
    
    
    
    var buenGas=datos[i][4];
    
   
    
    var usoApis=datos[i][5];
    
     
    
    var masTools=datos[i][6];
    
    
    
    var creativ=datos[i][7];
    
    
    
    var original=datos[i][8];
    
    
    var profes=datos[i][9];
    
    
    
    var colab=datos[i][10];
    
    
    var innova=datos[i][11];
    
    
    var resul=(parseFloat(appFunciona)+parseFloat(codEstructurado)+parseFloat(buenJs)+parseFloat(buenGas)+parseFloat(usoApis)+parseFloat(masTools)+parseFloat(creativ)+parseFloat(original)
    +parseFloat(profes)+parseFloat(colab)+parseFloat(innova));
    
    var resul=resul.toFixed(2);
    
    var mensaje= 'Entrega App Funcionando: '+appFunciona+'\n'+' Codigo Estructurado: '+codEstructurado+'\n'+' Uso Correcto de JS: '+buenJs+'\n'+
      ' Uso Correcto de GAS: '+buenGas+'\n'+' Uso de Más de 2 APIS: '+usoApis+'\n'+' Otras Herramientas: '+masTools+'\n'+
        ' Creatividad: '+creativ+'\n'+' Originalidad: '+original+'\n'+' Profesionalidad: '+profes+'\n'+' Colaboración: '+colab+'\n'+
          ' Innovación: '+innova+'\n'+'RESULTADO: '+resul;
    
    Logger.log(mensaje);
    
   var asunto='Calificación Ultima Entrega en DWEC';
  
    
   MailApp.sendEmail(correo,asunto,mensaje);

  
    
  }

  
}
 



//Este modulo es para crear un boton en el archivo Excel que ejecutara el modulo anteriormente creado
// y que enviara los correos a su respectivo usuario

function Email(){
  
  var hojaExcel= SpreadsheetApp.getActive();
  
  var menuItems=[
    
    {name:'Envia Emails', functionName:'envioCorreos'}
  
  ];
  
  
}
  
  
  
  

  
 
  
  
  
  
  
  
  

