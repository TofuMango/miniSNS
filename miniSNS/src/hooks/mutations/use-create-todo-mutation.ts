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
      queryClient.setQueryData<Todo>(
        QUERY_KEYS.todo.detail(newTodo.id),
        newTodo,
      );
      queryClient.setQueryData<string[]>(
        QUERY_KEYS.todo.list,
        (prevTodoIds) => {
          if (!prevTodoIds) return [newTodo.id]; // 목록이 비어 있다면 새 Todo의 id만 return
          return [...prevTodoIds, newTodo.id];
        },
      );
    }, // 요청 성공 시

    onError: (error) => {
      window.alert(error.message);
    }, //요청 실패 시
  });
}
