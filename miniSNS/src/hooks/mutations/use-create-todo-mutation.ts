import { createTodos } from "@/api/create-todos";
import { useMutation } from "@tanstack/react-query";

export function useCreateTodoMutaiton() {
  return useMutation({
    mutationFn: createTodos,
    onMutate: () => {}, // 요청 발송 시
    onSettled: () => {}, // 요청 종료 시
    onSuccess: () => {
      window.location.reload();
    }, // 요청 성공 시
    onError: (error) => {
      window.alert(error.message);
    }, //요청 실패 시
  });
}
