import { IsOptional, IsString } from 'class-validator';
import { IUser } from '../../entities';

export class UpdateBookmarkDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  link: string;

  @IsOptional()
  users: IUser[]

}
