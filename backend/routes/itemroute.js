const express = require("express");
const router = express.Router();
const Item = require("../model/itemmodel");

router.get("/", async (req, res) => {
  try {
    const items = await Item.find().sort({createdAt: -1});
    res.status(200).json({
      status: "success",
      data: items,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Server Error: Unable to retrieve items",
      error: err.message,
    });
  }
});

router.post("/", async (req, res) => {
  const item = new Item(req.body);
  try {
    const newItem = await item.save();
    res.status(201).json({
      status: "success",
      message: "Item created successfully",
      data: newItem,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Bad Request: Unable to create item",
      error: err.message,
    });
  }
});

router.get('/', async (req, res) => {
    try {
      const { q } = req.query;
  
      let items;
  
      if (q) {
        // Search items by name using regex
        items = await Item.find({ name: { $regex: q, $options: 'i' } });
      } else {
        return res.status(400).json({
          status: 'error',
          message: 'Bad Request: Query parameter "q" is required',
        });
      }
  
      res.status(200).json({
        status: 'success',
        data: items,
      });
    } catch (error) {
      res.status(400).json({
        status: 'error',
        message: 'Bad Request: Unable to retrieve items',
        error: error.message,
      });
    }
  });

//get one by id
router.get('/:id', async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      if (!item) {
        return res.status(404).json({
          status: 'error',
          message: 'Not Found: Item not found',
        });
      }
      res.status(200).json({
        status: 'success',
        data: item,
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Server Error: Unable to retrieve item',
        error: err.message,
      });
    }
    
})

router.patch('/:id', async (req, res) => {
    try {
      const updatedItem = await Item.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedItem) {
        return res.status(404).json({
          status: 'error',
          message: 'Not Found: Item not found',
        });
      }
      res.status(200).json({
        status: 'success',
        message: 'Item updated successfully',
        data: updatedItem,
      });
    } catch (err) {
      res.status(400).json({
        status: 'error',
        message: 'Bad Request: Unable to update item',
        error: err.message,
      });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const item = await Item.findByIdAndDelete(req.params.id);
      if (item == null) {
        return res.status(404).json({
          status: 'error',
          message: 'Not Found: Item not found',
        });
      }
      res.status(200).json({
        status: 'success',
        message: 'Item deleted successfully',
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Server Error: Unable to delete item',
        error: err.message,
      });
    }
  });

module.exports = router;
