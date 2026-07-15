import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import bulletinReducer from "@/features/bulletin/store/bulletinSlice";
import betslipReducer from "@/features/betslip/store/betslipSlice";
import analyticsMiddleware from "@/store/analyticsMiddleware";

const betslipPersistConfig = {
  key: "betslip",
  storage: sessionStorage,
};

export const store = configureStore({
  reducer: {
    bulletin: bulletinReducer,
    betslip: persistReducer(betslipPersistConfig, betslipReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(analyticsMiddleware),
});

export const persistor = persistStore(store);
