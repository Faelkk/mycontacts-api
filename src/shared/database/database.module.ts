import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

import { ContactsRepository } from './repositories/contatcts.repository';
import { CategoriesRepository } from './repositories/categories.repository';

@Global()
@Module({
  providers: [PrismaService, CategoriesRepository, ContactsRepository],
  exports: [CategoriesRepository, ContactsRepository],
})
export class DatabaseModule {}
