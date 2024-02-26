import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExistsException extends HttpException {

  constructor() {
    super('User already exists', HttpStatus.FORBIDDEN);
  }
}
export class BookmarkAlreadyExistsException extends HttpException {

  constructor() {
    super('Bookmark already exists', HttpStatus.FORBIDDEN);
  }
}

export class UserNotFoundException extends HttpException {

  constructor() {
    super(
      'User not found',
      HttpStatus.NOT_FOUND
    );
  }
}

export class BookmarkNotFoundException extends HttpException {

  constructor() {
    super(
      'Bookmark not found',
      HttpStatus.NOT_FOUND
    );
  }
}
