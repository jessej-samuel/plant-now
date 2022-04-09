import { useParams } from "react-router-dom";

function User({id}) {
	let params = useParams();
	return ( <div>{"User#"+params.id}</div> );
}

export default User;