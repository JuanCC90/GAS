function cuentaColores() {
  
  var hojaprueba = SpreadsheetApp.getActive().getSheetByName("PRUEBA GAS");
  
  var rango= hojaprueba.getRange(1, 1, hojaprueba.getLastRow(), hojaprueba.getLastColumn()).getValues();

  Logger.log(rango);
  
  var suspensos =0;
  var aprobados=0;
  var nose=0;
  
  var nColores = new Array();
  
  for(var i=0;i<rango.length;i++){
    
    var fila = i +1;
    var color = hojaprueba.getRange(fila, 1).getBackground();

   /* 
    if(i>0){
      
      if(nColores
      
      
      
    }else{
      
      nColores.push(color);
      
    }
    
  */  
  /*  Logger.log("Valor: "+valor);*/
    
   
    
    
    
    
    
    
    
   
    
  }
  
  Logger.log(nColores);
  
 /* 
 Browser.msgBox(aprobados);
  Browser.msgBox(suspensos);
  */
  
}
