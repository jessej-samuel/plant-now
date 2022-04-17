// Create react component for name and integrate with redux state
import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import actions from "../../actions";

const Name = ({ name }) => {
  const [nameState, setNameState] = useState(name);
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="font-semibold">Name</h3>
      <input
        type="text"
        className="border border-gray-400 p-2 w-full focus-visible:border-black outline-none text-sm h-10"
        value={nameState}
        onChange={(e) => {
          dispatch(actions.changeName(e.target.value));
          setNameState(e.target.value);
        }}
      />
    </div>
  );
};

export default connect((state) => {
  return { name: state.name };
})(Name);
