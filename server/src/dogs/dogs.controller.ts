import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, Req } from '@nestjs/common';
import { Dog } from './dog';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(
    private readonly dogsService: DogsService,
  ) {}

  dogs: Dog[] = [
    {
      id: 1,
      name: "Sharik",
      age: 1
    },
    {
      id: 2,
      name: "Tuzik",
      age: 2
    },
    {
      id: 5,
      name: "Bobik",
      age: 3
    },
  ]

  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogsService.getAll()
  }

  @Get(':id')
  async findById(@Param('id', new ParseIntPipe()) id,): Promise<Dog> {
    const dog =await this.dogsService.getById(id);
    if (dog) {
      return dog;
    }
    throw new NotFoundException();
  }


  @Post()
  async Create(@Body() model: Dog): Promise<Dog> {
    // console.log(model);
    // const dogExist = this.dogs.some(item => item.id === model.id);
    // if (dogExist) {
    //   throw new BadRequestException(`dog with id=${model.id} already exist`);
    // }
    // this.dogs.push(model);
    const dog = await this.dogsService.addDog(model);
    return dog;
  }

  @Delete(':id')
  deleteById(@Param('id', new ParseIntPipe()) id,): boolean {
    const len = this.dogs.length;
    this.dogs = this.dogs.filter(item => item.id !== id);
    if (len === this.dogs.length){
      throw new NotFoundException();
    }
    return true;
  }
 
  
  
  @Put(':id')
  async update(@Param('id', new ParseIntPipe()) id, @Body() model: Dog): Promise<Dog> {
    const dog = await this.dogsService.updateById(id, model);
    if (!dog) {
      throw new BadRequestException(`dog with id=${model.id} does not exist`);
    }
    return dog;
  }
}