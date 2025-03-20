import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import { api } from './services/api';
import { setupListeners } from '@reduxjs/toolkit/query';

// This is safe to import in server components
export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ['search/setDateRange'],
          // Ignore these field paths in all actions
          ignoredActionPaths: ['payload.from', 'payload.to'],
          // Ignore these paths in the state
          ignoredPaths: ['search.dateRange'],
        },
      }).concat(api.middleware),
  });
};

// Only use this in client components
export const store = makeStore();

// Enable refetchOnFocus and refetchOnReconnect
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;