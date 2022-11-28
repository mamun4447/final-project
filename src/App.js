import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} /> <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;
