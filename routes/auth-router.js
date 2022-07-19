// const express = require('express');
// const authRouter = express.Router();
// ou
const authRouter = require('express').Router();



authRouter.post('/login', (req,res) => {
console.log('connexion d un utilisateur');
res.sendStatus(501);
})

authRouter.post('/register', (req,res) => {
console.log('creation d un nouvel utilisateur');
res.sendStatus(501);
})



module.exports = authRouter;


