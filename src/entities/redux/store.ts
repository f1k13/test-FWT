import filterSlice from "@/features/filters-panel/lib/slices/filters-slice";
import cardsSlice from "@/widgets/cards-list/lib/slices/cards-slice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cards: cardsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const UseAppDispatch = () => useDispatch<AppDispatch>();
