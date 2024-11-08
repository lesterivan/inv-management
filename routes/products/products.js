import { Router } from "express"
import Product from "../../models/Product.js"
import authenticateToken from "../../middlewares/authentication.js"
import authorizeAdmin from "../../middlewares/authorization.js"

const router = Router()

// Get all products (authenticated user)
router.get("/", authenticateToken, async (req, res) => {
  try {
    const products = await Product.find().populate("category supplier")
    res.status(200).json(products)
  } catch (e) {
    console.error("Error fetching products:", e)
    res.status(500).json({ error: e })
  }
})

// Get product by id (authenticated user)
router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category supplier")
    if (!product) return res.status(404).json({ error: "Product not found" })
    res.status(200).json(product)
  } catch (error) {
    console.error("Error fetching product:", error)
    res.status(500).json({ error: error.message })
  }
})

// Create new product (admin only)
router.post("/", authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const product = new Product(req.body)
    await product.save()
    res.status(201).json(product)
  } catch (e) {
    console.error("Error creating product:", e)
    res.status(400).json({ error: e.errors })
  }
})

// Update product by id (admin only)
router.put("/:id", authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!product) return res.status(404).json({ error: "Product not found" })
    res.status(200).json(product)
  } catch (error) {
    console.error("Error updating product:", error)
    res.status(500).json({ error: error.message })
  }
})

// Delete product by id (admin only)
router.delete("/:id", authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
    if (!product) return res.status(404).json({ error: "Product not found" })
    res.status(200).json({ message: "Product deleted successfully" })
  } catch (error) {
    console.error("Error deleting product:", error)
    res.status(500).json({ error: error.message })
  }
})

export default router