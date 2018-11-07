//Funcion que obtiene los eventos del calendario de un usuario y lo pasa a una hoja excel
function calendariohojas(){

  //Nos presentara un correo por pantalla y pedira el correo electronico del usuario
  var correo=Browser.inputBox("Introduzca correo electronico");
  
  //Le pasamos el correo del usuario  y usamos la api de calendar de google
  var calendario = CalendarApp.getCalendarById(correo);
  
  //Recogeremos los eventos del calendario que van desde el 1 de enero al 30 de diciembre
  var eventos = calendario.getEvents(new Date("January 1, 2018 00:00:00 CST"), new Date("December 30, 2018 23:59:59 CST"));

  //Escribimos los datos recogidos del calendario a la hoja excel activa
  var sheet = SpreadsheetApp.getActiveSheet();

  //Escribiremos la primera fila de la hoja para determinar las columnas que representaran la informacion obtenida del calendario
  var header = [["Usuario", "Titulo del Evento", "Descripcion del Evento", "Localizacion del Evento", "Comienzo del Evento", "Final del Evento", "Duracion de Evento", "Visibilidad", "Creado Fecha", "Ultima Actualizacion", "Mi Estado", "Creado Por", "Evento todo el Dia", "Evento Recurrente"]]
  var rango=sheet.getRange(1,1,1,14);
  rango.setValues(header);
  
  //Recorreremos la hoja de excel y escribimos los datos del calendario obtenida
  for (var i=0;i<eventos.length;i++) {
    var row=i+2;
    var myformula_placeholder = '';
    var details=[[correo,eventos[i].getTitle(), eventos[i].getDescription(), eventos[i].getLocation(), eventos[i].getStartTime(), eventos[i].getEndTime(), myformula_placeholder, ('' + eventos[i].getVisibility()), eventos[i].getDateCreated(), eventos[i].getLastUpdated(), eventos[i].getMyStatus(), eventos[i].getCreators(), eventos[i].isAllDayEvent(), eventos[i].isRecurringEvent()]];
    var range=sheet.getRange(row,1,1,14);
    range.setValues(details);
  }
  
}


//Funcion creada para pintar una opcion en la hoja excel que ejecutara la opcion anteriormente creada
function sincronizaCalendario(){
  var hojaExcel= SpreadsheetApp.getActive();
  var menuItems=[
    {name:'Sincronizar Calendario', functionName:'calendariohojas'}
  ];
  
  
}
