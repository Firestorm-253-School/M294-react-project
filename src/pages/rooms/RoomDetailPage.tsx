import { useParams } from "react-router";
import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar";
import { Get, Load } from "../../api";
import { FindRoomById, Room } from "../../interfaces/Room";

export interface IRoomDetailPageProps {}

const RoomDetailPage: React.FC<IRoomDetailPageProps> = (props) => {
    const { roomId } = useParams();
    const room = FindRoomById(roomId);

    const [data, setData] = useState<Room | null>(null);
    const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
            setLoading(true);
			setData(await FindRoomById(roomId));
            setLoading(false);
		})();
	}, []);

    if (room === undefined) {
        console.error("Id not found ", roomId);
        return (
            <>
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <p className="text-lg text-red-500 font-medium">
                        Room not found (Room ID: {roomId})
                    </p>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-6 w-96">
                    <Load data={data} isLoading={isLoading} func={(room: Room) => <>
                    <p className="text-gray-600 font-medium mb-2">
                        <span className="font-semibold">Room ID:</span> {room.id}
                    </p>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{room.description}</h2>
                    <div className="space-y-2">
                        <h3 className="text-gray-700">
                            <span className="font-semibold">Price:</span> ${room.price}
                        </h3>
                        <h3 className="text-gray-700">
                            <span className="font-semibold">Location:</span> {room.location}
                        </h3>
                        <h3 className="text-gray-700">
                            <span className="font-semibold">Total Beds:</span> {room.totalBeds}
                        </h3>
                        <h3 className="text-gray-700">
                            <span className="font-semibold">Total Rooms:</span> {room.totalRooms}
                        </h3>
                    </div>
                    </>}/>
                </div>
            </div>
        </>
    );
};

export default RoomDetailPage;
