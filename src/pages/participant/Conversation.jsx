import React, { useState } from "react";
import { FiSearch, FiSend, FiPhone, FiVideo } from "react-icons/fi";

const dummyChats = [
  {
    id: 1,
    name: "Rex Allen",
    message: "Hey, How are you?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Rex Allen",
    message: "Hey, How are you?",
    time: "4:35pm",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Julia Jhones",
    message: "Hey, How are you?",
    time: "1:40pm",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "Anderson",
    message: "Hey, How are you?",
    time: "3:20am",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 5,
    name: "Rex Allen",
    message: "Hey, How are you?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 6,
    name: "Nani",
    message: "Hey, How are you?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: 7,
    name: "Devra",
    message: "Hey, How are you?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    id: 8,
    name: "Hireoz",
    message: "Hey, How are you?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 9,
    name: "zone de",
    message: "Hey, How are you?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    id: 10,
    name: "Akhelnde",
    message: "Hey, How are you?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    id: 11,
    name: "mirraz",
    message: "Hey, How are you?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    id: 12,
    name: "ronaldo",
    message: "Hey, How are you?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    id: 13,
    name: "bexallian",
    message: "Hey, How are you?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 14,
    name: "rekha",
    message: "Hey, How are you?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
  },
];

const dummyMessages = [
  {
    id: 1,
    sender: "Bradshaw",
    message: "Dolor sit amet consectetur",
    time: "5:03 PM",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
    fromMe: false,
  },
  {
    id: 2,
    sender: "Rex Allen",
    message: "Lorem ipsum dolor sit amet consectetur adipiscing sed.",
    time: "4:32 PM",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fromMe: true,
  },
  {
    id: 3,
    sender: "Rex Allen",
    message: "Dolor sit amet consectetur",
    time: "4:30 PM",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fromMe: true,
  },
  {
    id: 4,
    sender: "Julia Jhones",
    message: "Lorem ipsum dolor sit amet consectetur adipiscing sed.",
    time: "4:40 PM",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fromMe: false,
  },
  {
    id: 5,
    sender: "Julia Jhones",
    message: "Dolor sit amet consectetur",
    time: "4:42 PM",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fromMe: false,
  },
  {
    id: 6,
    sender: "Bradshaw",
    message: "Dolor sit amet consectetur",
    time: "5:03 PM",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
    fromMe: false,
  },
  {
    id: 7,
    sender: "Rex Allen",
    message: "Lorem ipsum dolor sit amet consectetur adipiscing sed.",
    time: "4:32 PM",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fromMe: true,
  },
  {
    id: 8,
    sender: "Rex Allen",
    message: "Dolor sit amet consectetur",
    time: "4:30 PM",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fromMe: true,
  },
  {
    id: 9,
    sender: "Julia Jhones",
    message: "Lorem ipsum dolor sit amet consectetur adipiscing sed.",
    time: "4:40 PM",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fromMe: false,
  },
  {
    id: 10,
    sender: "Julia Jhones",
    message: "Dolor sit amet consectetur",
    time: "4:42 PM",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fromMe: false,
  },
];

export default function ParticipantConversion() {
  const [search, setSearch] = useState("");
  const [activeChat, setActiveChat] = useState(dummyChats[0]);
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      sender: activeChat.name,
      message: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      avatar: activeChat.avatar,
      fromMe: true,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div className="w-full max-w-xs flex flex-col border-r">
        <h2 className="text-lg font-bold p-4 bg-white">Participants</h2>

        <div className="flex items-center px-4 py-2 bg-white">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none text-sm"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* People list scrolls independently */}
        <div className="flex-1 overflow-y-auto bg-white">
          {dummyChats
            .filter((chat) =>
              chat.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((chat) => (
              <div
                key={chat.id}
                className={`flex items-center p-3 hover:bg-gray-100 cursor-pointer ${
                  activeChat.id === chat.id ? "bg-gray-100" : ""
                }`}
                onClick={() => setActiveChat(chat)}
              >
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{chat.name}</h4>
                  <p className="text-gray-500 text-xs">{chat.message}</p>
                </div>
                <span className="text-xs text-gray-400">{chat.time}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Chat Panel */}
      <div className="flex flex-col flex-1 h-full">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4 bg-white flex-shrink-0">
          <div className="flex items-center">
            <img
              src={activeChat.avatar}
              alt={activeChat.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h4 className="font-semibold text-sm">{activeChat.name}</h4>
              <p className="text-xs text-gray-400">Stay at home, Stay safe</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <FiPhone className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <FiVideo className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
            >
              {!msg.fromMe && (
                <img
                  src={msg.avatar}
                  alt={msg.sender}
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <div
                className={`px-3 py-2 rounded-lg max-w-xs ${
                  msg.fromMe
                    ? "bg-indigo-100 text-gray-800"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <p className="text-sm">{msg.message}</p>
                <span className="block text-xs text-gray-400 text-right mt-1">
                  {msg.time}
                </span>
              </div>
              {msg.fromMe && (
                <img
                  src={activeChat.avatar}
                  alt={activeChat.name}
                  className="w-8 h-8 rounded-full ml-2"
                />
              )}
            </div>
          ))}
        </div>

        {/* Sticky input */}
        <div className="border-t p-4 bg-white flex-shrink-0">
          <div className="flex items-center">
            <input
              className="flex-1 border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none"
              placeholder="Type something"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button
              className="ml-3 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700"
              onClick={handleSend}
            >
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
