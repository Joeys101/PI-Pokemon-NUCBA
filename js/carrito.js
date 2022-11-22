
const pintarCarrito = () => {
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
    <div class ="nombrePrecio">
    <h3 class="nombreCarrito">${product.nombre}</h3>
    <p class="precioCarrito">$${product.precio}</p>
    </div>
    <span class="restar"> - </span>
    <p class="Cantidad">Cantidad: ${product.cantidad}</p>
    <span class="sumar"> + </span>
    <p> Total: ${product.cantidad * product.precio}</p>
    <span class="deleteProduct">❌</span>
   `
    modalContainer.append(carritoContent)

    let restar = carritoContent.querySelector(".restar")

    restar.addEventListener("click", () => {
      if(product.cantidad != 1){
      product.cantidad--
    }
    saveLocal()
    pintarCarrito()
    })


    let sumar = carritoContent.querySelector(".sumar")

    sumar.addEventListener("click", () => {
      product.cantidad++
      saveLocal()
      pintarCarrito()
    })

    let eliminar = carritoContent.querySelector(".deleteProduct")

    eliminar.addEventListener("click", () => {
      eliminarProducto(product.id)
    })
  })
  
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalBuying = document.createElement("div")
    const comprar = document.createElement("button")



    if(carrito.length === 0){
      totalBuying.innerHTML = "Gracias por elegirnos!"
      totalBuying.className = "carritoVacio"
      comprar.style.display = "none"
    }else {
    totalBuying.className = "totalContent"
    totalBuying.innerHTML = `Total a pagar: $${total}`
    comprar.className = "compraTotal"
    comprar.innerHTML = "Comprar"
    comprar.addEventListener("click", () => {
      totalBuying.innerHTML = "Gracias por tu compra"
      comprar.style.display = "none"
      carrito.length = 0
      carritoCounter()
      pintarCarrito()
      saveLocal()
      })
  }


  modalContainer.append(totalBuying)
  modalContainer.append(comprar)

  }

  verCarrito.addEventListener("click", pintarCarrito)

  const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
      return carritoId !== foundId;
    });
    carritoCounter()
    saveLocal()
    pintarCarrito()
  }
 


  const cerrarCarrito = () => {   
    modalContainer.style.display = "none"
  }
  const carritoCounter = () => {
    if(carrito.length == 0){
      cantidadCarrito.style.display = "none"
    } else {
    cantidadCarrito.style.display = "block"
    
    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
  }
  }

  carritoCounter()