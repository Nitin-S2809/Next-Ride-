const mapService = require('../Services/maps.service');
const { validationResult } = require('express-validator');
module.exports.getCoordinates = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinates(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({ error: 'Failed to fetch coordinates' });
    }
}
module.exports.getDistanceAndTime = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { origin, destination } = req.query;
        const result = await mapService.getDistanceAndTime(origin, destination);
        res.status(200).json(result);
    } catch (err) {
        console.error(err)
        res.status(404).json({ message: 'Failed to fetch distance and time' });
    }
}
module.exports.getSuggestions = async (req, res) => {
    try {
        const errors = validationResult(req);   
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { input } = req.query;
        const suggestions = await mapService.getSuggestions(input);
        res.status(200).json(suggestions);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Failed to fetch suggestions' });
    }
}