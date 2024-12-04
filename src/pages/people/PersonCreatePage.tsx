import { HandleSubmit } from "../../components/Forms";

export interface IPersonCreatePageProps {}

const PersonCreatePage: React.FC<IPersonCreatePageProps> = (props) => {
	return (
		<>
			<div className="p-8 max-w-lg mx-auto">
				<h1 className="text-2xl font-bold mb-6 text-center">
					Create Person
				</h1>
				<form className="space-y-4" onSubmit={HandleSubmit("people")}>
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700"
						>
							Name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							placeholder="Name"
							className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="age"
							className="block text-sm font-medium text-gray-700"
						>
							Age
						</label>
						<input
							id="age"
							name="age"
							type="number"
							placeholder="Age"
							className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="position"
							className="block text-sm font-medium text-gray-700"
						>
							Position
						</label>
						<input
							id="position"
							name="position"
							type="text"
							placeholder="Position"
							className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="heightInMiliMeters"
							className="block text-sm font-medium text-gray-700"
						>
							Height In MiliMeters
						</label>
						<input
							id="heightInMiliMeters"
							name="heightInMiliMeters"
							type="number"
							placeholder="Height In MiliMeters"
							className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
							required
						/>
					</div>
					<div>
						<button
							type="submit"
							className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Create Person
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default PersonCreatePage;
