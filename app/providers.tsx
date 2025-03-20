"use client";

import { Provider } from "react-redux";
import { makeStore } from "@/store";

// Create a store instance for the client
const store = makeStore();

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
} 