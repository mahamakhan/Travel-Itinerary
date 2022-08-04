const {Router}=require('express')

const postController= require('../controllers')

const router = Router();

router.get('/', postController.getPosts);
router.post('/wishlist', postController.createPost);
router.get('/wishlists', postController.getWishlists)

router.get('/:id', postController.getPost);
router.get('/wishlists/:id', postController.getWishlist)
router.delete('/wishlists/:id', postController.deleteWishlist)

router.post('/newwishlist', postController.createWishlist)
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);



module.exports=router;