import { Message } from "./types";

export const mockMessages: Message[] = [
  {
    id: "1",
    text: "Hello!",
    sender: "opponent",
    timestamp: new Date("2023-08-24T10:00:00"),
  },
  {
    id: "2",
    text: "Hi there!",
    sender: "me",
    timestamp: new Date("2023-08-24T10:01:00"),
  },
  {
    id: "3",
    text: "How are you?",
    sender: "opponent",
    timestamp: new Date("2023-08-24T10:02:00"),
  },
  {
    id: "4",
    text: "Im doing well, thanks!",
    sender: "me",
    timestamp: new Date("2023-08-24T10:03:00"),
  },
];
