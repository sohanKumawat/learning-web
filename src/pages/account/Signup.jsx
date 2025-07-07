// src/components/LoginModal.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./UserStore";
import { IoClose } from "react-icons/io5";

const Signup = ({ onClose }) => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleOtpRequest = () => {
    if (phone.length === 10) {
      dispatch(
        login({
          id: 1,
          emailId: "sohankmnit@gmail.com",
          name: "Sohan Kumawat",
          imageUrl:
            "https://s.udemycdn.com/career-academies/careers/data-scientist/data-scientist-person.png",
          phoneNumber: "+9718373844",
          userType: "instructor",
          rating: 4.8,
        })
      );
      onClose();
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="flex w-full max-w-3xl bg-white rounded-xl overflow-hidden relative shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          <IoClose size={24} />
        </button>

        {/* Left Panel (Image) */}
        <div className="w-1/2 bg-gray-100 p-6 flex flex-col justify-center items-center">
          <img
            src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/about/about_10.png"
            alt="Smart Learning"
            className="mb-4"
          />
          <h2 className="text-xl font-bold text-center">
            A whole new world of Learning
          </h2>
        </div>

        {/* Right Panel (Form) */}
        <div className="w-1/2 p-6 flex flex-col justify-center space-y-4">
          <h3 className="text-xl font-semibold">Log in to continue</h3>
          <label className="text-sm font-medium text-gray-600">
            Mobile number
          </label>
          <input
            type="tel"
            maxLength={10}
            placeholder="9999999999"
            className="border border-orange-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))}
          />

          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" checked readOnly />
            <p className="text-sm text-gray-600">
              Get instant updates from Smart Learning on your{" "}
              <strong>WhatsApp</strong>.
            </p>
          </div>

          <button
            className={`mt-4 bg-gray-300 text-white font-bold py-2 rounded ${
              phone.length === 10 ? "bg-orange-500 hover:bg-orange-600" : ""
            }`}
            disabled={phone.length !== 10}
            onClick={handleOtpRequest}
          >
            GET OTP
          </button>

          <p className="text-xs text-gray-400 leading-tight mt-4">
            By logging in, you agree to Smart Learning's{" "}
            <span className="underline cursor-pointer">Privacy Policy</span> and{" "}
            <span className="underline cursor-pointer">Terms & Conditions</span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
