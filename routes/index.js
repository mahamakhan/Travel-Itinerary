const {Router}=require('express')

const postController= require('../controllers')

const router = Router();

router.get('/', postController.getPosts);
// router.post('/', createPost);
router.get('/:id', postController.getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);


module.exports=router;