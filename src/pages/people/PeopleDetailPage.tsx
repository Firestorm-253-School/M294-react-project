import { Person } from "../../interfaces/Person";

export interface IPeopleDetailPageProps {
    person: Person
};

const PeopleDetailPage: React.FC<IPeopleDetailPageProps> = (props) => {
    const { id, name } = props.person;

    if (!id) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <p className="text-lg font-medium text-red-500">No ID provided</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-96">
                <p className="text-gray-700 font-semibold mb-2">Profile ID: <span className="text-blue-500">{id}</span></p>
                <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
            </div>
        </div>
    );
};

export default PeopleDetailPage;
