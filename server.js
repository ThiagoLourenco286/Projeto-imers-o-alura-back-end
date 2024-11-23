import express from 'express';
import router from './src/router/postsRouter.js';
const app = express();
app.use(express.static("uploads"))
router(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});