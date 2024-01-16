import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NewSecret = () => {
  const [message, setMessage] = useState("");
  const [formVisible, setFormVisible] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user has already posted a message
    const checkIfUserPostedMessage = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/check-message`,
          {
            withCredentials: true,
          }
        );

        // console.log(response.data.message);
        if (
          response.status === 200 &&
          response.data.message === "User has already posted a message"
        ) {
          // User has already posted a message, hide the form
          setFormVisible(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkIfUserPostedMessage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/secret`,
        {
          message,
        },
        {
          withCredentials: true,
        }
      );

      console.log(response);
      console.log(response.status);

      if (response.status === 201) {
        alert("Message Saved");
        navigate("/");
      } else {
        alert("Message failed to save");
      }
    } catch (e) {
      console.log(e);
      alert("Error saving message");
    }
  };

  const cancel = () => {
    navigate("/");
  };
  return (
    // <div className="pt-14">
    //   <div className="mx-auto rounded-t h-16 w-1/3 bg-[#E56399] text-white">
    //     <p className="text-center text-xl py-4 font-bold">
    //       Post your Anonymous Secret
    //     </p>
    //     <div className="bg-white h-80 rounded-b">
    //       <form action="" onSubmit={handleSubmit}>
    //         <div className="px-4 py-3">
    //           <textarea
    //             id="secret"
    //             name="secret"
    //             value={message}
    //             className="w-full h-60 border border-gray-500 rounded-md p-2 text-black"
    //             placeholder="Type your secret here..."
    //             onChange={(e) => setMessage(e.target.value)}
    //           ></textarea>
    //         </div>
    //         <div className="flex justify-center ">
    //           <button
    //             type="submit"
    //             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
    //           >
    //             Submit
    //           </button>
    //           <button
    //             type="button"
    //             className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
    //           >
    //             Cancel
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="pt-14">
      {formVisible && (
        <div className="mx-auto rounded-t h-16 w-1/3 bg-[#E56399] text-white">
          <p className="text-center text-xl py-4 font-bold">
            Post your Anonymous Secret
          </p>
          <div className="bg-white h-80 rounded-b">
            <form action="" onSubmit={handleSubmit}>
              <div className="px-4 py-3">
                <textarea
                  id="secret"
                  name="secret"
                  value={message}
                  className="w-full h-60 border border-gray-500 rounded-md p-2 text-black"
                  placeholder="Type your secret here..."
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-center ">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={cancel}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {!formVisible && (
        <div className="mx-auto rounded h-16 w-1/3 bg-[#E56399] text-white">
          <p className="text-center text-xl py-4 font-bold">
            You have already posted a message
          </p>
        </div>
      )}
    </div>
  );
};

export default NewSecret;
