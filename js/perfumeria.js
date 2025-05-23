// const femeninas= [
//     {
//         img:"../assets/perfumeria/0.01.webp",
//         marca: "AGHATA RUIZ DE LA PRADA",
//         nombre:"Gotas de Color DOT-TO-DOT EDT",
//         presentacion: 100,
//         codigo:0.01,
//         precio:30270,
//     },
//     {
//         img:"../assets/perfumeria/0.02.webp",
//         marca: "AGHATA RUIZ DE LA PRADA",
//         nombre:"Gotas de Color EDT",
//         presentacion: 100,
//         codigo:0.02,
//         precio:30270,
//     },
//     {
//         img:"../assets/perfumeria/0.03.webp",
//         marca: "AGHATA RUIZ DE LA PRADA",
//         nombre:"Flor EDT",
//         presentacion: 100,
//         codigo:0.03,
//         precio:28110,
//     },
//     {
//         img:"../assets/perfumeria/armani200.webp",
//         marca: "ARMANI",
//         nombre:"Si Passione EDP Intense Refillable",
//         presentacion: 100,
//         codigo:200,
//         precio:299000,
//     },
//     {
//         img:"../assets/perfumeria/armani201.webp",
//         marca: "ARMANI",
//         nombre:"My Way EDP Refillable",
//         presentacion: 50,
//         codigo:201,
//         precio:250000,
//     },
//     {
//         img:"../assets/perfumeria/armani202.webp",
//         marca: "ARMANI",
//         nombre:"My Way Intense EDP",
//         presentacion: 90,
//         codigo:202,
//         precio:305000,
//     },
//     {
//         img:"../assets/perfumeria/banderas400.webp",
//         marca: "BANDERAS",
//         nombre:"Blue Seduction For Woman EDT",
//         presentacion: 80,
//         codigo:400,
//         precio:36300,
//     },
//     {
//         img:"../assets/perfumeria/banderas401.webp",
//         marca: "BANDERAS",
//         nombre:"Her Secret Temptation EDT",
//         presentacion: 80,
//         codigo:401,
//         precio:36500,
//     },
//     {
//         img:"../assets/perfumeria/banderas402.webp",
//         marca: "BANDERAS",
//         nombre:"The Icon Splendid EDP",
//         presentacion: 100,
//         codigo:402,
//         precio:53500,
//     },
//     {
//         img:"../assets/perfumeria/benetton600.webp",
//         marca: "BENETTON",
//         nombre:"Sisterland Pink Raspberry EDT",
//         presentacion: 80,
//         codigo:600,
//         precio:39200,
//     },
//     {
//         img:"../assets/perfumeria/benetton601.webp",
//         marca: "BENETTON",
//         nombre:"United Dreams Love Yourself EDT",
//         presentacion: 80,
//         codigo:601,
//         precio:39500,
//     },
//     {
//         img:"../assets/perfumeria/benetton602.webp",
//         marca: "BENETTON",
//         nombre:"Sisterland Golden Vanilla EDP",
//         presentacion: 80,
//         codigo:602,
//         precio:43120,
//     },
//     {
//         img:"../assets/perfumeria/carolinaH800.webp",
//         marca: "CAROLINA HERRERA",
//         nombre:"Good Girl EDP",
//         presentacion: 80,
//         codigo:800,
//         precio:180460,
//     },
//     {
//         img:"../assets/perfumeria/carolinaH801.webp",
//         marca: "CAROLINA HERRERA",
//         nombre:"212 EDT",
//         presentacion: 60,
//         codigo:801,
//         precio:132160,
//     },
//     {
//         img:"../assets/perfumeria/carolinaH802.webp",
//         marca: "CAROLINA HERRERA",
//         nombre:"212 Vip Rose EDP Ed. Limitada",
//         presentacion: 125,
//         codigo:802,
//         precio:269430,
//     }
// ]

// const tarjetasFem = []
// let fraganciasFemeninas = document.getElementById("frag-fem")
// fraganciasFemeninas.className = "fraganciasFem"
// function renderFem(femeninasArrays) {
//     femeninasArrays.forEach((femenina) => {
//         const tarjeta = document.createElement("section")
//         tarjeta.innerHTML = `<img src=${femenina.img} class="imagen">
//                              <h4>${femenina.marca}</h4>
//                              <h5>${femenina.nombre}</h5>
//                              <p class="precio">$${femenina.precio}</p>
//                              <button class="agrega" id=${femenina.codigo}>Agregar al Carrito</button>`
//         fraganciasFemeninas.appendChild(tarjeta)
//         tarjeta.className = "tarjeta"
//     })
//     añadirAlCarrito()
// }
// renderFem(femeninas)


let fraganciasFemeninas = document.getElementById("frag-fem")
fraganciasFemeninas.className = "fraganciasFem"
fetch("../baseDatos/fragFem.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((femenino) => {
            const tarjeta = document.createElement("section")
            tarjeta.className = "tarjeta"
            tarjeta.innerHTML = `<img src=${femenino.img} class="imagen">
                                 <h4>${femenino.marca}</h4>
                                 <h5>${femenino.nombre}</h5>
                                 <p class="precio">$${femenino.precio}</p>
                                 <button class="agrega" id=${femenino.codigo}>Agregar al Carrito</button>`
            fraganciasFemeninas.appendChild(tarjeta)
            tarjeta.className = "tarjeta"
        })
    })

