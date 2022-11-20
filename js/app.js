const shopContent = document.getElementById("pokemonBox")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")

let carrito = [];
    // Creacion de Pokemons
    const divGlobal = document.querySelector(".pokemonBox")
    
    
    pokemones.forEach(item => {
    let container = document.createElement("div")
    let name = document.createElement("h3")
    let price = document.createElement("p")
    let img = document.createElement("img")
    let type = document.createElement("img")
    let botonDeCompras = document.createElement("button")
    
        price.textContent = "Precio:" + " " + "$" + item.precio
        name.textContent = item.nombre
        img.src = item.image
        type.src = item.tipo
        botonDeCompras.textContent = "Agregar al carrito"
        
        container.className = "pokemons"
        img.className = "imgPokemon"
        type.className = "type"
        container.id = "pokemons"  
        img.id = "imgPokemon"
        type.id = "type"
        botonDeCompras.id = "botonDeCompras"


        container.appendChild(img)
        container.appendChild(type)
        container.appendChild(name)
        container.appendChild(price)
        container.appendChild(botonDeCompras)
        divGlobal.appendChild(container)

        container.classList.add(item.caracteristica, item.caracteristica2, "hide");    
        
        botonDeCompras.addEventListener("click", ()=>{
          carrito.push({
            id : item.id,
            img : item.image,
            nombre : item.nombre,
            precio : item.precio,
          }) 
          console.log(carrito);
        })
    }) 

    // Funciones de botones

    function filterProduct(value) {

        let elements = document.querySelectorAll(".pokemons");
    
        elements.forEach((element) => {
          
          if (value == "Mostrar todo") {
            element.classList.remove("hide");
          } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
              element.classList.add("hide");
            }
          }
        
        });
      }
  // Filtro de busqueda

  
document.addEventListener("keyup", e=>{
  
  if(e.target.matches("#searchBox")){
    document.querySelectorAll(".pokemons").forEach(poke =>{
      if(poke.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
        poke.classList.remove("hide")
      } else {
        poke.classList.add("hide")
      }
      
    })
  }
  console.log(e.target.matches("#buscador"));

})

//Carrito de compras

//Funcion abrir y cerrar carrito

verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML = ""
  modalContainer.style.display = "flex"
 const modalHeader = document.createElement("div")
 modalHeader.className = "modalHeader"
 modalHeader.innerHTML = `
  <h1 class = "modalHeaderTitle">Carrito</h1>
 `
 modalContainer.append(modalHeader)

 const modalButton = document.createElement("h1")
 modalButton.innerText = "X"
 modalButton.className = "modalHeaderButton"

 modalButton.addEventListener("click", () => {
  modalContainer.style.display = "none";
 });

 modalHeader.append(modalButton)


 carrito.forEach((product) => {
 let carritoContent = document.createElement("div")
 carritoContent.className = "modalContent"
 carritoContent.innerHTML = `
  <img src= "${product.img}">
  <h3 class="nombreCarrito">${product.nombre}</h3>
  <p class="precioCarrito">$${product.precio}</p>
 `
  modalContainer.append(carritoContent)
})

  const total = carrito.reduce((acc, el) => acc + el.precio, 0)
  const totalBuying = document.createElement("div")
  totalBuying.className = "totalContent"
  totalBuying.innerHTML = `Total a pagar: $${total}`
  modalContainer.append(totalBuying)
})







