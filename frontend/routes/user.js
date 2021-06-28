const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController')

//create, find, update, delete
router.route('/').get(userController.view).post(userController.find)
router.route('/adduser').get(userController.adduser).post(userController.create)
router.route('/edituser/:id').get(userController.edituser).post(userController.updateuser)
router.route('/:id').get(userController.deleteuser)
router.route('/viewuser/:id').get(userController.viewuser)

module.exports = router
