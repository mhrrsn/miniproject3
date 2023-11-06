const express = require("express");
const router = express.Router();
const Controllers = require('../controllers');

router.get('/', (req,res) => {
    Controllers.postController.getPost(res);
});

router.post('/', (req,res) => {
    Controllers.postController.createPost(req.body, res);
});


router.get('/:id', (req,res) => {
    Controllers.postController.getPostById(req.params.id, res);
});

router.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req.params.id, req.body, res);
});

router.delete('/:id', (req,res) => {
    Controllers.postController.deletePost(req.params.id, res);
});

module.exports = router;
