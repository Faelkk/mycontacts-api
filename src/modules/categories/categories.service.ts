import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesRepository } from '../../shared/database/repositories/categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const { name } = createCategoryDto;
    const categoryTaken = await this.categoriesRepo.findFirst({
      where: { name },
      select: { id: true },
    });

    if (categoryTaken) {
      throw new ConflictException('This category already exists');
    }

    return this.categoriesRepo.create({ data: createCategoryDto });
  }

  findAll() {
    return this.categoriesRepo.findMany();
  }

  findOne(id: string) {
    return this.categoriesRepo.findFirst({
      where: { id: id },
      include: {
        Contacts: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            categories: true,
          },
        },
      },
    });
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesRepo.update({
      where: { id: id },
      data: updateCategoryDto,
    });
  }

  remove(id: string) {
    return this.categoriesRepo.delete({ where: { id: id } });
  }
}
