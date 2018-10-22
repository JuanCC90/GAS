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
 
    if(i<1){
     nColores.push(color); 
      
    }else{
      
      if(nColores.indexOf(color)<0){
        nColores.push(color);
      }
      
    }
    
  }
  
   
  var sh= SpreadsheetApp.openById("1GiIBzRH28Yj7a1OswYItkiKLGamuSNpngd1iVh_YzyI");
  var sheet=sh.getSheetByName("PRUEBA GAS");
  
  for(i=0;i<nColores.length;i++){
    
    SpreadsheetApp.getActiveSpreadsheet().insertSheet(nColores[i]);
    
    
  }
  

  
 /* 
 Browser.msgBox(aprobados);
  Browser.msgBox(suspensos);
  */
  
  Logger.log(nColores);
  
}
