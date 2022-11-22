const shopContent = document.getElementById("pokemonBox")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito =  JSON.parse(localStorage.getItem("carrito")) || [];
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

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === item.id)
        
        if(repeat){
          carrito.map((prod) => {
            if(prod.id === item.id){
              prod.cantidad++;
            }
          })
        } else {
          carrito.push({
            id : item.id,
            img : item.image,
            nombre : item.nombre,
            precio : item.precio,
            cantidad : item.cantidad,
          }) 
        }
        carritoCounter()
        saveLocal()
        cerrarCarrito()
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

//LocalStorage

const saveLocal = () => {

localStorage.setItem("carrito",JSON.stringify(carrito))
}

JSON.parse(localStorage.getItem("carrito"))





