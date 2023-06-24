import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import SearchBar from "./pages/searchbar/SearchBar";

function App() {
  return (
    <div className="h-screen w-screen bg-[#141c2f] flex items-center justify-center flex-col flex-wrap">
      <div className="flex w-1/2 flex-wrap flex-col">
        <Navbar />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
