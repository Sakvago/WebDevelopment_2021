import { Entity, PrimaryKey, Property, types } from "@mikro-orm/core"

@Entity()
export class Dog {
    @PrimaryKey()
    id?: number
    
    @Property()
    name: string

    @Property({type: types.double})
    age: number
}

function Column() {
    throw new Error("Function not implemented.")
}
