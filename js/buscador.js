function searchHandler(event) {
    if (event.keyCode === 13) { // Check if Enter key is pressed
        var searchInput = document.getElementById("icon-search--input").value.toLowerCase();
        
        switch (searchInput) {
            case "poleras":
                window.location.href = "Poleras.html"; // Aquí reemplaza "poleras.html" con la ruta correcta de tu vista
                break;
            case "carcasas":
                window.location.href = "Carcasas.html";
                break;
            case "cojines":
                window.location.href = "Cojines.html";
                break;
            case "carrito":
                window.location.href = "carrito.html";
                break;
            case "informacion":
                window.location.href = "Informaciones.html";
                break;
            case "inicio":
                window.location.href = "Index.html";
                break;
            case "iniciar sesion":
                window.location.href = "Registro.html";
                break;
            case "cuenta":
                window.location.href = "Registro.html";
                break;
            case "personalizar":
                window.location.href = "Personalizado.html";
                break;      
            case "bolsas":
                window.location.href = "BolsaTote.html";
                break;         
            default:
                alert("Error: no se pudo encontrar");
        }
    }
}