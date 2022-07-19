// const express = require('express');
// const taskRouter = express.Router();
// ou
const taskRouter = require('express').Router();

taskRouter.get('/', (req, res) => {
console.log('Liste de toutes les taches');
res.sendStatus(501); //Erreur  => Fonctionnalité pas encore implémentée.

})

taskRouter.get('/:id', (req,res) => {
console.log('recupération de la tache d ont l id est : ' + req.params.id);
res.sendStatus(501);
})

taskRouter.get('/:categoryname', (req,res) => {
console.log('recupération de la tache par catégorie ' + req.params.id);
res.sendStatus(501);
})

taskRouter.get('/:username', (req,res) => {
console.log('recupération de la tache par utilisateur ' + req.params.id);
res.sendStatus(501);
})


taskRouter.post('/', (req,res) => {
console.log('envoi d une nouvelle tache');
res.sendStatus(501);
})

taskRouter.put('/:id', (req,res) => {
console.log('Modification de la tache dont l id est : ' + req.params.id);
res.sendStatus(501);
})

taskRouter.delete('/:id', (req,res) => {
console.log('Suppression de la catégorie : ' + req.params.id);
res.sendStatus(501);
})








module.exports = taskRouter;