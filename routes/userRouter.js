const express = require("express");
const UserModel = require('../models/user.js')
const userRouter = express.Router()

userRouter.get('/users', async (req, res) => {
   try {
      let users = await UserModel.find();
      res.render('main.twig', {
         users: users
      })
   } catch (err) {
      res.send(err);
   }
})

userRouter.get('/deleteUser/:id', async (req, res) => {
   try {
      await UserModel.deleteOne({ _id: req.params.id });
      res.redirect('/users')
   } catch (err) {
      console.log(err);
      res.send(err);
   }
})

userRouter.get('/addUser', async (req, res) => {
   try {
      res.render('adduserform.twig')
   } catch (err) {
      console.log(err);
      res.send(err);
   }
})

userRouter.post('/addUser', async (req, res) => {
   console.log(req.body);
   try {
      let user = new UserModel(req.body)
      user.save()
      res.redirect('/users')
   } catch (err) {
      console.log(err);
      res.send(err);
   }
})





module.exports = userRouter


