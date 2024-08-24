export type Message = {
  id: string;
  text: string;
  sender: "me" | "opponent";
  timestamp: Date;
};
