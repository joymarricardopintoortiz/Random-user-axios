document.addEventListener("DOMContentLoaded", () => {

    cargarUsuario();

    document.getElementById("nuevoUsuario").addEventListener("click", () => {
        cargarUsuario();
    });

});

async function cargarUsuario(){

    let res = await axios.get("https://randomuser.me/api/");
    let usuario = res.data.results[0];

    document.getElementById("nombre").textContent =
    `${usuario.name.first} ${usuario.name.last}`;

    let perfil = document.getElementById("perfil");
    perfil.src = usuario.picture.large;
    perfil.alt = `Foto de ${usuario.name.first}`;

    document.getElementById("username").innerHTML =
    `<span>Nombre de usuario:</span> ${usuario.login.username}`;

    document.getElementById("correo").innerHTML =
    `<span>Correo:</span> ${usuario.email}`;

    document.getElementById("password").innerHTML =
    `<span>Contraseña:</span> ${usuario.login.password}`;

    document.getElementById("nacimiento").innerHTML =
    `<span>Fecha de nacimiento:</span> ${usuario.dob.date.substring(0,10)}`;

    document.getElementById("edad").innerHTML =
    `<span>Edad:</span> ${usuario.dob.age} años`;

    document.getElementById("genero").innerHTML =
    `<span>Género:</span> ${usuario.gender}`;

    document.getElementById("telefono").innerHTML =
    `<span>Teléfono:</span> ${usuario.phone}`;

    document.getElementById("celular").innerHTML =
    `<span>Celular:</span> ${usuario.cell}`;

    document.getElementById("direccion").innerHTML =
    `<span>Dirección:</span> ${usuario.location.street.number}, ${usuario.location.street.name}`;

    document.getElementById("ciudad").innerHTML =
    `<span>Ciudad:</span> ${usuario.location.city}`;

    document.getElementById("departamento").innerHTML =
    `<span>Departamento:</span> ${usuario.location.state}`;

    document.getElementById("postal").innerHTML =
    `<span>Código postal:</span> ${usuario.location.postcode}`;

    document.getElementById("pais").innerHTML =
    `<span>País:</span> ${usuario.location.country}`;

    document.getElementById("registro").innerHTML =
    `<span>Fecha de registro:</span> ${usuario.registered.date.substring(0,10)}`;

    document.getElementById("registro1").innerHTML =
    `<span>Años registrado:</span> ${usuario.registered.age}`;

    document.getElementById("nacionalidad").innerHTML =
    `<span>Nacionalidad:</span> ${usuario.nat}`;

    document.getElementById("latitud").innerHTML =
    `<span>Latitud:</span> ${usuario.location.coordinates.latitude}`;

    document.getElementById("longitud").innerHTML =
    `<span>Longitud:</span> ${usuario.location.coordinates.longitude}`;

    document.getElementById("horario").innerHTML =
    `<span>Zona horaria:</span> ${usuario.location.timezone.offset} ${usuario.location.timezone.description}`;

    document.getElementById("documento").innerHTML =
    `<span>Tipo de documento:</span> ${usuario.id.name}`;

    document.getElementById("numero").innerHTML =
    `<span>Número:</span> ${usuario.id.value}`;

    document.getElementById("titulo").innerHTML =
    `<span>Tratamiento:</span> ${usuario.name.title}`;

    document.getElementById("uuid").innerHTML =
    `<span>UUID:</span> ${usuario.login.uuid}`;

    document.getElementById("salt").innerHTML =
    `<span>Salt:</span> ${usuario.login.salt}`;

    document.getElementById("hashes").innerHTML =
    `<span>Hashes:</span><br>
    MD5: ${usuario.login.md5}<br>
    SHA1: ${usuario.login.sha1}<br>
    SHA256: ${usuario.login.sha256}`;

    document.getElementById("maps").onclick = () => {

        const lat = usuario.location.coordinates.latitude;
        const lng = usuario.location.coordinates.longitude;

        window.open(
            `https://www.google.com/maps?q=${lat},${lng}`,
            "_blank"
        );
    };
}