// fetch("../baseDatos/fragFem.json")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.error('Error al cargar JSON:', err));


function añadirAlCarrito () {
    agregaCarrito = document.querySelectorAll(".agrega")
    agregaCarrito.forEach (button => {
        button.onclick = (e) => {
            const femCodigo = e.currentTarget.id
            const agregarProd = femeninas.find (femenina => femenina.codigo == femCodigo)
            tarjetasFem.push(agregarProd)
            console.log(tarjetasFem)

            localStorage.setItem("tarjetasFem", JSON.stringify(tarjetasFem))
        }
    })
}

let descripcion = document.getElementById("descripcion")
descripcion.innerHTML = `<h2 class="subtitulo1" id="fragFem">Fragancias Femeninas</h2>
                         <p class="texto">Sumérgete en el universo de la elegancia y la sensualidad con nuestra exclusiva colección de perfumes femeninos.
Desde aromas suaves y florales hasta notas intensas y sofisticadas, cada fragancia está pensada para resaltar tu esencia en cada momento del día.
Trabajamos con marcas nacionales e importadas reconocidas por su calidad y distinción.
Encuentra el perfume ideal que hable por ti… porque cada mujer merece dejar una huella inolvidable.</p>`

// const masculinos = [
//     {
//         img:"../assets/perfumeria/versage1000.webp",
//         marca: "VERSACE",
//         nombre:"Blue Jeans EDT",
//         presentacion: 75,
//         codigo:1000,
//         precio:63990,
//     },
//     {
//         img:"../assets/perfumeria/calvin1200.webp",
//         marca: "CALVIN KLEIN",
//         nombre:"Blue Jeans EDT",
//         presentacion: 150,
//         codigo:1200,
//         precio:106150,
//     },    
//     {
//         img:"../assets/perfumeria/davidoff1400.webp",
//         marca: "DAVIDOFF",
//         nombre:"Davidoff Cool Water EDT",
//         presentacion: 200,
//         codigo:1400,
//         precio:130680,
//     },
//     {
//         img:"../assets/perfumeria/azzaro1600.webp",
//         marca: "AZZARO",
//         nombre:"Azzaro Sport EDT",
//         presentacion: 100,
//         codigo:1600,
//         precio:94923,
//     },
//     {
//         img:"../assets/perfumeria/versage1001.webp",
//         marca: "VERSACE",
//         nombre:"The Dreamer EDT",
//         presentacion: 100,
//         codigo:1001,
//         precio:110700,
//     },
//     {
//         img:"../assets/perfumeria/guylaroche1800.webp",
//         marca: "GUY LAROCHE",
//         nombre:"Drakkar Noir EDT",
//         presentacion: 200,
//         codigo:1800,
//         precio:49140,
//     },
//     {
//         img:"../assets/perfumeria/bvlgari2000.webp",
//         marca: "BVLGARI",
//         nombre:"Le Gemme Garanat EDP",
//         presentacion: 125,
//         codigo:2000,
//         precio:658900,
//     },
//     {
//         img:"../assets/perfumeria/loewe2200.webp",
//         marca: "LOEWE",
//         nombre:"LOEWE 7 ELIXIR EDP",
//         presentacion: 125,
//         codigo:2200,
//         precio:437000,
//     },
//     {
//         img:"../assets/perfumeria/armani2400.webp",
//         marca: "ARMANI",
//         nombre:"Armani Code Parfum",
//         presentacion: 125,
//         codigo:2400,
//         precio:330000,
//     }, 
// ]                         

const tarjetasMasc = []
let fraganciasMasculinas = document.getElementById("frag-masc")
fraganciasMasculinas.className = "fraganciasMasc"
function renderMasc(masculinosArrays) {
    masculinosArrays.forEach((masculino) => {
        const tarjetaMsc = document.createElement("section")
        tarjetaMsc.innerHTML = `<img src=${masculino.img} class="imagen">
                             <h4>${masculino.marca}</h4>
                             <h5>${masculino.nombre}</h5>
                             <p class="precio">$${masculino.precio}</p>
                             <button class="agrega1" id=${masculino.codigo}>Agregar al Carrito</button>`
        fraganciasMasculinas.appendChild(tarjetaMsc)
        tarjetaMsc.className = "tarjeta"
    })
    añadirAlCarritoMs()
}
renderMasc(masculinos)

function añadirAlCarritoMs () {
    agregaCarritoMs = document.querySelectorAll(".agrega1")
    agregaCarritoMs.forEach (button => {
        button.onclick = (e) => {
            const mascCodigo = e.currentTarget.id
            const agregarProdMs = masculinos.find (masculino => masculino.codigo == mascCodigo)
            tarjetasMasc.push(agregarProdMs)
            console.log(tarjetasMasc)

            localStorage.setItem("tarjetasMasc", JSON.stringify(tarjetasMasc))
        }
    })
}

