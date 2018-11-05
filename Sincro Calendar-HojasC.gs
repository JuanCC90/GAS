function calendar(){
var mycal = "juanmanuelcastro.16@campuscamara.es";
var cal = CalendarApp.getCalendarById(mycal);
var events = cal.getEvents(new Date("January 1, 2018 00:00:00 CST"), new Date("December 30, 2018 23:59:59 CST"), {search: '-project123'});
var sheet = SpreadsheetApp.getActiveSheet();
var header = [["Fecha Calendario", "Titulo del Evento", "Descripcion del Evento", "Localizacion del Evento", "Comienzo del Evento", "Final del Evento", "Duracion Estimada", "Visibilidad", "Creacion Fecha", "Ultima Actualizacion", "Mi Estado", "Creado Por", "Evento todo el Dia", "Evento Periodico"]]
}


function sincronizaCalendario(){
  var hojaExcel= SpreadsheetApp.getActive();
  var menuItems=[
    {name:'Sincro Calendar', functionName:'calendar'}
  
  ];
  
  
}
