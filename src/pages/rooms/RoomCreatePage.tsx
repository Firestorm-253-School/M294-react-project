import { HandleSubmit } from "../../components/Forms";

export interface IRoomCreatePageProps {}

const RoomCreatePage: React.FC<IRoomCreatePageProps> = (props) => {
	return (
		<>
			<div className="p-8 max-w-lg mx-auto">
				<h1 className="text-2xl font-bold mb-6 text-center">
					Create Room
				</h1>
				<form className="space-y-4" onSubmit={HandleSubmit("rooms")}>
					<div>
						<label
							htmlFor="description"
							className="block text-sm font-medium text-gray-700"
						>
							Description
						</label>
						<input
							id="description"
							name="description"
							type="text"
							placeholder="Description"
							className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="price"
							className="block text-sm font-medium text-gray-700"
						>
							Price
						</label>
						<input
							id="price"
							name="price"
							type="number"
							placeholder="Price"
							className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="location"
							className="block text-sm font-medium text-gray-700"
						>
							Location
						</label>
						<input
							id="location"
							name="location"
							type="text"
							placeholder="Location"
							className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="totalbeds"
							className="block text-sm font-medium text-gray-700"
						>
							Total Beds
						</label>
						<input
							id="totalbeds"
							name="totalbeds"
							type="number"
							placeholder="Total Beds"
							className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="totalrooms"
							className="block text-sm font-medium text-gray-700"
						>
							Total Rooms
						</label>
						<input
							id="totalrooms"
							name="totalrooms"
							type="number"
							placeholder="Total Rooms"
							className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
							required
						/>
					</div>
					<div>
						<button
							type="submit"
							className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Create Room
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default RoomCreatePage;
