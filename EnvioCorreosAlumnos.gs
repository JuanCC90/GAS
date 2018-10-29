function envioCorreos() {
  
  var hojaactiva=SpreadsheetApp.getActive().getSheetByName("Enviar");
  
  var rango= hojaactiva.getRange(1, 1, hojaactiva.getLastRow(), hojaactiva.getLastColumn());
  
  var datos= rango.getValues();
  
  
  for(var i=0;i<datos.length;i++){
    
    var columnas = datos[i].length;

    var correo = datos[i][0];
     
    var notaEntrega=datos[i][1];
    
    var codigoEstruc= datos[i][2];                                                                                      
    
   var usoCorrect=datos[i][3];
    
   var resultado=datos[i][4];
    
   var mensaje= 'Nota Entrega '+notaEntrega+' Codigo Estructurado '+codigoEstruc+' Uso Correcto '+usoCorrect+' Resultado '+resultado;
    
   var asunto='Calificacion Ultima Entrega en DWEC';
    
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
  
  
  
  

  
 
  
  
  
  
  
  
  

