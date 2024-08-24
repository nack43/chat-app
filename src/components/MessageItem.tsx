import { Message } from "../types";

type Props = {
  message: Message;
};

export const MessageItem = ({ message }: Props) => {
  return (
    <div
      className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-xs px-4 py-2 rounded-lg ${
          message.sender === "me" ? "bg-green-500 text-white" : "bg-white"
        }`}
      >
        <p>{message.text}</p>
        <p className="text-xs text-gray-500 mt-1">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};
