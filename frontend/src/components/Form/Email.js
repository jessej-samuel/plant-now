// Create react component for email and integrate with redux state
import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import actions from "../../actions";

const Email = ({ email }) => {
  const [emailState, setEmailState] = useState(email);
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="font-semibold">Email</h3>
      <input
        type="email"
        className="border border-gray-400 p-2 w-full focus-visible:border-black outline-none text-sm h-10"
        value={emailState}
        onChange={(e) => {
          dispatch(actions.changeEmail(e.target.value));
          setEmailState(e.target.value);
        }}
      />
    </div>
  );
};

export default connect((state) => {
  return { email: state.email };
})(Email);
