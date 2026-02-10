import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// combine / immer 미들웨어 사용
export const useCountStore = create(
  immer(
    combine({ count: 0 }, (set, get) => ({
      actions: {
        // action 함수
        increase: () => {
          set((state) => {
            state.count += 1;
          });
        },

        decrease: () => {
          set((state) => {
            state.count -= 1;
          });
        },
      },
    })),
  ),
);

// type Store = {
//   count: number;
//   actions: {
//     increase: () => void;
//     decrease: () => void;
//   };
// };

// // 제네릭 타입변수로 Store를 제공
// export const useCountStore = create<Store>((set, get) => ({
//   // state: count
//   count: 0,
//   actions: {
//     // action 함수
//     increase: () => {
//       // const count = get().count;
//       // set({ count: count + 1 });
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },

//     decrease: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};
