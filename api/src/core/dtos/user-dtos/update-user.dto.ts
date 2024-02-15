import { IsOptional, IsString } from 'class-validator';
import { CreateBookmarkDto } from '../bookmarks-dtos';
import { IUserRole } from '../../entities';

export class UpdateUserDto {

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsOptional()
  roles: IUserRole[];

  @IsOptional()
  bookmarks: CreateBookmarkDto[];

}
