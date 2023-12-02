import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from 'src/database/repositories/contatcts.repository';

@Injectable()
export class ContactsService {
  constructor(private readonly contactsRepo: ContactsRepository) {}

  create(createContactDto: CreateContactDto) {
    return this.contactsRepo.create({ data: createContactDto });
  }

  findAll() {
    return this.contactsRepo.findMany();
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
