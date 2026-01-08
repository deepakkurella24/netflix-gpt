import Body from "./components/Body"
import { MyContext } from "./utils/store";
import {useState } from "react";



function App() {
  const [value, setValue] = useState("");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      <Body />
    </MyContext.Provider>
  )
}

export default App
