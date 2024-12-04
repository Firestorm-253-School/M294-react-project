import { Get } from "../api"

export interface Room
{
    id: number
    description: string
    price: number
    location: string
    totalBeds: number
    totalRooms: number
}

export async function GetAll()
{
    const response: Room[] | undefined = await Get("rooms")

    if (!response)
    {
        console.error(response)
    }

    return response!
}

export async function FindRoomById(id: string | undefined)
{
    const response: Room | undefined = await Get("rooms/" + id)

    if (!response)
    {
        console.error(response)
    }

    return response!
}