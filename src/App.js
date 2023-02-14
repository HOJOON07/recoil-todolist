import React from "react";
import RecoilRoot from "recoil";
import TodoData from "./components/TodoData";

// const todoIdState = atom({
//   key: "todoIdState",
//   default: 1,
// });

// const todoItemQuery = selector({
//   // key: `todoItemQuery/${v1()}`,
//   key: "todoItemQuery",
//   get: async ({ get }) => {
//     const id = get(todoIdState);

//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/todos/${id}`
//     );
//     return response.data;
//   },
// });

function App() {
  // const data = useRecoilValue(todoItemQuery);

  return (
    // <Suspense fallback={() => <p>Loading...</p>}>
    <div className="App">
      <RecoilRoot>
        <TodoData></TodoData>
        {/* {data.title}
      {data.userId} */}
      </RecoilRoot>
    </div>
    // </Suspense>
  );
}

export default App;
