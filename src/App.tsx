import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programmas from "./pages/Programmas";
import ParSkolu from "./pages/ParSkolu";
import MacibuProcess from "./pages/MacibuProcess";
import Uznemsana from "./pages/Uznemsana";
import Kontakti from "./pages/Kontakti";
import Aktualitates from "./pages/Aktualitates";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";
import ProgrammaVirziens from "./pages/ProgrammaVirziens";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programmas" element={<Programmas />} />
          <Route path="/programma/:slug" element={<ProgrammaVirziens />} />
          <Route path="/par-skolu" element={<ParSkolu />} />
          <Route path="/macibu-process" element={<MacibuProcess />} />
          <Route path="/uznemsana" element={<Uznemsana />} />
          <Route path="/kontakti" element={<Kontakti />} />
          <Route path="/aktualitates" element={<Aktualitates />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
