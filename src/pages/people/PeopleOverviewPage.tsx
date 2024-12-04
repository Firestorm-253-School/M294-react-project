import { useSearchParams } from "react-router";

import Navbar from "../../components/Navbar";
import PeopleDetailPage from "./PeopleDetailPage";
import { Person, FindPersonById, FindPeopleByName } from "../../interfaces/Person";


export interface IPeopleOverviewPageProps
{
    people: Person[]
};

const PeopleOverviewPage: React.FC<IPeopleOverviewPageProps> = (props) => {
    const [searchParams] = useSearchParams();
    const people = props.people

    if (searchParams.size == 0)
    {
        return (
            <>
                <Navbar/>
                <h1>People</h1>
                {
                    people.map(entry => {
                        return <h3>Welcome {entry.name}</h3>
                    })
                }
            </>
        )
    }

    return ProcessParameterised(searchParams);
};

function ProcessParameterised(searchParams: URLSearchParams)
{
    if (searchParams.size > 1)
    {
        console.log(searchParams);
        return (
            <>
                <Navbar/>
                <h1>ERROR: Too many parameters given</h1>
            </>
        )
    }

    if (searchParams.size == 1) {
        let found: Person[] = [];
        let exact_match = true;

        const [ key, value ] = [...searchParams.entries()][0];
        switch(key) {
            case 'id':
                const person = FindPersonById(Number(value))
                if (person != undefined)
                {
                    found = [person]
                }
                break;
            case 'name':
                found = FindPeopleByName(value)

                /*if (found.length === 0)
                {
                    found = people.filter(entry => entry.name.includes(name!));
                    exact_match = false
                }*/
                break;
            default:
                console.error("Invalid param key ", key)
        }

        if (found.length === 1 && exact_match)
        {
            return <PeopleDetailPage person={found[0]}/>;
        }
        else if (found.length > 1 || !exact_match)
        {
            return <PeopleOverviewPage people={found}/>;
        }
        else
        {
            console.error("No match found for ", [...searchParams.entries()])
        }
    }
}

export default PeopleOverviewPage
