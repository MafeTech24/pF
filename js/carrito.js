// let tarjetaStorage = localStorage.getItem("tarjetasFem")
// tarjetaStorage = JSON.parse(tarjetaStorage)

// let tarjetaCarrito = document.getElementById("tarjetaCarrito")
// function renderCarrito (productosAgregados) {
//     productosAgregados.forEach(femenina => {
//         const agregados = document.createElement("section")
//         agregados.innerHTML = `<img src=${femenina.img} class="img-car">
//                                <h3 class="subTit2">${femenina.marca}</h3>
//                                <h4 class="subTit3">${femenina.nombre}</h4>
//                                <p class="precio" id="precio">Precio Unitario $${femenina.precio}
//                                <button class="menos"> - </button>
//                                <span class="counter"> 1 </span>
//                                <button class="mas"> + </button>
//                                </p>
//                                <p>Subtotal</p>
//                                <span class="subtotal">0</span>`
//         tarjetaCarrito.appendChild(agregados)
//         agregados.className = "tarj-car"
//     })
// }
// renderCarrito(tarjetaStorage)

// let tarjMscStorage = localStorage.getItem("tarjetasMasc")
// tarjMscStorage = JSON.parse(tarjMscStorage)

// let tarjetaCarrito1 = document.getElementById("tarjetaCarrito1")
// function renderCarrito1 (productosAgregados1) {
//     productosAgregados1.forEach(masculino => {
//         const agregadosMsc = document.createElement("section")
//         agregadosMsc.innerHTML = `<img src=${masculino.img} class="img-car">
//                                <h3 class="subTit2">${masculino.marca}</h3>
//                                <h4 class="subTit3">${masculino.nombre}</h4>
//                                <p class="precio" id="precio">Precio Unitario $${masculino.precio}
//                                <button class="menos"> - </button>
//                                <span class="counter"> 1 </span>
//                                <button class="mas"> + </button>
//                                </p>
//                                <p>Subtotal</p>
//                                <span class="subtotal"></span>`
//         tarjetaCarrito1.appendChild(agregadosMsc)
//         agregadosMsc.className = "tarj-car"
//     })
// }
// renderCarrito1(tarjMscStorage)

// let tarjUnxStorage = localStorage.getItem("tarjetasUnix")
// tarjUnxStorage = JSON.parse(tarjUnxStorage)

// let tarjetaCarrito2 = document.getElementById("tarjetaCarrito2")
// function renderCarrito2 (productosAgregados) {
//     productosAgregados.forEach(unisex => {
//         const agregadosUnx = document.createElement("section")
//         agregadosUnx.innerHTML = `<img src=${unisex.img} class="img-car">
//                                <h3 class="subTit2">${unisex.marca}</h3>
//                                <h4 class="subTit2">${unisex.nombre}</h4>
//                                <p class="precio" id="precio">Precio Unitario $${unisex.precio}
//                                <button class="menos"> - </button>
//                                <span class="counter"> 1 </span>
//                                <button class="mas"> + </button>
//                                </p>
//                                <p>Subtotal</p>
//                                <span class="subtotal"></span>`
//         tarjetaCarrito1.appendChild(agregadosUnx)
//         agregadosUnx.className = "tarj-car"
//     })
// }
// renderCarrito2(tarjUnxStorage)


// let resta = document.querySelectorAll(".menos")
// let counter = document.querySelectorAll(".counter")
// let suma = document.querySelectorAll(".mas")
// let contador = 1
// let precio = document.querySelectorAll(".precio")
// let subtotal = document.querySelectorAll(".subtotal")



// /***** Acceso al Formulario para Iniciar Sesión */
// const loguin = document.getElementById("loginIcon")
// loguin.addEventListener("click", iniciarSesion)
// function iniciarSesion() {
//     Swal.fire({
//         title: 'Iniciar sesión',
//         html:
//           '<input id="usuario" class="swal2-input" placeholder="Usuario">' +
//             '<input id="clave" type="password" class="swal2-input" placeholder="Contraseña">',
//         showCancelButton: true,
//         confirmButtonText: 'Ingresar',
//         preConfirm: () => {
//           const usuario = document.getElementById('usuario').value;
//           const clave = document.getElementById('clave').value;
//           if (!usuario || !clave) {
//             Swal.showValidationMessage('Completa ambos campos');
//           }
//           return { usuario, clave };
//         }
//       });
// }
// /****** Acceso al Formulario para Registrarse y Crear Nueva Cuenta *****/
// const registrarse = document.getElementById("registrarse")
// registrarse.addEventListener("click", registrar)
// function registrar() {
//     Swal.fire({
//         title: 'Registro de Cuenta Nueva',
//         html:
//           '<input id="nombre" class="swal2-input" placeholder="Nombre">' +
//           '<input id="apellido" class="swal2-input" placeholder="Apellido">' +
//           '<input id="email" type="email" class="swal2-input" placeholder="Correo electrónico">' +
//           '<input id="telefono" class="swal2-input" placeholder="Teléfono">' +
//           '<input id="password" type="password" class="swal2-input" placeholder="Contraseña">',
//         confirmButtonText: 'Registrarse',
//         showCancelButton: true,
//         preConfirm: () => {
//           const nombre = document.getElementById('nombre').value;
//           const apellido = document.getElementById('apellido').value;
//           const email = document.getElementById('email').value;
//           const telefono = document.getElementById('telefono').value;
//           const password = document.getElementById('password').value;
          
      
//           if (!nombre || !apellido || !email || !telefono || !password) {
//             Swal.showValidationMessage('Por favor, completa todos los campos');
//             return false;
//           }
      
