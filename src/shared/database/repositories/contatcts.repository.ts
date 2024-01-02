import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ContactsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(queryOptions: { orderBy?: { name: 'asc' | 'desc' } } = {}) {
    return this.prismaService.contact.findMany({
      ...queryOptions,
    });
  }

  findFirst(findFirstDto: Prisma.ContactFindFirstArgs) {
    return this.prismaService.contact.findFirst(findFirstDto);
  }

  create(createDto: Prisma.ContactCreateArgs) {
    return this.prismaService.contact.create(createDto);
  }
  delete(deleteDto: Prisma.ContactDeleteArgs) {
    return this.prismaService.contact.delete(deleteDto);
  }
  update(updateDto: Prisma.ContactUpdateArgs) {
    return this.prismaService.contact.update(updateDto);
  }
}
