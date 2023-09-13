"use client";

import { Check } from "@mui/icons-material";
import axios from "axios";
import url from "../../url";

const AccessRequest = ({ username, userId, setRequests }) => {
  const handleClick = async () => {
    console.log("Click");
    setRequests((prev) => prev.filter((req) => req._id !== userId));
    await axios.post(`${url}/api/admin/acceptUser/${userId}`);
  };

  return (
    <div className="flex justify-between px-4 py-2 bg-gray-100 w-full rounded-lg shadow mb-2">
      <p>{username}</p>
      <button className="text-blue-500" onClick={handleClick}>
        <Check />
      </button>
    </div>
  );
};

export default AccessRequest;
