import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  /**
   * O Nome é necessario para criar uma categoria, que sera usado futuramente para o usuario poder categorizar seus contatos
   * @example "Linkedin"
   */
  @IsNotEmpty()
  @IsString()
  name: string;
}
