import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useCreateTodo } from "@/store/todos";

export default function TodoEditor() {
  const createTodo = useCreateTodo();
  const [content, setContent] = useState("");

  const handleAddClick = () => {
    // content가 공백일 시 return
    if (content.trim() === "") return;
    createTodo(content);
    // 입력값 초기화
    setContent("");
  };
  return (
    <div className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 할 일 입력"
      />
      <Button onClick={handleAddClick}>추가</Button>
    </div>
  );
}
