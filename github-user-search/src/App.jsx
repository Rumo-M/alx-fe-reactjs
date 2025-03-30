import React from "react";
import Search from "./components/Search"; // ✅ Correct import

function App() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;

