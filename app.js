let pokemons = [
        {
            nombre: "Bulbasaur",
            id: 0,
            caracteristica: "Starter",
            precio: "$1.000",
            image:"./pokemon/bulbasaur.png",
            tipo: "./pokemon/Planta.png"
        },
        {
            nombre: "Squirtle",
            id: 1,
            caracteristica: "Starter",
            precio: "$1.000",
            image:"./pokemon/squirtle.png",
            tipo: "./pokemon/Agua.png"
        },
        {
            nombre: "Charmander",
            id: 2,
            caracteristica: "Starter",
            precio: "$1.000",
            image:"./pokemon/charmander.png",
            tipo: "./pokemon/Fuego.png"
        },
        {
            nombre: "Treecko",
            id: 3,
            caracteristica: "Starter",
            precio: "$2.000",
            image:"./pokemon/treecko.png",
            tipo: "./pokemon/Planta.png"
        },
        {
            nombre: "Mudkip",
            id: 4,
            caracteristica: "Starter",
            precio: "$1.700",
            image:"./pokemon/mudkip.png",
            tipo:"./pokemon/Agua.png"
        },
        {
            nombre: "Torchic",
            id: 5,
            caracteristica: "Starter",
            precio: "$1.500",
            image:"./pokemon/torchic.png",
            tipo:"./pokemon/Fuego.png"
        },
        {
            nombre: "Kyogre",
            id: 6,
            caracteristica: "Legendario",
            precio: "$19.000",
            image:"./pokemon/kyogre.png",
            tipo:"./pokemon/Agua.png"
        },
        {
            nombre: "Zekrom",
            id: 7,
            caracteristica: "Legendario",
            precio: "$25.000",
            image:"./pokemon/zekrom.png",
            tipo:"./pokemon/Electrico.png"
        },
        {
            nombre: "Darkrai",
            id: 8,
            caracteristica: "Singular",
            precio: "$50.000",
            image:"./pokemon/darkrai.png",
            tipo:"./pokemon/Siniestro.png"
        },
    
        
    ]
    
    
    // Creacion de Pokemons
    const divGlobal = document.querySelector(".pokemonBox")
    
    const fragment = document.createDocumentFragment()
    
    pokemons.forEach(item => {
        const container = document.createElement("div")
        const name = document.createElement("h3")
        const price = document.createElement("p")
        const img = document.createElement("img")
        const type = document.createElement("img")

        price.textContent = "Precio:" + " " + item.precio
        name.textContent = item.nombre
        img.src = item.image
        type.src = item.tipo
        
        container.appendChild(img)
        container.appendChild(type)
        container.appendChild(name)
        container.appendChild(price)
        
        container.className = "pokemons"
        img.className = "imgPokemon"
        type.className = "type"
        
        fragment.appendChild(container)
        
    }) 
    divGlobal.appendChild(fragment)

    // Funciones de botones

    const lowPrice = document.getElementById("lowPrice")


    pokemons.forEach(item =>{
        lowPrice.addEventListener("click", ()=>{
            if(item.precio !== "$1.000" ) {
                remove()
            } 
        })
        
    })
      
 

    
