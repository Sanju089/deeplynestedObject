import "./styles.css";
import { mockOrgTreeList } from "./mockOrgTreeList";
import { useState } from "react";

export default function App() {
  //Populate list of organisations and its branches.
  //Each branch should be a child of it parent branch.
  const [data1, setData1] = useState(mockOrgTreeList);
  const handleClick = () => {
    setData1(mockOrgTreeList);
  };
  console.log(data1);
  return (
    <>
      <h1>Welcome to Interview</h1>
      <h2>Start editing and show your magic</h2>
      <h3>Organization</h3>
      <button onClick={handleClick}>list</button>
      {data1.map((elem, id) => {
        // const { branches,label1} = elem.branches;
        return (
          <>
            <li key={id}>
              {elem.label}
              <div>
                <ol>
                  {elem.branches.map((elem1) => {
                    return (
                      <li>
                        {elem1.label}
                        <div>
                          <ul>
                            {elem1.branches.map((elem2) => {
                              return <li>{elem2.label}</li>;
                            })}
                          </ul>
                        </div>
                      </li>
                    );
                  })}{" "}
                </ol>
              </div>
            </li>
          </>
        );
      })}
    </>
  );
}
