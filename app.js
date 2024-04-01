const express =  require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hola, esta es tu aplicación express')
});

app.get('/clientes', (req, res) => {
    const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3'];
    res.json(clientes);
});

app.get('/productos', (req, res) => {
    const producto = ['Producto 1', 'Producto 2', 'Producto 3'];
    res.json(producto);
});

const PORT = 14200;
app.listen(PORT, () =>{
    console.log('Se esta ejecutando la aplicación')
});    



