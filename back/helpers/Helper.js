
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import bcrypt from 'bcrypt';

export default class Helper {
  static jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: ONE_WEEK,
    });
  }

  // static hashPassword(user, options) {
  //   const SALT_FACTOR = 8;

  //   if (!user.changed('password')) {
  //     return;
  //   }

  //   bcrypt.hash(user.password, SALT_FACTOR).then((hash) => {
  //     // Store hash in your password DB.
  //     // console.log('user - pass', user.password, 'hashh --', hash);
  //     user.setDataValue('password', hash);
  //   }).catch((err) => {
  //     console.log('err hash', err);
  //   });
  // }

  static async comparePassword(password, userHashpassword) {
    const result = await bcrypt.compare(password, userHashpassword);
    return result;
  }
}
