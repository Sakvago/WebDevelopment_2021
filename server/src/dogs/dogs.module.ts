
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Dog } from './dog';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';


@Module({
  imports: [MikroOrmModule.forFeature([Dog])],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}