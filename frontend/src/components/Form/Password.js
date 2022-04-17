// Create react component for password and integrate with redux state
import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import actions from "../../actions";

const Password = ({ password }) => {
  const [passwordState, setPasswordState] = useState(password);
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="font-semibold">Password</h3>
      <input
        type="password"
        value={passwordState}
        className="border border-gray-400 p-2 w-full focus-visible:border-black outline-none text-sm h-10"
        onChange={(e) => {
          dispatch(actions.changePassword(e.target.value));
          setPasswordState(e.target.value);
        }}
      />
    </div>
  );
};

export default connect((state) => {
  return { password: state.password };
})(Password);
