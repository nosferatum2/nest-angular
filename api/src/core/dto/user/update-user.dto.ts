import { IsOptional, IsString } from 'class-validator';
import { CreateBookmarkDto } from '../bookmark';
import { IUserRole } from '../../model';

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
