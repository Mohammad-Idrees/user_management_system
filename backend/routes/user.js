const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/').get(userController.view).post(userController.create)
router.route('/search/:id').get(userController.search)
router.route('/update/:id').post(userController.update)
router.route('/delete/:id').delete(userController.delete)

module.exports = router