// const express = require('express');
// const categoryRouter = express.Router();
// ou
const categoryRouter = require('express').Router();

categoryRouter.get('/', (req, res) => {
console.log('Liste de toutes les catégories');
res.sendStatus(501); //Erreur  => Fonctionnalité pas encore implémentée.

})

categoryRouter.get('/:id', (req,res) => {
console.log('recupération de la catégorie d ont l id est : ' + req.params.id);
res.sendStatus(501);
})


categoryRouter.post('/', (req,res) => {
console.log('envoi d une nouvelle catégorie');
res.sendStatus(501);
})

categoryRouter.put('/:id', (req,res) => {
console.log('Modification de la catégorie dont l id est : ' + req.params.id);
res.sendStatus(501);
})

categoryRouter.delete('/:id', (req,res) => {
console.log('Suppression de la catégorie : ' + req.params.id);
res.sendStatus(501);
})








module.exports = categoryRouter;
