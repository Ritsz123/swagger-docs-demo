const express = require('express');
const format = require('date-format');

const app = express();

const PORT = process.env.PORT || 4000;

//swagger related
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/', (req, res) => {
    res.status(200).send('<h1> hello world </h1>')
});

app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        userName: 'ritsz__',
        followers: 450,
        following: 500,
        date: format.asString('dd MM yyyy hh:mm:ss', new Date())
    }

    res.status(200).send(instaSocial);
});

app.get('/api/v1/facebook', (req, res) => {
    const fbSocial = {
        userName: 'ritszm',
        followers: 100,
        following: 5,
        date: format.asString('dd-MM-yyyy', new Date())
    }

    res.status(200).send(fbSocial);
});

app.get('/api/v1/linkedin', (req, res) => {
    const linkedinSocial = {
        userName: 'riteshkhadse',
        followers: 1000,
        following: 1500,
        date: format.asString('dd MM yyyy', new Date())
    }

    res.status(200).send(linkedinSocial);
});


app.get('/api/v1/:token', (req, res) => {
    console.log(req.params.token);
    res.status(200).json({ token: req.params.token });
});


app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));