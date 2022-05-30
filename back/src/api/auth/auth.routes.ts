import express from 'express'
import { uuid } from 'uuidv4';
import jwt from 'jsonwebtoken'
import { createUserByEmailAndPassword, findUserByEmail } from '../users/users.services';
import { addRefreshTokenToWhitelist } from './auth.services';
import { generateTokens } from '../utils/jwt';

const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log('email or password is missing');
      res.status(400);
      throw new Error('You must provide an email and a password.');
    }
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      console.log('user already exists');
      res.status(400);
      throw new Error('Email already in use.');
    }

    const user = await createUserByEmailAndPassword({ email, password });
    const jti = uuid();
    const { accessToken, refreshToken } = generateTokens(user, jti);
    await addRefreshTokenToWhitelist({ jti, refreshToken, userId: user.id });

    res.json({
      accessToken,
      refreshToken,
    });
  } catch (err) {
    next(err);
  }
});

export default router