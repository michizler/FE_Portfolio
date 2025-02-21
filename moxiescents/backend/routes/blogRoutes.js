import express from "express";
import { BlogPost } from "../models/blogModel.js";

const router = express.Router();

// Create new blog post
router.post("/", async (req, res) => {
  try {
    const { title, publishDate, description, image } = req.body;

    if (!title || !publishDate || !description || !image) {
      return res.status(400).json({
        message:
          "All fields are required (title, publishDate, description, image)",
      });
    }

    const newBlog = await BlogPost.create({
      title,
      publishDate,
      description,
      image,
    });
    return res.status(201).json(newBlog);
  } catch (error) {
    console.error("POST /api/blogs Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get all blog posts
router.get("/", async (req, res) => {
  try {
    let query = {};
    let sort = {};

    // Check if sorting parameters are provided
    if (req.query.sortBy && req.query.order) {
      const { sortBy, order } = req.query;
      const sortOrder = order === "desc" ? -1 : 1;
      sort[sortBy] = sortOrder;
    }

    // Fetch and sort blogs
    const blogs = await BlogPost.find(query).sort(sort);

    // For Frontend alignment
    return res.status(200).json({ count: blogs.length, data: blogs });
  } catch (error) {
    console.error("GET /api/blogs Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get single blog post
router.get("/:id", async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json(blog);
  } catch (error) {
    console.error("GET /api/blogs/:id Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Update a blog post
router.put("/:id", async (req, res) => {
  try {
    const { title, publishDate, description, image } = req.body;

    if (!title || !publishDate || !description || !image) {
      return res.status(400).json({
        message:
          "All fields are required (title, publishDate, description, image)",
      });
    }

    const updatedBlog = await BlogPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res
      .status(200)
      .json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.error("PUT /api/blogs/:id Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Delete a blog post
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await BlogPost.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/blogs/:id Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
