import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CategoriesRepository } from './repositories/categories.repository';
import { ContactsRepository } from './repositories/contatcts.repository';

@Module({
  providers: [PrismaService, CategoriesRepository, ContactsRepository],
  exports: [CategoriesRepository, ContactsRepository],
})
export class DatabaseModule {}
