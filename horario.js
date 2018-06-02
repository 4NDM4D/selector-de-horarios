//hora
function myFunction() {
    var text;
    var horario = document.getElementById("userData").value;
    
    switch(horario) {
        case "a":
            text = "2:00 am - 10:00 am";
        break;
        case "b":
            text = "3:30 am - 11:30 am";
        break;
        case "d":
            text = "6:30 am - 2:30 pm";
        break;
        case "e":
            text = "7:30 am - 3:30 pm";
        break;
        case "f":
            text = "10:00 am - 6:00 am";
        break;
        case "i":
            text = "1:00 pm - 9:00 pm";
        break;
        case "l":
            text = "Libre";
        break;
        case "":
            text = " "; 
        break;
        default:
            text = "Ingrese el dato correctamente";
        break;
    }
    
    document.getElementById("respuesta").innerHTML = text;
}

//día
let dia = document.getElementById("dateinput").value;
    dateEntered = new Date(dia);