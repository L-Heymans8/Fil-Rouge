const userRouter = require('express').Router();

userRouter.get('/', (req, res) => {
console.log('Liste de tous les users');
res.sendStatus(501); //Erreur  => Fonctionnalité pas encore implémentée.

})

userRouter.get('/:id', (req,res) => {
console.log('recupération de l utilisateur  d ont l id est : ' + req.params.id);
res.sendStatus(501);
})


// userRouter.post('/', (req,res) => {
// console.log('envoi d un  utilisateur');
// res.sendStatus(501);
// })

userRouter.put('/:id', (req,res) => {
console.log('Modification de l utilisateur dont l id est : ' + req.params.id);
res.sendStatus(501);
})

userRouter.delete('/:id', (req,res) => {
console.log('Suppression de l utilisateur : ' + req.params.id);
res.sendStatus(501);
})

module.exports = userRouter;