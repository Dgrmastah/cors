const express = require('express');
const axios = require('axios');  
const cors = require('cors');


const app = express();

app.use(cors())

app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send("Error al obtener los personajes");
    }
});

app.get('/characters/:name', async (req, res) => {  
    const { name } = req.params;
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
        if (response.data.results) {
            res.json(response.data.results[0]);
        } else {
            res.status(404).send('Personaje no encontrado');
        }
    } catch (error) {
        res.status(500).send('Error al buscar el personaje');
    }
});



app.get('/', (req, res) => {
    res.send('¡Servidor de Express funcionando!');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
