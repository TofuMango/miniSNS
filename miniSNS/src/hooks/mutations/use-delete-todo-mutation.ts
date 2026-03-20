import { deleteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,

    // 1. 캐시 무효화 -> invalidateQueries
    // 2. 수정 요청의 응답값 활용 -> onSuccess
    // 3. 낙관적 업데이트 -> onMutate / 요청이 실패하게 되면 데이터를 다시 원복시켜줘야함
    // 갑자기 아이템이 없어졌다가 부활하는 모양새가 될듯

    onSuccess: (deletedTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.filter((prevTodos) => prevTodos.id !== deletedTodo.id);
      });
    },
  });
}
