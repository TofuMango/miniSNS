import { createTodos } from "@/api/create-todos";
import { QUERY_KEYS } from "@/lib/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutaiton() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTodos,
    onMutate: () => {}, // 요청 발송 시
    onSettled: () => {}, // 요청 종료 시
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todo.list,
      });
    }, // 요청 성공 시
    onError: (error) => {
      window.alert(error.message);
    }, //요청 실패 시
  });
}
