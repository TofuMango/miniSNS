import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function TodoEditor() {
  return (
    <div className="flex gap-2">
      <Input placeholder="새로운 할 일 입력" />
      <Button>추가</Button>
    </div>
  );
}
