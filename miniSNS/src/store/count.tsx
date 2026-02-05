import { create } from "zustand";

type Store = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

// 제네릭 타입변수로 Store를 제공
export const useCountStore = create<Store>((set, get) => ({
  // state: count
  count: 0,
  // action 함수
  increase: () => {
    // const count = get().count;
    // set({ count: count + 1 });
    set((store) => ({
      count: store.count + 1,
    }));
  },

  decrease: () => {
    set((store) => ({
      count: store.count - 1,
    }));
  },
}));
