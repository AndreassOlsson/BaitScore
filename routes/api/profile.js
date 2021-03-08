const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    // User id comes from the tokens
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/profile
// @desc    Get current users profile
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('species', 'Species is required').not().isEmpty(),
      check('pbs', 'Pbs is required').not().isEmpty(),
      check('favoriteLure', 'Favorite lure is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array });
    }
    const {
      city,
      age,
      status,
      species,
      pbs,
      favoriteLure,
      bio,
      youtube,
      twitter,
      facebook,
      instagram,
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (city) profileFields.city = city;
    if (age) profileFields.age = age;
    if (status) profileFields.status = status;
    if (favoriteLure) profileFields.favoriteLure = favoriteLure;
    if (bio) profileFields.bio = bio;
    if (species) {
      profileFields.species = species.split(',').map((specie) => specie.trim());
    }
    if (pbs) {
      profileFields.pbs = pbs.split(',').map((pb) => pb.trim());
    }
    console.log(profileFields.species);

    // Build social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;

    try {
      // Update if a profile is found
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // useFindAndModify : false is to avoid deprecationwarning
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create if a profile is not found
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server errror');
    }
  }
);

// @route   GET api/profile
// @desc    Get all users profiles
// @access  Public(
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/profile
// @desc    Delete profile, user & posts
// @access  Public
router.delete('/', auth, async (req, res) => {
  try {
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });

    // Remove user
    await Profile.findByIdAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
