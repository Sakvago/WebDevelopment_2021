import { MikroOrmModuleOptions } from "@mikro-orm/nestjs";
import { Student } from "./students/student";

 const config: MikroOrmModuleOptions = {
  entities: [Student], // no need for `entitiesTs` this way
  dbName: 'webdev',
  host: "localhost",
  port: 5432,
  // dbName: process.env.POSTGRES_DB,
  user: "postgres",
  password: "example",
  type: "postgresql",
};

export default config

// const config: MikroOrmModuleOptions = {
//   migrations: {
//     path: join(__dirname, "./migrations"),
//     pathTs: join(__dirname, "./migrations"),
//   },
//   entities: [join(__dirname, "./entities")],
//   entitiesTs: [join(__dirname, "./entities")],
//   host: process.env.POSTGRES_HOST,
//   port: +process.env.POSTGRES_PORT,
//   dbName: process.env.POSTGRES_DB,
//   user: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   type: "postgresql",
//   debug: process.env.NODE_ENV !== "production",
// };

