
function validar()
{
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const select = document.getElementById("select").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;
    const textarea = document.getElementById("textarea").value;

    alert(" Nombre : " + nombre + "\n Apellidos : " + apellidos + "\n Sexo : " + select + "\n Edad : " + edad + "\n Email : "+ email + "\n Motivo : " + textarea);
}

function limpiar()
{
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("email").value = "";
    document.getElementById("textarea").value = "";
    formulario.reset();
}

