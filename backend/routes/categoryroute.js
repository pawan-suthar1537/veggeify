

const express = require('express');
const Category = require('../model/categorymodel');
const Item = require('../model/itemmodel');
const router = express.Router();


router.get("/:category", async (req, res) => {
    const { category } = req.params;
    console.log(category);

    try {
        // Find the category document based on the category name
        const categoryData = await Category.findOne({ name: category });

        // console.log(categoryData)

        if (!categoryData) {
            return res.status(404).json({
                status: "error",
                message: "Category not found",
            });
        }

        // Find items based on menuId from the found category
        const items = await Item.find({ menuId: categoryData.menuId });

        // console.log(items)

        res.status(200).json(items);

    } catch (error) {
        res.status(400).json({
            status: "error",
            message: "Bad Request: Unable to fetch category",
            error: error.message,
        });
    }
});






module.exports = router;
