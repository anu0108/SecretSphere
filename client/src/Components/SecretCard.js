import React from "react";

const SecretCard = ({ secret }) => {
  return (
    <div className="bg-blue-500 text-white h-24 w-60 rounded flex flex-col gap-3 px-2 py-1">
      <p className="text-sm text-black pt-1">Posted 10 hours ago</p>
      <p className="font-bold">{secret}</p>
    </div>
  );
};

export default SecretCard;
