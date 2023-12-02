import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ContactsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany<T extends Prisma.ContactsFindManyArgs>(
    findManyDto: Prisma.SelectSubset<T, Prisma.ContactsFindManyArgs>,
  ) {
    return this.prismaService.contacts.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.ContactsFindFirstArgs) {
    return this.prismaService.contacts.findFirst(findFirstDto);
  }

  create(createDto: Prisma.ContactsCreateArgs) {
    return this.prismaService.contacts.create(createDto);
  }
  delete(deleteDto: Prisma.ContactsDeleteArgs) {
    return this.prismaService.contacts.delete(deleteDto);
  }
  update(updateDto: Prisma.ContactsUpdateArgs) {
    return this.prismaService.contacts.update(updateDto);
  }
}
