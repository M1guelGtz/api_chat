const UsChat = require('../models/usuario_has_chat');

exports.getAllUsChat = async (req, res) => {
    try {
        const uschat = await UsChat.findAll();
        res.json(uschat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUsChatById = async (req, res) => {
    try {
        const uschat = await UsChat.findByPk(req.params.id);
        if (uschat) {
            res.json(uschat);
        } else {
            res.status(404).json({ error: "Chat no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createUsuarioChat = async (req, res) => {
    try {
        const { Usuario_idUsuario, Chat_idChat } = req.body; // Obtiene los parámetros necesarios
        const uschat = await UsChat.create({ Usuario_idUsuario, Chat_idChat });
        res.status(201).json(uschat);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};


exports.updateUsChat = async (req, res) => {
    try {
        const updated = await UsChat.update(req.body, { where: { Chat_idChat: req.params.id } });
        if (updated) {
            const updatedChat = await UsChat.findByPk(req.params.id);
            res.json(updatedChat);
        } else {
            res.status(404).json({ error: "Chat no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUsChat = async (req, res) => {
    try {
        const deleted = await UsChat.destroy({ where: { Chat_idChat: req.params.id } });
        if (deleted) {
            res.json({ message: "Chat eliminado" });
        } else {
            res.status(404).json({ error: "Chat no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
