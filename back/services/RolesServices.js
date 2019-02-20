import { Role } from '../models';

export default class RolesServices {
  static initializeRoles() {
    Role.create({
      id: 1,
      name: 'USER',
    });

    Role.create({
      id: 2,
      name: 'ADMIN',
    });

    Role.create({
      id: 3,
      name: 'SUPERADMIN',
    });
  }
}
