import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import actions from "../../actions";

const LoginSubmit = ({ email, password }) => {
  const dispatch = useDispatch();
  
  return (
    <>
      <button
        type="submit"
        className="bg-yellow px-4 py-2 rounded-md text-green font-semibold w-fit self-center"
        onClick={() => {
          dispatch(actions.login(email, password));
          console.log(email,password);
        }}
      >
        Login
      </button>
    </>
  );
};
// Add login dispatch to App.js:
export default connect((state) => {
  console.log(state);
  return { email: state.email, password: state.password };
})(LoginSubmit);
