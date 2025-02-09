import { useState } from "react";
import Button from "../components/Button";

export default function Guestbook() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Guestbook</h2>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="메시지를 남겨주세요!" 
      />
      <Button onClick={handleSubmit}>등록</Button>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
