const { blogsCollection } = require("../collection/collection");

const getBlogById = async (req, res) => {
    try {
        const result = await blogsCollection.findById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllBlogs = async (req, res) => {

    try {
        const result = await blogsCollection.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}


const newBlog = async (req, res) => {
    // console.log(newData)
    try {
        const insertPost = await blogsCollection.insertMany(req.body);
        res.status(200).json(insertPost)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const increaseView = async (req, res) => {
    // console.log("req.body" , req.params.id)
    try {
        const views = await blogsCollection.findByIdAndUpdate(
            { _id: req.params.id },
            { $inc: { views: 1 } },
            { new: true }
        );
        
        res.status(200).json(views)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    getAllBlogs, getBlogById, newBlog, increaseView
}