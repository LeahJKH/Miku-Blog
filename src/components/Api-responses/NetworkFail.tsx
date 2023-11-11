// NetworkFail.tsx
import React from "react";

type NetworkFailProps = {
  responseReceived?: boolean;
  responseDamaged?: boolean;
  missingData?: boolean;
};

const NetworkFail: React.FC<NetworkFailProps> = ({
  responseReceived = false,
  responseDamaged = false,
  missingData = false,
}) => {
  let message = "";

  if (!responseReceived) {
    message = "The site couldn't be reached";
  } else if (responseDamaged) {
    message = "The response is damaged";
  } else if (missingData) {
    message = "Some data is missing in the response";
  } else {
    message = "Unknown error occurred";
  }

  return (
    <div className="errCard">
      <h1>ERROR</h1>
      <p>{message}</p>
      {responseReceived && <p>Request failed with status code: </p>}
    </div>
  );
};

export default NetworkFail;
