// index.js (en la raíz de tu app)
const fs = require('fs');
const path = require('path');

const logStream = fs.createWriteStream(path.join(__dirname, 'startup.log'), { flags: 'a' });
logStream.write(`[${new Date().toISOString()}] Iniciando loader...\n`);

try {
    // Captura todos los console.log y console.error
    const origLog = console.log;
    console.log = (...args) => {
        logStream.write(`[LOG] ${args.join(' ')}\n`);
        origLog(...args);
    };

    const origError = console.error;
    console.error = (...args) => {
        logStream.write(`[ERROR] ${args.join(' ')}\n`);
        origError(...args);
    };

    // Requerimos y ejecutamos el main de Nest
    const mainPath = path.join(__dirname, 'dist', 'main.js');
    require(mainPath);

    logStream.write(`[${new Date().toISOString()}] Loader terminó de cargar main.js\n`);
} catch (err) {
    logStream.write(`[${new Date().toISOString()}] ERROR al levantar la app: ${err}\n`);
}
