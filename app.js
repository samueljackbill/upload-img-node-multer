// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express');

// Chamar a função express
const app = express();

// Incluir o middlewares de upload
const uploadImgUser = require('./middlewares/uploadImage');

// Criar a rota upload
app.post("/upload-image", uploadImgUser.single('image'), async (req, res) => {

    if(req.file){
        return res.json({
            erro: false,
            message: "Upload realizado com sucesso!"
        });
    }

    return res.status(400).json({
        erro: true,
        message: "Erro: Upload não realizado com sucesso!"
    });
});

// Iniciar o servidor na porta 8080, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});