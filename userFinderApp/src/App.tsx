import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import SearchBar from "./pages/searchbar/SearchBar";

function App() {
  return (
    <div className="h-screen w-screen bg-[#141c2f] flex items-center justify-center flex-col flex-wrap max-[552px]:w-screen">
      <div className="flex w-1/2 flex-wrap flex-col max-[805px]:w-4/6 max-[695px]:w-full max-[552px]:w-11/12 max-[552px]:items-center max-[552px]:justify-center">
        <Navbar />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
