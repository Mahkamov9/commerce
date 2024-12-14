import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/router";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { productImg } from "./assets/images/images";

export const DataContext = createContext()



function App() {

  const data={
    likeData:[],
    curtData:[]
  }

  return (
    <DataContext.Provider value={data}>
      <>
        <RouterProvider router={routes} />
      </>
    </DataContext.Provider>
  );
}

export default App;