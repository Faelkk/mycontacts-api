import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from '../../shared/database/repositories/contatcts.repository';

@Injectable()
export class ContactsService {
  constructor(private readonly contactsRepo: ContactsRepository) {}

  create(createContactDto: CreateContactDto) {
    return this.contactsRepo.create({ data: createContactDto });
  }

  findAll(sortOrder: 'asc' | 'desc' = 'asc') {
    return this.contactsRepo.findMany({ orderBy: { name: sortOrder } });
  }
  findOne(id: string) {
    return this.contactsRepo.findFirst({ where: { id: id } });
  }

  update(id: string, updateContactDto: UpdateContactDto) {
    return this.contactsRepo.update({
      where: { id: id },
      data: updateContactDto,
    });
  }

  remove(id: string) {
    return this.contactsRepo.delete({
      where: { id: id },
    });
  }
}
