const {Router}=require('express')

const postController= require('../controllers')

const router = Router();

router.get('/', postController.getPosts);
router.post('/', postController.createPost);
router.get('/:id', postController.getPost);
router.patch('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);


module.exports=router;