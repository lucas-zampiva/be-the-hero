const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar um informação do Back-end
 * POS: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação, )7
  * Route Params: Parâmetros utilizados para identificar recursos '/users/:id'
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
  */

/**
 * app tipo postman para as requisições INSOMNIA
 */

/**
 * Banco: SQLite
 * Query builder
 */

app.listen(3333);