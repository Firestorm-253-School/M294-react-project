import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";

import Navbar from "../../components/Navbar";
import { Load } from "../../api";
import { GetAll, Person } from "../../interfaces/Person";

export interface IPeopleOverviewPageProps {}

const PeopleOverviewPage: React.FC<IPeopleOverviewPageProps> = (props) => {
	const [data, setData] = useState<Person[] | null>(null);
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
						People
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<Load
							data={data}
							isLoading={isLoading}
							func={(people: Person[]) => {
								return people.map((entry) => (
									<Link
										to={`/people/${entry.id}`}
										key={entry.id}
										className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow">
										<h3 className="text-xl font-semibold text-gray-800 mb-2">
											{entry.name}
										</h3>
										<p className="text-gray-600">
											<span className="font-medium">
												Age:
											</span>{" "}
											${entry.age}
										</p>
										<p className="text-gray-600">
											<span className="font-medium">
												Position:
											</span>{" "}
											{entry.position}
										</p>
										<p className="text-gray-600">
											<span className="font-medium">
                                                Height In MiliMeters:
											</span>{" "}
											{entry.heightInMiliMeters}
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

export default PeopleOverviewPage;
