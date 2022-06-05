import React, { useEffect } from "react";
import LeftView from "../../containers/LeftViewContainer";
import RightView from "../../containers/RightViewContainer";
import "./style.scss";
const useActivity = (props) => {
  const { onStartActivity, show } = props;
  useEffect(() => {
    onStartActivity();
  }, []);

  return (
    <div className="activity-container">
      <LeftView />
      {show ? null : <RightView />}
    </div>
  );
};

export default useActivity;
