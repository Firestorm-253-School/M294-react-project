import Navbar from "../../components/Navbar";
export interface IUserProfileProps {}

const UserProfile: React.FC<IUserProfileProps> = (props) => {
	return (
		<>
			<Navbar />
			<h1>User Profile</h1>
		</>
	);
};

export default UserProfile;
