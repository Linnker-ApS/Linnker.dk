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
          // Ignore RTK Query specific paths
          ignoredActions: [
            'search/setDateRange',
            'api/executeQuery/fulfilled'
          ],
          ignoredActionPaths: [
            'meta.baseQueryMeta.request',
            'meta.baseQueryMeta.response'
          ],
          ignoredPaths: [
            'search.dateRange',
            `${api.reducerPath}.queries`
          ],
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