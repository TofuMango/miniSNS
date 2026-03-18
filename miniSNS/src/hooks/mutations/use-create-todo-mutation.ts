import { createTodos } from "@/api/create-todos";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutaiton() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTodos,
    onMutate: () => {}, // 요청 발송 시
    onSettled: () => {}, // 요청 종료 시
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [newTodo];
        return [...prevTodos, newTodo];
      });
    }, // 요청 성공 시
    onError: (error) => {
      window.alert(error.message);
    }, //요청 실패 시
  });
}
