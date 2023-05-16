import { EntityRepository, MikroORM } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Dog } from './dog';

@Injectable()
export class DogsService {
    constructor(
        @InjectRepository(Dog)
        private readonly dogsRepository: EntityRepository<Dog>,
      ) {}

    getAll() {
     return this.dogsRepository.findAll()
    }

    async addDog(dog: Dog) {
      const entity = this.dogsRepository.create({
        ...dog,
      });
      await this.dogsRepository.persistAndFlush(entity);
      return entity;
    }

    async getById(id: number) {
      const entity = await this.dogsRepository.findOne({
        id
      });
      return entity;
    }

    async updateById(id: number, model: Dog) {
      const entity = await this.dogsRepository.findOne({
        id
      });
      if (!entity) {
        return null;
      }
      // this.dogsRepository.assign
      entity.age = model.age;
      entity.name = model.name;
      await this.dogsRepository.flush();
      return entity;
    }
}