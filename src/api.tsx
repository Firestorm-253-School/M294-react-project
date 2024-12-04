const address = "https://react-vid-app.vercel.app/api";

export const Get = async (request: string) => {
	await new Promise((res) => setTimeout(res, 450));

	try {
		const response = await fetch(address + "/" + request, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
			},
		});

		if (!response.ok) {
			console.error("Network response was not ok");
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

export const Post = async (data: object, request: string, isLogin: boolean) => {
	try {
		const response = await fetch(address + "/" + request, {
			method: "POST",
			headers: isLogin
				? {
						Authorization: `Bearer ${localStorage.getItem(
							"auth_token"
						)}`,
				  }
				: {},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			console.error("Network response was not ok");
		}

		return await response.json();
	} catch (error) {
		console.error("Error posting data:", error);
	}
};

export interface ILoadProps {
	data: any;
	isLoading: boolean;
	func: any;
}
export const Load: React.FC<ILoadProps> = (props) => {
	if (!props.data && !props.isLoading) {
		console.error("Not available");
		return <>Not available</>;
	}
	if (!props.isLoading) {
		return <>{props.func(props.data)}</>;
	}

	return <p>Loading...</p>;
};
