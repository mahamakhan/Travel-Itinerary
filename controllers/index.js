
const { Wishlist, Destinations } = require('../models');



 const getPosts = async (req, res) => { 
    try {
        const destinations = await Destinations.find();
                
        res.status(200).json(destinations);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Destinations.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const createPost = async (req, res) => {
    const { city, country,departure,returndate,people,images, wishlist_id } = req.body;

    const newDestinations = new Destinations({  city, country,departure,returndate,people,images, wishlist_id })

    try {
        await newDestinations.save();

        res.status(201).json(newDestinations );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

 const updatePost = async (req, res) => {
    const { id } = req.params;
    const { city, country,departure,returndate,people,images, wishlist_id} = req.body;
    
    // if (!ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { city, country,departure,returndate,people,images, wishlist_id:id };

    await Destinations.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

 const deletePost = async (req, res) => {
    const { id } = req.params;

    // if (!ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Destinations.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}



module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost

}