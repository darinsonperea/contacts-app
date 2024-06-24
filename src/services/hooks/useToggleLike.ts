import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleLike as toggleLikeApi } from "../apiContacts";

export function useToggleLike() {
  const queryClient = useQueryClient();

  const {
    mutate: toggleLike,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ id, favorite }: { id: number; favorite: boolean }) =>
      toggleLikeApi({ id, favorite }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
    },
  });

  return { toggleLike, isPending, error };
}
