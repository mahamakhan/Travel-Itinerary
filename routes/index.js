const {Router}=require('express')

const postController= require('../controllers')

const router = Router();

router.get('/', postController.getPosts);
router.post('/wishlist', postController.createPost);
router.get('/:id', postController.getPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.get('/wishlists', postController.getWishlists)
// router.get ('/wishlists/:id', postController.createWishlist)


module.exports=router;