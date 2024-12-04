import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";

import Navbar from "../../components/Navbar";
import { Load } from "../../api";
import { Room, GetAll } from "../../interfaces/Room";

export interface IRoomsOverviewPageProps {}

const RoomsOverviewPage: React.FC<IRoomsOverviewPageProps> = (props) => {
	const [data, setData] = useState<Room[] | null>(null);
    const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			setLoading(true)
			setData(await GetAll());
			setLoading(false)
		})();
	}, []);

	return (
		<>
			<Navbar />
			<div className="bg-gray-100 min-h-screen py-8">
				<div className="container mx-auto">
					<h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
						Rooms
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<Load
							data={data}
							isLoading={isLoading}
							func={(rooms: Room[]) => {
								return rooms.map((entry) => (
									<Link
										to={`/rooms/${entry.id}`}
										key={entry.id}
										className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow">
										<h3 className="text-xl font-semibold text-gray-800 mb-2">
											{entry.description}
										</h3>
										<p className="text-gray-600">
											<span className="font-medium">
												Price:
											</span>{" "}
											${entry.price}
										</p>
										<p className="text-gray-600">
											<span className="font-medium">
												Location:
											</span>{" "}
											{entry.location}
										</p>
										<p className="text-gray-600">
											<span className="font-medium">
												Beds:
											</span>{" "}
											{entry.totalbeds}
										</p>
										<p className="text-gray-600">
											<span className="font-medium">
												Rooms:
											</span>{" "}
											{entry.totalrooms}
										</p>
									</Link>
								));
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default RoomsOverviewPage;
