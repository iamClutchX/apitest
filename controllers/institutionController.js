const Institution = require('../models/Institution');

exports.getInstitutions = async (req, res) => {
    try {
        // Extract query parameters for filters
        let query = {...req.query};
        // Find institutions based on filters
        const institutions = await Institution.find(query);
        res.json(institutions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createInstitution = async (req, res) => {
    const newInstitution = new Institution(req.body);
    try {
        const institution = await newInstitution.save();
        res.status(201).json(institution);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getInstitution = async (req, res) => {
    try {
        const institution = await Institution.findById(req.params.id);
        if (institution == null) {
            return res.status(404).json({ message: 'Cannot find institution' });
        }
        res.json(institution);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

exports.updateInstitution = async (req, res) => {
    try {
        const institution = await Institution.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (institution == null) {
            return res.status(404).json({ message: 'Cannot find institution' });
        }
        res.json(institution);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

exports.deleteInstitution = async (req, res) => {
    try {
        const institution = await Institution.findByIdAndDelete(req.params.id);
        if (institution == null) {
            return res.status(404).json({ message: 'Cannot find institution' });
        }
        res.json({ message: 'Institution deleted' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
