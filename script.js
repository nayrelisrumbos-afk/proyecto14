// Activo el calendario bonito de la librería Flatpickr en el campo de la fecha
flatpickr("#fechaNacimiento", {
    dateFormat: "Y-m-d", // Le digo que guarde la fecha como año-mes-día 
    maxDate: "today"     // Le digo que la fecha máxima sea ese mismo dia y así no pueden elegir fechas futuras
});

// activamos botón de Calcular 
document.getElementById("calcular").onclick = function() {
    
    // guardo  en una variable la fecha que ponen
    var textoFecha = document.getElementById("fechaNacimiento").value;

    // Si no ponen la fecha entonces sale un mensaje
    if (textoFecha == "") {
        document.getElementById("resultado").innerHTML = "Por favor, elige una fechaa!";
        return; // El "return" hace que el código se detenga aquí y no siga calculando
    }

    // Uso la librería Luxon para convertir el texto de la fecha en una fecha real
    var nacimiento = luxon.DateTime.fromISO(textoFecha);
    
    // Luxon otra vez para sacar la fecha exacta de hoy
    var hoy = luxon.DateTime.now();

    //la diferencia entre hoy y la fecha de nacimiento y Le pido que el resultado sea en años y meses
    var edad = hoy.diff(nacimiento, ['years', 'months']).toObject();

    // Math.floor para quitar decimales y que queden números enteros 
    document.getElementById("resultado").innerHTML = 
        "Tienes " + Math.floor(edad.years) + " años y " + Math.floor(edad.months) + " meses.";
};