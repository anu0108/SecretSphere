import React from "react";
import moment from "moment";

const SecretCard = ({ secret, time }) => {
  const formattedTimestamp = moment(time).fromNow();

  return (
    <div className="bg-blue-500 text-white h-32 lg:h-44 w-60 rounded flex flex-col gap-3 px-1 lg:px-2 py-0.5 lg:py-1">
      <p className="text-xs lg:text-sm text-black pt-1">
        Posted {formattedTimestamp}
      </p>
      <p className="text-sm lg:text-base font-bold">{secret}</p>
    </div>
  );
};

export default SecretCard;
