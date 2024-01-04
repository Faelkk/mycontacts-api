import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDto {
  /**
   * O Nome é necessario para criar uma contato, o nome sera exibido durante toda a aplicação.
   * @example "Rafael Achtenberg"
   */
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * Seu email, tambem é necessario para criar um contato e vale tambem lembrar que ele ficara visivel durante a aplicação
   * @example "Rafael@gmail.com"
   */

  @IsEmail()
  @IsNotEmpty()
  email: string;

  /**
   * Se é um contato não teria como faltar o telefone certo?
   * @example "(51) 997059594"
   */
  @IsString()
  @IsNotEmpty()
  phone: string;

  /**
   * O id de uma categoria, é usado para saber a qual categoria esse usuario pertence
   * @example "659351fa8a19cc1f98826561"
   */
  @IsString()
  @IsNotEmpty()
  categoryId: string;
}
