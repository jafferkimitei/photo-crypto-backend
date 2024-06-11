// controllers/photoController.js
const Photo = require('../models/Photo');

exports.addPhoto = async (req, res) => {
  try {
    const { title, description, url, owner, price } = req.body;
    const newPhoto = new Photo({ title, description, url, owner, price });
    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().populate('owner');
    res.status(200).json(photos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
