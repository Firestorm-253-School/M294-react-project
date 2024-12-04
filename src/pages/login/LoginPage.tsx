import { useNavigate } from "react-router";
import { HandleSubmit } from "../../components/Forms";

export interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = (props) => {
	const navigate = useNavigate()

	const handleSubmit = async (e: React.FormEvent) => {
		const { token } = await HandleSubmit("auth/login", true)(e);
		localStorage.setItem("auth_token", token);
		navigate("/")
	};

	return (
		<>
			<div className="p-8 max-w-lg mx-auto">
				<h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
				<form className="space-y-4" onSubmit={handleSubmit}>
					<div>
						<label
							htmlFor="username"
							className="block text-sm font-medium text-gray-700"
						>
							Username
						</label>
						<input
							id="username"
							name="username"
							type="text"
							placeholder="Username"
							className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							id="password"
							name="password"
							type="text"
							placeholder="Password"
							className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
							required
						/>
					</div>
					<div>
						<button
							type="submit"
							className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default LoginPage;
