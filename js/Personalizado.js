document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('formContainer');

    // Función para cargar el formulario según el tipo de producto seleccionado
    function cargarFormulario(tipoProducto) {
        formContainer.innerHTML = ''; // Limpiar el contenedor antes de cargar el formulario nuevo

        const form = document.createElement('form');
        form.id = 'personalizadoForm';
        form.innerHTML = `
            <input type="hidden" id="tipoProducto" name="tipoProducto" value="${tipoProducto}">
            <div>
                <label for="cantidad">Selecciona la cantidad:</label>
                <input type="number" id="cantidad" name="cantidad" min="1" required>
            </div>
            <div>
                <label for="tipoTrabajo">Tipo de trabajo:</label>
                <select name="tipoTrabajo" id="tipoTrabajo" required>
                    <option value="">Seleccionar...</option>
                    <option value="vinilo">Frase en vinilo</option>
                    <option value="imagen">Imagen</option>
                    <option value="personalizado">Diseño personalizado</option>
                </select>
            </div>
            <div id="viniloOptions" style="display: none;">
                <label for="colorVinilo">Color de vinilo:</label>
                <input type="color" id="colorVinilo" name="colorVinilo"><br>
                <label for="tipoLetra">Tipo de letra:</label>
                <select name="tipoLetra" id="tipoLetra">
                    <option value="Arial">Arial</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Times New Roman">Times New Roman</option>
                </select><br>
                <label for="mensaje">Mensaje:</label>
                <input type="text" id="mensaje" name="mensaje">
            </div>
            <div id="imagenInput" style="display: none;">
                <label for="imagenFile">Sube una imagen:</label>
                <input type="file" id="imagenFile" name="imagenFile">
            </div>
            <div id="personalizadoOptions" style="display: none;">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required><br>
                <label for="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" required><br>
                <label for="correo">Correo electrónico:</label>
                <input type="email" id="correo" name="correo" required><br>
                <label for="celular">Celular:</label>
                <input type="tel" id="celular" name="celular" pattern="[0-9]{9,12}" required><br>
                <label for="articuloInteres">Artículo de interés:</label>
                <input type="text" id="articuloInteres" name="articuloInteres" value="${tipoProducto}" readonly><br>
            </div>
            <button type="submit">Guardar pedido</button>
        `;

        // Mostrar u ocultar campos según el tipo de trabajo seleccionado
        const tipoTrabajoSelect = form.querySelector('#tipoTrabajo');
        const viniloOptions = form.querySelector('#viniloOptions');
        const imagenInput = form.querySelector('#imagenInput');
        const personalizadoOptions = form.querySelector('#personalizadoOptions');

        tipoTrabajoSelect.addEventListener('change', function() {
            if (this.value === 'vinilo') {
                viniloOptions.style.display = 'block';
                imagenInput.style.display = 'none';
                personalizadoOptions.style.display = 'none';
            } else if (this.value === 'imagen') {
                imagenInput.style.display = 'block';
                viniloOptions.style.display = 'none';
                personalizadoOptions.style.display = 'none';
            } else if (this.value === 'personalizado') {
                personalizadoOptions.style.display = 'block';
                viniloOptions.style.display = 'none';
                imagenInput.style.display = 'none';
            } else {
                viniloOptions.style.display = 'none';
                imagenInput.style.display = 'none';
                personalizadoOptions.style.display = 'none';
            }
        });

        // Manejar envío del formulario
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // Aquí puedes añadir la lógica para enviar el formulario o guardar los datos
            alert('¡Tu pedido ha sido guardado! Te contactaremos a la brevedad.');
        });

        formContainer.appendChild(form);
    }

    // Preguntar por el tipo de producto y cargar el formulario correspondiente
    const tipoProductoSelect = document.createElement('select');
    tipoProductoSelect.innerHTML = `
        <option value="">Selecciona el tipo de producto...</option>
        <option value="cojin">Cojín</option>
        <option value="carcasa">Carcasa</option>
        <option value="polera">Polera</option>
        <option value="bolsaTote">Bolsa Tote</option>
    `;
    tipoProductoSelect.addEventListener('change', function() {
        if (this.value) {
            cargarFormulario(this.value.toLowerCase());
        }
    });

    formContainer.appendChild(tipoProductoSelect);
});
