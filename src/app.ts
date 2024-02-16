import express from "express";
import cors from 'cors';

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req,res) =>{
    res.json('olá mundo');
})

server.listen(port, () => {
    console.log(`Servidor estpa escutando no endereço http://localhost:${port}`);
})

import { Habitat } from "./model/Habitat";
import { Atracao } from "./model/Atracao";
import { Zoologico } from "./model/Zoologico";

// Cria um habitat quando uma solicitação POST é feita para '/habitat'
server.post('/habitat', (req, res) => {
    const { nome, animais } = req.body; // 🏠🦁 Obtém o nome e os animais do corpo da solicitação
    const habitat = new Habitat(nome, animais); // 🏞️✨ Cria um novo habitat com os dados recebidos
    console.log(habitat); // 🤩 Exibe o habitat criado no console
    res.status(200).json('Habitat criado'); // 🎉 Retorna uma resposta de sucesso
});

// Cria uma atração quando uma solicitação POST é feita para '/atracao'
server.post('/atracao', (req, res) => {
    const { nome, habitat } = req.body; // 🎪🐘 Obtém o nome e o habitat do corpo da solicitação
    const atracao = new Atracao(nome, habitat); // 🎠✨ Cria uma nova atração com os dados recebidos
    console.log(atracao); // 🤹‍♂️ Exibe a atração criada no console
    res.status(200).json('Atração criada'); // 🎈 Retorna uma resposta de sucesso
});

// Cria um zoológico quando uma solicitação POST é feita para '/zoologico'
server.post('/zoologico', (req, res) => {
    const { nome, atracao } = req.body; // 🏰🦒 Obtém o nome e a atração do corpo da solicitação
    const zoo = new Zoologico(nome, atracao); // 🐼🌟 Cria um novo zoológico com os dados recebidos
    console.log(zoo); // 🐾 Exibe o zoológico criado no console
    res.status(200).json('Zoológico criado'); // 🏆 Retorna uma resposta de sucesso
});
