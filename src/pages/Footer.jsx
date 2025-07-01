import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaVimeoV,
  FaLinkedinIn,
  FaSkype,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B0D30] text-white py-14 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h4 className="text-lg font-bold mb-4">About us</h4>
          <p className="text-gray-300 text-sm mb-6">
            Corporate clients and leisure travelers have been relying on
            SmartLearning for dependable, safe, and professional education
            support services worldwide.
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-purple-600 p-3 rounded">
              <FaClock size={24} />
            </div>
            <div className="text-sm text-gray-300">
              <p className="font-bold text-white">OPENING HOURS</p>
              <p>Mon - Sat (8.00 - 6.00)</p>
              <p>Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About Us</li>
            <li>Teachers</li>
            <li>Partner</li>
            <li>Room Details</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-lg font-bold mb-4">Course</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Business Strategy</li>
            <li>Software Development</li>
            <li>Business English</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h4 className="text-lg font-bold mb-4">Recent Post</h4>
          <div className="space-y-4">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="flex gap-4">
                <img
                  src={`https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/grid/grid_5.png`}
                  alt="Post"
                  className="w-12 h-12 rounded object-cover"
                />
                <div>
                  <p className="text-xs text-gray-400 mb-1">02 Apr 2024</p>
                  <p className="text-sm font-bold text-white">
                    {["Best", "Keep", "Nice"][idx]} Your Business
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-400">
        <div className="flex justify-between items-center flex-col md:flex-row max-w-7xl mx-auto gap-4 px-2">
          <p>
            Copyright ©{" "}
            <span className="text-purple-500 font-semibold">2024</span> by
            SmartLearning. All Rights Reserved.
          </p>
          <div className="flex gap-3 text-white text-lg">
            <FaFacebookF className="hover:text-purple-500 cursor-pointer" />
            <FaTwitter className="hover:text-purple-500 cursor-pointer" />
            <FaVimeoV className="hover:text-purple-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-purple-500 cursor-pointer" />
            <FaSkype className="hover:text-purple-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
