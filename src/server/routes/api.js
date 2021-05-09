import React from 'react';
import mongoose from 'mongoose';
import express from 'express';
import axios from 'axios';
import User from '../models/User';
import passport from 'passport';

const router = express.Router();

router.get('/profileData', async (req, res, next) => {
  let user = await User.find();
  res.json(user[0]);
  return
});

export default router;