//           return { nombre, apellido, email, telefono, password };
//         }
//       }).then((result) => {
//         if (result.isConfirmed) {
//             Swal.fire({
//                 title: "Se ha Registrado con Éxito!",
//                 icon: "success",
//                 confirmButtonText: "Ingresar"
//               });
//         }
//       });
      

//     }




const tarjetaCarrito = document.getElementById("tarjetaCarrito");
const productos = [
  ...(JSON.parse(localStorage.getItem("tarjetasFem")) || []),
  ...(JSON.parse(localStorage.getItem("tarjetasMasc")) || []),
  ...(JSON.parse(localStorage.getItem("tarjetasUnix")) || [])
];

/********** PARA EVITAR DUPLICADOS *************/
const carritoMap = {};
productos.forEach(prod => {
  if (carritoMap[prod.codigo]) {
    carritoMap[prod.codigo].cantidad++;
  } else {
    carritoMap[prod.codigo] = { ...prod, cantidad: 1 };
  }
});

const carrito = Object.values(carritoMap);

function compraCarrito() {
  tarjetaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    const section = document.createElement("section");
    section.className = "tarj-car";
    section.innerHTML = `
      <img src="${item.img}" class="img-car">
      <h3 class="subTit2">${item.marca}</h3>
      <h4 class="subTit3">${item.nombre}</h4>
      <p class="precio">Precio Unitario: $${item.precio}</p>
      <div class="cantidad-controls">
        <button class="menos btn btn-outline-danger btn-sm" data-index="${index}">-</button>
        <span class="counter mx-2">${item.cantidad}</span>
        <button class="mas btn btn-outline-success btn-sm" data-index="${index}">+</button>
      </div>
      <p>Subtotal: <strong>$${subtotal}</strong></p>
      <button class="eliminar btn btn-danger btn-sm mt-2" data-index="${index}">Eliminar</button>
    `;
    tarjetaCarrito.appendChild(section);
  });

  const totalHTML = document.createElement("div");
  totalHTML.className = "text-end m-3 fs-4";
  totalHTML.innerHTML = `Total a pagar: <strong>$${total}</strong>`;
  tarjetaCarrito.appendChild(totalHTML);

  asignarEventos();
}

function asignarEventos() {
  document.querySelectorAll(".mas").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      carrito[index].cantidad++;
      compraCarrito();
    });
  });

  document.querySelectorAll(".menos").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
      }
      compraCarrito();
    });
  });

  document.querySelectorAll(".eliminar").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      Swal.fire({
        title: '¿Estás seguro?',
        text: "Esta acción eliminará el producto del carrito.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          carrito.splice(index, 1);
          renderCarrito();
        }
      });
    });
  });
}

compraCarrito();

/************ FINALIZAR COMPRA Y CARRITO VACIO  ****************/
const finalizarCompraBtn = document.getElementById("finalizarCompra");

finalizarCompraBtn.addEventListener("click", () => {
  if (carrito.length === 0) {
    Swal.fire({
      icon: 'info',
      title: 'Tu carrito está vacío',
      text: 'Agrega productos antes de finalizar la compra.'
    });
    return;
  }

  const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

  Swal.fire({
    title: '¿Deseas finalizar tu compra?',
    html: `<p>Total a pagar: <strong>$${total}</strong></p>`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, comprar',
    cancelButtonText: 'Cancelar'
  }).then(result => {
    if (result.isConfirmed) {
      // Limpiar localStorage
      localStorage.removeItem("tarjetasFem");
      localStorage.removeItem("tarjetasMasc");
      localStorage.removeItem("tarjetasUnix");

      // Vaciar la vista
      carrito.length = 0;
      compraCarrito();

      Swal.fire({
        title: '¡Compra realizada!',
        text: 'Gracias por tu compra. Te enviaremos los detalles por correo.',
        icon: 'success'
      });
    }
  });
});

const vaciarCarritoBtn = document.getElementById("vaciarCarrito");

vaciarCarritoBtn.addEventListener("click", () => {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Esta acción eliminará todos los productos del carrito.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, vaciar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("tarjetasFem");
      localStorage.removeItem("tarjetasMasc");
      localStorage.removeItem("tarjetasUnix");

      // Limpia visualmente el carrito
      tarjetaCarrito.innerHTML = "";
      tarjetaCarrito1.innerHTML = "";
      tarjetaCarrito2.innerHTML = "";

      Swal.fire({
        icon: "success",
        title: "Carrito vaciado",
        text: "Todos los productos fueron eliminados."
      });
    }
  });
});


const guardarPedidoBtn = document.getElementById("guardarPedido");

guardarPedidoBtn.addEventListener("click", () => {
  const pedido = {
    femeninas: JSON.parse(localStorage.getItem("tarjetasFem")) || [],
    masculinas: JSON.parse(localStorage.getItem("tarjetasMasc")) || [],
    unisex: JSON.parse(localStorage.getItem("tarjetasUnix")) || [],
    fecha: new Date().toLocaleString()
  };

  console.log("Pedido guardado:", pedido);

  Swal.fire({
    icon: "success",
    title: "Pedido guardado exitosamente",    
  });
});


function calcularTotalGeneral() {
  let total = 0;

  const fem = JSON.parse(localStorage.getItem("tarjetasFem")) || [];
  const masc = JSON.parse(localStorage.getItem("tarjetasMasc")) || [];
  const unx = JSON.parse(localStorage.getItem("tarjetasUnix")) || [];

  const productos = [...fem, ...masc, ...unx];

  productos.forEach(() => {
    total += 1; 
  });
  
  total = productos.reduce((acc, prod) => acc + Number(prod.precio), 0);

  document.getElementById("totalGeneral").innerText = total;
}
calcularTotalGeneral();


