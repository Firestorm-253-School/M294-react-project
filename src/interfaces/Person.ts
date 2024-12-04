import { people } from "../assets/persondb.ts";


export interface Person
{
    id: number
    name: string
    age: number
    position: string
    heightInMiliMeters: number
}

export const FindPersonById = (id: number) => people.find(entry => entry.id === id);
export const FindPeopleByName = (name: string) => people.filter(entry => entry.name.includes(name));
