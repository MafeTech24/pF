let tarjetaStorage = localStorage.getItem("tarjetasFem")
tarjetaStorage = JSON.parse(tarjetaStorage)

let tarjetaCarrito = document.getElementById("tarjetaCarrito")
function renderCarrito (productosAgregados) {
    productosAgregados.forEach(femenina => {
        const agregados = document.createElement("section")
        agregados.innerHTML = `<img src=${femenina.img} class="img-car">
                               <h3 class="subTit2">${femenina.marca}</h3>
                               <h4 class="subTit3">${femenina.nombre}</h4>
                               <p class="precio" id="precio">Precio Unitario $${femenina.precio}
                               <button class="menos"> - </button>
                               <span class="counter"> 1 </span>
                               <button class="mas"> + </button>
                               </p>
                               <p>Subtotal</p>
                               <span class="subtotal">0</span>`
        tarjetaCarrito.appendChild(agregados)
        agregados.className = "tarj-car"
    })
}
renderCarrito(tarjetaStorage)

let tarjMscStorage = localStorage.getItem("tarjetasMasc")
tarjMscStorage = JSON.parse(tarjMscStorage)

let tarjetaCarrito1 = document.getElementById("tarjetaCarrito1")
function renderCarrito1 (productosAgregados1) {
    productosAgregados1.forEach(masculino => {
        const agregadosMsc = document.createElement("section")
        agregadosMsc.innerHTML = `<img src=${masculino.img} class="img-car">
                               <h3 class="subTit2">${masculino.marca}</h3>
                               <h4 class="subTit3">${masculino.nombre}</h4>
                               <p class="precio" id="precio">Precio Unitario $${masculino.precio}
                               <button class="menos"> - </button>
                               <span class="counter"> 1 </span>
                               <button class="mas"> + </button>
                               </p>
                               <p>Subtotal</p>
                               <span class="subtotal"></span>`
        tarjetaCarrito1.appendChild(agregadosMsc)
        agregadosMsc.className = "tarj-car"
    })
}
renderCarrito1(tarjMscStorage)

let tarjUnxStorage = localStorage.getItem("tarjetasUnix")
tarjUnxStorage = JSON.parse(tarjUnxStorage)

let tarjetaCarrito2 = document.getElementById("tarjetaCarrito2")
function renderCarrito2 (productosAgregados) {
    productosAgregados.forEach(unisex => {
        const agregadosUnx = document.createElement("section")
        agregadosUnx.innerHTML = `<img src=${unisex.img} class="img-car">
                               <h3 class="subTit2">${unisex.marca}</h3>
                               <h4 class="subTit2">${unisex.nombre}</h4>
                               <p class="precio" id="precio">Precio Unitario $${unisex.precio}
                               <button class="menos"> - </button>
                               <span class="counter"> 1 </span>
                               <button class="mas"> + </button>
                               </p>
                               <p>Subtotal</p>
                               <span class="subtotal"></span>`
        tarjetaCarrito1.appendChild(agregadosUnx)
        agregadosUnx.className = "tarj-car"
    })
}
renderCarrito2(tarjUnxStorage)


let resta = document.querySelectorAll("menos")
let counter = document.querySelectorAll("counter")
let suma = document.querySelectorAll("mas")
let contador = 1
let precio = document.querySelectorAll("precio")
let subtotal = document.querySelectorAll("subtotal")

// suma.onclick = () => {
//      contador++
//      counter.innerHTML = contador
// }
 
// resta.onclick = () => {
//     contador--
//     counter.innerHTML = contador
// }

const loguin = document.getElementById("loginIcon")
loguin.addEventListener("click", iniciarSesion)
function iniciarSesion() {
    Swal.fire({
        title: 'Iniciar sesión',
        html:
          '<input id="usuario" class="swal2-input" placeholder="Usuario">' +
            '<input id="clave" type="password" class="swal2-input" placeholder="Contraseña">',
            footer:'<a href="#">Crea una Cuenta</a>',
        showCancelButton: true,
        confirmButtonText: 'Entrar',
        preConfirm: () => {
          const usuario = document.getElementById('usuario').value;
          const clave = document.getElementById('clave').value;
          if (!usuario || !clave) {
            Swal.showValidationMessage('Completa ambos campos');
          }
          return { usuario, clave };
        }
      });
}
