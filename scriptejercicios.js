const propinas = [
    { porcentaje: 5, descripcion: 'Servicio insatisfactorio, donde hubo errores o descuidos evidentes por parte del personal que afectaron negativamente la experiencia del cliente.' },
    { porcentaje: 10, descripcion: 'Servicio que dejó algo que desear, donde el personal pudo haber sido más atento o eficiente.' },
    { porcentaje: 15, descripcion: 'Servicio promedio, donde el personal realizó su trabajo de manera competente pero sin destacar en aspectos como la atención al cliente.' },
    { porcentaje: 20, descripcion: 'Servicio muy bueno, donde el personal fue amable y eficiente, y la experiencia general fue positiva.' },
    { porcentaje: 25, descripcion: 'Servicio excepcional que superó las expectativas, donde el personal fue extremadamente atento y servicial.' }
];

function calcularPropina(total, porcentaje) {
    return (total * porcentaje) / 100;
}

function mostrarResultado(propina, descripcion) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Propina: $${propina.toFixed(2)}</p>
        <p>Descripción: ${descripcion}</p>
    `;
}

function modoNocturno() {
    const body = document.body;
    const button = document.getElementById('botonModoNocturno');
    
    body.classList.toggle('modo-nocturno');
    button.classList.toggle('modo-nocturno');
}

function main() {
    const botonCalcular = document.getElementById('calcular');
    const botonModoNocturno = document.createElement('button');
    botonModoNocturno.id = 'botonModoNocturno';
    botonModoNocturno.textContent = 'Modo Nocturno';
    botonModoNocturno.addEventListener('click', modoNocturno);

    document.body.appendChild(botonModoNocturno);

    botonCalcular.addEventListener('click', function() {
        const total = parseFloat(document.getElementById('total').value);
        const porcentaje = parseFloat(document.getElementById('porcentaje').value);
        
        if (isNaN(total) || isNaN(porcentaje)) {
            alert('Por favor ingresa un valor válido');
            return;
        }

        const propina = calcularPropina(total, porcentaje);
        
        
        let descripcion = '';
        for (let i = 0; i < propinas.length; i++) {
            if (porcentaje === propinas[i].porcentaje) {
                descripcion = propinas[i].descripcion;
                break;
            }
        }

        mostrarResultado(propina, descripcion);
    });
}

document.addEventListener('DOMContentLoaded', main);


