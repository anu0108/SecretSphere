import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const OTP = () => {
  const location = useLocation();
  const email = location.state;
  const length = 5;
  const [otp, setOtp] = useState();
  const [userotp, setUserOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    const generatedOtp = Math.floor(10000 + Math.random() * 90000);

    // Set OTP in state
    setOtp(generatedOtp.toString());
  }, []);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Sending otp when otp is changed
  useEffect(() => {
    if (!otp) return;
    const templateParams = {
      email: email,
      otp: otp,
    };
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_OTP,
        templateParams,
        process.env.REACT_APP_PUBLIC_API_KEY
      )
      .then(
        (result) => {
          // showSuccessToast();
        },
        (error) => {
          // showErrorToast();
        }
      );
  }, [otp]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    // if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="text-white text-center mt-20">
      <p>Please Enter the Verification Code sent to your e-mail</p>

      <div>
        <form className="flex flex-col justify-center items-center">
          <div>
            {userotp.map((value, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  ref={(input) => (inputRefs.current[index] = input)}
                  value={value}
                  onChange={(e) => handleChange(index, e)}
                  onClick={() => handleClick(index)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="bg-white w-14 h-12 mx-2 mt-10 text-black text-center rounded"
                />
              );
            })}
          </div>

          <button className="mt-10 py-3 w-60 rounded-3xl bg-blue-500 hover:bg-blue-600 font-medium text-black">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTP;
