export class UserAlreadyExistsException extends Error {

  constructor() {
    super('User already exists');
  }
}

export class NotFoundException extends Error {

  constructor() {
    super('User not found');
  }
}
