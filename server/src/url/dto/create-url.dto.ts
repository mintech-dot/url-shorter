import { IsNotEmpty, IsUrl } from 'class-validator';
export class CreateUrlDto {
  @IsNotEmpty()
  @IsUrl()
  long_url: string;

  @IsNotEmpty()
  user_id: number;
}
