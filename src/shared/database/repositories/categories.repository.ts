import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany() {
    return this.prismaService.category.findMany();
  }

  findFirst(findFirstDto: Prisma.CategoryFindFirstArgs) {
    return this.prismaService.category.findFirst(findFirstDto);
  }

  create(createDto: Prisma.CategoryCreateArgs) {
    return this.prismaService.category.create(createDto);
  }
  delete(deleteDto: Prisma.CategoryDeleteArgs) {
    return this.prismaService.category.delete(deleteDto);
  }
  update(updateDto: Prisma.CategoryUpdateArgs) {
    return this.prismaService.category.update(updateDto);
  }
}
