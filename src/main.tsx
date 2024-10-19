import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "@/app/App.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </RecoilRoot>
);
