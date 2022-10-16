// funcion GET cliente
function leerCliente() {
    $.ajax({
        url: 'https://g07051d100cd950-reto1.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',

        success: function (clientes) {

            let cs = clientes.items;
            $("#listaClientes").empty();

            for (i = 0; i < cs.length; i++) {
                $("#listaClientes").append(cs[i].id + " " + cs[i].name + " " + cs[i].email + " ");
                $("#listaClientes").append("<button onclick='borrarCliente(" + cs[i].id + ")'>Borrar</button><br><br>");
            }
        },

        error: function (xhr, status) {
            //    alert('Ha ocurrido un problema');
        },
    });
}

// funcion POST cliente
function guardarCliente() {
    let idCliente = $("#id").val();
    let nombre = $("#nombreCliente").val();
    let mailCliente = $("#mailCliente").val();
    let edad = $("#edadCliente").val();

    let data = {
        id: idCliente,
        name: nombre,
        email: mailCliente,
        age: edad
    };
    let dataToSend = JSON.stringify(data);
    $.ajax({
        url: 'https://g07051d100cd950-reto1.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'POST',
        dataType: 'json',
        data: dataToSend,
        contentType: 'application/json',
        error: function (xhr, status) {
            //    alert('ha ocurrido un problema, intentalo nuevamente, ' + xhr.status);
        },
        success: function () {
            $("#id").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
        complete: function () {
            leerCliente();
        },
    });


}
// funcion UPDATE cliente
function actualizarCliente() {
    let idCliente = $("#id").val();
    let nombre = $("#nombreCliente").val();
    let mailCliente = $("#mailCliente").val();
    let edad = $("#edadCliente").val();

    let data = {
        id: idCliente,
        name: nombre,
        email: mailCliente,
        age: edad
    };
    let dataToSend = JSON.stringify(data);
    $.ajax({
        url: 'https://g07051d100cd950-reto1.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'PUT',
        dataType: 'json',
        data: dataToSend,
        contentType: 'application/json',
        error: function (xhr, status) {
            //  alert('ha ocurrido un problema, intentalo nuevamente, ' + xhr.status);
        },

        complete: function () {
            leerCliente();
        },
        success: function () {
            $("#id").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
    });


}
// funcion DELETE cliente
function borrarCliente(idCliente) {
    let data = {
        id: idCliente
    };
    let dataToSend = JSON.stringify(data);
    $.ajax({
        url: 'https://g07051d100cd950-reto1.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'DELETE',
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        error: function (xhr, status) {
            //   alert('ha ocurrido un problema, intentalo nuevamente, ' + xhr.status);
        },

        complete: function () {
            leerCliente();
        },
        success: function () {
            $("#id").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
    });




}



