import { API_URL } from "@/lib/constants";

export async function createTodos(content: string) {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    // json 문자열로 변환 -> stringify(직렬화)
    body: JSON.stringify({
      content,
      isDone: false,
    }),
  });
  if (!response.ok) throw new Error("Create Todo Failed");

  // 응답값을 파싱해서
  const data = await response.json();
  return data;
}
