import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useCreateTodoMutaiton } from "@/hooks/mutations/use-create-todo-mutation";

export default function TodoEditor() {
  const { mutate, isPending } = useCreateTodoMutaiton();
  const [content, setContent] = useState("");

  const handleAddClick = () => {
    // content가 공백일 시 return
    if (content.trim() === "") return;
    mutate(content);
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
      <Button disabled={isPending} onClick={handleAddClick}>
        추가
      </Button>
    </div>
  );
}
