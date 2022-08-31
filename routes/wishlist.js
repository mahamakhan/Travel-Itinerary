const {Router}=require('express')

const postController= require('../controllers')

const router = Router();


router.get('/wishlists', postController.getWishlists)

router.get('/wishlists/:id', postController.getWishlist)
router.delete('/wishlists/:id', postController.deleteWishlist)

router.post('/newwishlist', postController.createWishlist)


module.exports=router;