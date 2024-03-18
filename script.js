// Array para controlar stock
let stock = [];

// Función para agregar un producto al stock
function agregarProducto(nombre, cantidad) {
    const productoExistente = stock.find(producto => producto.nombre === nombre);
    if (productoExistente) {
    productoExistente.cantidad += cantidad;
    } else {
    stock.push({ nombre, cantidad });
    }
}

// Función para vender un producto del stock
function venderProducto(nombre, cantidad) {
    const productoExistente = stock.find(producto => producto.nombre === nombre);
    if (productoExistente && productoExistente.cantidad >= cantidad) {
        productoExistente.cantidad -= cantidad;
        if (productoExistente.cantidad === 0) {
            stock = stock.filter(producto => producto.nombre !== nombre);
        }
        return true;
    }
    return false; 
}

// Función para mostrar el stock actual en una tabla
function mostrarStock() {
    let tablaStock = "Stock actual:\n\n";
    if (stock.length === 0) {
        tablaStock += "El stock está vacío.";
    } else {
        tablaStock += "Producto\tCantidad\n";
        stock.forEach(producto => {
            tablaStock += `${producto.nombre}\t\t${producto.cantidad}\n`;
        });
    }
    alert(tablaStock);
}

// Función principal del simulador de gestión de stock
function gestionarStock() {
    let continuarGestionando = true;

    while (continuarGestionando) {
        const opcion = parseInt(prompt(
        "Por favor, elige una opción:\n" +
        "1. Agregar producto al stock.\n" +
        "2. Vender producto.\n" +
        "3. Mostrar stock actual.\n" +
        "4. Salir."
    ));

        switch (opcion) {
        case 1:
            const nombreProducto = prompt("Introduce el nombre del producto:");
            const cantidadProducto = parseInt(prompt("Introduce la cantidad del producto:"));
            agregarProducto(nombreProducto, cantidadProducto);
            break;
        case 2:
            const nombreProductoVendido = prompt("Introduce el nombre del producto a vender:");
            const cantidadProductoVendido = parseInt(prompt("Introduce la cantidad del producto a vender:"));
            if (venderProducto(nombreProductoVendido, cantidadProductoVendido)) {
                alert(`Venta de ${cantidadProductoVendido} ${nombreProductoVendido} realizada con éxito.`);
            } else {
                alert("No hay suficiente cantidad en stock para realizar la venta.");
            }
            break;
        case 3:
            mostrarStock();
            break;
        case 4:
            continuarGestionando = false;
            alert("Gracias por usar el simulador de gestión de stock.");
            break;
        default:
            alert("Opción no válida. Por favor, selecciona una opción válida.");
            break;
        }
    }
}

gestionarStock();