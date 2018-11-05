
function calendariohojas(){



var calendario = "juanmanuelcastro.16@campuscamara.es";
var cal = CalendarApp.getCalendarById(calendario);

var eventos = cal.getEvents(new Date("January 1, 2018 00:00:00 CST"), new Date("December 30, 2018 23:59:59 CST"), {search: '-project123'});


var sheet = SpreadsheetApp.getActiveSheet();

var header = [["Usuario", "Titulo del Evento", "Descripcion del Evento", "Localizacion del Evento", "Comienzo del Evento", "Final del Evento", "Duracion de Evento", "Visibilidad", "Creado Fecha", "Ultima Actualizacion", "Mi Estado", "Creado Por", "Evento todo el Dia", "Evento Recurrente"]]


for (var i=0;i<eventos.length;i++) {
  var row=i+2;
  var myformula_placeholder = '';

  var details=[[calendario,eventos[i].getTitle(), eventos[i].getDescription(), eventos[i].getLocation(), eventos[i].getStartTime(), eventos[i].getEndTime(), myformula_placeholder, ('' + eventos[i].getVisibility()), eventos[i].getDateCreated(), eventos[i].getLastUpdated(), eventos[i].getMyStatus(), eventos[i].getCreators(), eventos[i].isAllDayEvent(), eventos[i].isRecurringEvent()]];
  var range=sheet.getRange(row,1,1,14);
  range.setValues(details);


}
}



function sincronizaCalendario(){
  var hojaExcel= SpreadsheetApp.getActive();
  var menuItems=[
    {name:'Sincronizar Calendario', functionName:'calendario-hojas'}
  
  ];
  
  
}
