import { Get } from "../api"

export interface Person
{
    id: number
    name: string
    age: number
    position: string
    heightInMiliMeters: number
}

export async function GetAll()
{
    const response: Person[] | undefined = await Get("people")

    if (!response)
    {
        console.error(response)
    }

    return response!
}

export async function FindPersonById(id: string | undefined)
{
    const response: Person | undefined = await Get("people/" + id)

    if (!response)
    {
        console.error(response)
    }

    return response!
}