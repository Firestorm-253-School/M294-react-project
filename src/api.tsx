const address = "http://react-vid-app.vercel.app/api";

export const Get = async (request: string) => {
	await (new Promise(res => setTimeout(res, 450)))

	try {
		const response = await fetch(address + "/" + request);

		if (!response.ok) {
			console.error("Network response was not ok");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

export const Post = async (data: object, request: string) => {
	try {
		console.log(address + "/" + request)
		const response = await fetch(address + "/" + request, {
			method: "POST",
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const result = await response.json();
		console.log("Data posted successfully:", result);
	} catch (error) {
		console.error("Error posting data:", error);
	}
};

export interface ILoadProps {
	data: any
	isLoading: boolean
	func: any
}
export const Load: React.FC<ILoadProps> = (props) => {
	if (!props.data && !props.isLoading)
	{
		console.error("Not available")
		return <>Not available</>
	}
	if (!props.isLoading)
	{
		return <>{props.func(props.data)}</>
	}

	return <p>Loading...</p>
};