let fragMasc = document.getElementById("frag-masc1")
fragMasc.innerHTML = `<h2 class="subtitulo1" id="fragMasc1">Fragancias Masculinas</h2>
                      <p class="texto">Descubre nuestra selección de perfumes masculinos diseñados para destacar la fuerza, elegancia y autenticidad del hombre moderno.
Desde notas frescas y cítricas hasta aromas intensos y amaderados, cada fragancia transmite personalidad y carácter.
Trabajamos con marcas nacionales e importadas que garantizan calidad, duración y estilo.
Encuentra el aroma perfecto para cada ocasión y deja una impresión que perdure.</p>`


const unisexs = [
    {
        img:"../assets/perfumeria/tomford2600.webp",
        marca: "TOM FORD",
        nombre:"Fucking Fabulous EDP 100 ml + Soleil Neige EDP 100 ml SET",
        presentacion: 100,
        codigo:2600,
        precio:1183478,
    },
    {
        img:"../assets/perfumeria/tomford2601.webp",
        marca: "TOM FORD",
        nombre:"Soleil Blanc EDP",
        presentacion: 100,
        codigo:2601,
        precio:788986,
    },  
    {
        img:"../assets/perfumeria/loewe2800.webp",
        marca: "LOEWE",
        nombre:"LOEWE EARTH ELIXIR EDP",
        presentacion: 100,
        codigo:2800,
        precio:437000,
    },   
    {
        img:"../assets/perfumeria/guerlain3001.webp",
        marca: "GUERLAIN",
        nombre:"Aqua Allegoria Forte Bosca Vanilla EDP",
        presentacion: 125,
        codigo:3001,
        precio:310000,
    },     
    {
        img:"../assets/perfumeria/loewe2801.webp",
        marca: "LOEWE",
        nombre:"LOEWE AGUA DROP EDP",
        presentacion: 100,
        codigo:2801,
        precio:325000,
    },   
    {
        img:"../assets/perfumeria/loewe2802.webp",
        marca: "LOEWE",
        nombre:"LOEWE SOLO VULCAN EDP",
        presentacion: 100,
        codigo:2802,
        precio:325000,
    },
    {
        img:"../assets/perfumeria/tomFord2602.webp",
        marca: "TOM FORD",
        nombre:"Soleil Blanc EDP + Body Oil COFRE",
        presentacion: 50,
        codigo:2602,
        precio:869202,
    },
    {
        img:"../assets/perfumeria/calvin3200.webp",
        marca: "CALVIN KLEIN",
        nombre:"CK One Gold EDT",
        presentacion:100,
        codigo:3200,
        precio:81675,
    },
    {
        img:"../assets/perfumeria/guerlain3000.webp",
        marca: "GUERLAIN",
        nombre:"Absolus Allegoria Rose Amira EDP",
        presentacion: 125,
        codigo:3000,
        precio:352000,
    }, 
]             


let fragUnisex = document.getElementById("frag-unisex1")
fragUnisex.innerHTML = `<h2 class="subtitulo1" id="fragUnisex1">Fragancias Unisex</h2>
                        <p class="texto">Explora el equilibrio perfecto entre lo masculino y lo femenino con nuestra colección de fragancias unisex.
Aromas versátiles, modernos y elegantes que se adaptan a cualquier estilo y personalidad.
Desde esencias frescas y cítricas hasta combinaciones amaderadas y especiadas, cada perfume es una invitación a romper estereotipos y expresar tu autenticidad.
Elige tu esencia sin etiquetas y haz que tu aroma hable por ti.</p>`

const tarjetasUnix = []
let fraganciasUnisexs = document.getElementById("frag-unisex")
fraganciasUnisexs.className = "fraganciasUnix"
function renderUnix(unisexsArrays) {
    unisexsArrays.forEach((unisex) => {
        const tarjetaUnx = document.createElement("section")
        tarjetaUnx.innerHTML = `<img src=${unisex.img} class="imagen">
                             <h4>${unisex.marca}</h4>
                             <h5>${unisex.nombre}</h5>
                             <p class="precio">$${unisex.precio}</p>
                             <button class="agrega2" id=${unisex.codigo}>Agregar al Carrito</button>`
        fraganciasUnisexs.appendChild(tarjetaUnx)
        tarjetaUnx.className = "tarjeta"
    })
    añadirAlCarritoUnx()
}
renderUnix(unisexs)

function añadirAlCarritoUnx () {
    agregaCarritoUnx = document.querySelectorAll(".agrega2")
    agregaCarritoUnx.forEach (button => {
        button.onclick = (e) => {
            const unixCodigo = e.currentTarget.id
            const agregarProdUnx = unisexs.find (unisex => unisex.codigo == unixCodigo)
            tarjetasUnix.push(agregarProdUnx)
            console.log(tarjetasUnix)

            localStorage.setItem("tarjetasUnix", JSON.stringify(tarjetasUnix))
        }
    })
}

