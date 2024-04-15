const formatEquation = (userEquation) => {
    // Dividir la ecuación en partes separadas por operadores
    const parts = userEquation.split(/([\/\*\+\-\^])/);

    // Inicializar una cadena para la ecuación formateada
    let formattedEquation = '';

    // Iterar sobre las partes de la ecuación
    parts.forEach((part, index) => {
        // Agregar un espacio antes y después de los operadores
        if (part.match(/[\/\*\+\-]/)) {
            formattedEquation += ' ' + part + ' ';
        } else {
            // Si es un número o una variable, no necesita espacios adicionales
            formattedEquation += part;
        }
    });

    // Reemplazar '^' con superíndices
    formattedEquation = formattedEquation.replace(/\^(\d+)/g, '<sup>$1</sup>');
    const regex = /log\((\d+),\s*([^)]+)\)/g;
    formattedEquation = formattedEquation.replace(regex, function (match, base, valor) {
        return "log<sub>" + base + "</sub>(" + valor + ")";
    });

    return formattedEquation;
}
export default formatEquation