import { App } from "./app";

//inicio del servidor
async function main() {
    //pasamos el puerto que desamos usar a la instancia 
    const app = new App(3000);
    await app.listen();
}

main();