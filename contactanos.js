document.addEventListener('DOMContentLoaded', function() {
    var nombresInput = document.getElementById('nombres');
    var apellidosInput = document.getElementById('apellidos');
    var nombreApoderadoInput = document.getElementById('nombre_apoderado');
    var telefonoInput = document.getElementById('telefono');
    var numeroDocumentoInput = document.getElementById('numero-documento');

    function validateLettersOnly(input) {
        input.value = input.value.replace(/[^A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]/g, '');
    }

    function validateNumbersOnly(input) {
        input.value = input.value.replace(/\D/g, ''); // Filtra solo dígitos
    }

    nombresInput.addEventListener('input', function() {
        validateLettersOnly(this);
    });

    apellidosInput.addEventListener('input', function() {
        validateLettersOnly(this);
    });

    nombreApoderadoInput.addEventListener('input', function() {
        validateLettersOnly(this);
    });

    telefonoInput.addEventListener('input', function() {
        validateNumbersOnly(this);
    });

    numeroDocumentoInput.addEventListener('input', function() {
        validateNumbersOnly(this);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.form-register').classList.add('show');

    // Agregar evento de envío de formulario
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        // Validar campos antes de enviar
        var isValid = true;
        var formElements = this.elements;

        for (var i = 0; i < formElements.length; i++) {
            if (formElements[i].hasAttribute('required') && formElements[i].value.trim() === '') {
                isValid = false;
                var fieldName = formElements[i].name;
                document.getElementById('error-' + fieldName).innerText = 'Por favor, completa este campo.';
            }
        }

        // Validar sexo
        var sexoInput = document.getElementById('sexo');
        var sexoSelected = sexoInput.value !== '';

        if (!sexoSelected) {
            isValid = false;
            document.getElementById('error-sexo').innerText = 'Por favor, selecciona tu sexo.';
        } else {
            document.getElementById('error-sexo').innerText = '';
        }

        if (!isValid) {
            event.preventDefault(); // Evitar envío del formulario si no es válido
        }
    });

    // Agregar eventos para limpiar los mensajes de error cuando el usuario empiece a escribir en los campos
    var formInputs = document.querySelectorAll('.controls');
    formInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            var fieldName = this.name;
            document.getElementById('error-' + fieldName).innerText = '';
        });
    });
});
