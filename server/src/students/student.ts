import { Entity, PrimaryKey, Property} from "@mikro-orm/core"

@Entity()
export class Student {
    @PrimaryKey()
    id?: number
    
    @Property()
    FullName: string

    @Property()
    NumberRecBook: number
    
    @Property()
    PhoneNumber: string
}

//function Column() {
//    throw new Error("Function not implemented.")
//}