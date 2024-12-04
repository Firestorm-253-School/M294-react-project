import { rooms } from "../assets/roomsdb"

export interface Room
{
    id: number
    description: string
    price: number
    location: string
    totalBeds: number
    totalRooms: number
}

export const FindRoomById = (id: string | undefined) => rooms.find(entry => entry.id === Number(id));