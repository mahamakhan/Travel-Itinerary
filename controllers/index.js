
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
    

    const updatedPost = { city, country,departure,returndate,people,images, wishlist_id };

    await Destinations.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

 const deletePost = async (req, res) => {
    const { id } = req.params;

    await Destinations.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

const getWishlists = async (req, res) => {
   
    const wishlists = await Wishlist.find({})
     res.json(wishlists)
  
  }

  const getWishlist = async (req, res) => { 
    const { id } = req.params;

    try {
        const wishlist = await Wishlist.findById(id);
        
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createWishlist = async (req, res) => {
    const { name} = req.body;

    const newWishlist = new Wishlist({  name })

    try {
        await newWishlist.save();

        res.status(201).json(newWishlist );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


const deleteWishlist = async (req, res) => {
    
      const { id } = req.params
      await Wishlist.findByIdAndDelete(id)
      res.json({message: "deleted"})
   
  }

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getWishlists,
  getWishlist,
  createWishlist,
  deleteWishlist

}