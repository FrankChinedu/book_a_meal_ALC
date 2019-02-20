import { User, Role } from '../models';
import Helper from '../helpers/Helper';

export default class AuthenticationService {
  static async register(data) {
    try {
      const { userRole } = data;
      console.log('data', data);
      const user = await User.create(data);
      const role = await Role.findAll({
        where: {
          name: userRole,
        },
      });
      await user.setRoles(role);

      const userJson = user.toJSON();
      const res = {
        registered: true,
        user: userJson,
        token: Helper.jwtSignUser(userJson),
      };
      return res;
    } catch (err) {
      const error = err.errors[0].message;
      return {
        registered: false,
        error,
      };
    }
  }

  static async login(data) {
    try {
      const { email, password } = data;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      // console.log('user', user);
      // console.log('password', user.password);

      if (!user) {
        return {
          error: 'The login information was incorrect',
        };
      }

      const isPasswordValid = await Helper.comparePassword(password, user.password);
      console.log('isPasswordValid --', isPasswordValid);
      if (!isPasswordValid) {
        return {
          error: 'The password information was incorrect',
        };
      }

      const userJson = user.toJSON();
      return {
        user: userJson,
        token: Helper.jwtSignUser(userJson),
      };
    } catch (err) {
      console.log(err);
      return {
        error: 'An throw error has occured trying to log in',
      };
    }
  }
}
