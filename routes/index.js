const {Router}=require('express').Router();

const { request } = require('express');
const WishlistRoutes= require('./wishlist')
const DestinationRoutes= require('./destination');
const router = require('./wishlist');

router.use('/wish', WishlistRoutes)
router.use('/des', DestinationRoutes)


module.exports=router;

