const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

import { NextFunction, Request, Response } from 'express';
import ProjectDependencies from '../clean/domain/config/projectdependencies';
import UserController from '../clean/framework/controller/users';


const projectDependencies = new ProjectDependencies()
const userController = UserController(projectDependencies)


app.get('/api/users', userController.getAllUsers)
app.post('/api/users', userController.createUser)


/** Error handling */
app.use((req : Request, res : Response, next : NextFunction) => {
  const error = new Error('Endpoint Not found');

  res.status(404).json({
      message: error.message
  });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

