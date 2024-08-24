import React from "react";
import { mockMessages } from "./data";
import { MessageItem } from "./components/MessageItem";

const App: React.FC = () => {
  return (
    <div className="w-full h-full bg-black">
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {mockMessages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
