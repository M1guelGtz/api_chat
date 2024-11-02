const express = require('express');
const router = express.Router();
const ChatController = require('../controllers/usuarioChatController'); 


router.get('/', ChatController.getAllUsChat);
router.post('/', ChatController.createUsuarioChat);
router.get('/:id', ChatController.getUsChatById);
router.put('/:id', ChatController.updateUsChat);
router.delete('/:id', ChatController.deleteUsChat);

module.exports = router;
