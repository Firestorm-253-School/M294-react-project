import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { FindPersonById, Person } from "../../interfaces/Person";

export interface IPeopleDetailPageProps {};

const PeopleDetailPage: React.FC<IPeopleDetailPageProps> = (props) => {
    const { personId } = useParams();

    const [person, setPerson] = useState<Person | null>(null);
    const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			setLoading(true)
			setPerson(await FindPersonById(personId!));
			setLoading(false)
		})();
	}, []);

    if (!person)
    {
        console.error("No person found ", personId)
        return <></>
    }

    if (!person.id) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <p className="text-lg font-medium text-red-500">No ID provided</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-96">
                <p className="text-gray-700 font-semibold mb-2">Profile ID: <span className="text-blue-500">{person.id}</span></p>
                <h1 className="text-2xl font-bold text-gray-800">{person.name}</h1>
            </div>
        </div>
    );
};

export default PeopleDetailPage;
