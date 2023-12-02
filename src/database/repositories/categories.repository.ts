import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany<T extends Prisma.CategoriesFindManyArgs>(
    findManyDto: Prisma.SelectSubset<T, Prisma.CategoriesFindManyArgs>,
  ) {
    return this.prismaService.categories.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.CategoriesFindFirstArgs) {
    return this.prismaService.categories.findFirst(findFirstDto);
  }

  create(createDto: Prisma.CategoriesCreateArgs) {
    return this.prismaService.categories.create(createDto);
  }
  delete(deleteDto: Prisma.CategoriesDeleteArgs) {
    return this.prismaService.categories.delete(deleteDto);
  }
  update(updateDto: Prisma.CategoriesUpdateArgs) {
    return this.prismaService.categories.update(updateDto);
  }
}
