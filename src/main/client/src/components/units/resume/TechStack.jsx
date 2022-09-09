import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "store/StateProvider";
import { Error } from "./TechStack.style";

function TechStack() {
  const [initialState, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars
  const [stack, setStack] = useState([]);
  const [error, setError] = useState(false);

  // const testArr = [
  //   { techName: "apple" },
  //   { techName: "banana" },
  //   { techName: "grape" },
  //   { techName: "orange" },
  //   { techName: "tomato" },
  // ];

  useEffect(() => {
    const url = `/api/techstack`;
    axios
      .get(url)
      .then((response) => setStack(response.data))
      .catch((error) => console.log(error));

    // for (let index in testArr) {
    //   dispatch({
    //     type: `SaveStack`,
    //     item: testArr[index].techName,
    //   });
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [keyword, setKeyword] = useState();
  const [results, setResult] = useState([]);
  const updateField = (field, value, update = true) => {
    if (update) onSearch(value);
    if (field === "keyword") {
      setKeyword(value);
    }
    if (field === "results") {
      setResult(value);
    }
  };
  const onSearch = (text) => {
    var results = stack.filter(
      (item) => true === matchName(item.techName, text)
    );
    setResult({ results });
  };
  const matchName = (name, keyword) => {
    var keyLen = keyword.length;
    name = name.toLowerCase().substring(0, keyLen);
    if (keyword === "") return false;
    return name === keyword.toString().toLowerCase();
  };
  const updateText = (text) => {
    updateField("keyword", "");
    updateField("results", []);
    const overlap = initialState.techStack.findIndex(
      (techStackItem) => techStackItem === text
    );
    if (overlap === -1) {
      dispatch({
        type: `SaveStack`,
        item: text,
      });
      setError(false);
    } else {
      setError(true);
    }
  };
  var renderResults;
  const arr = results["results"];
  if (arr) {
    renderResults = arr.map((item) => {
      return (
        <SearchView
          updateText={updateText}
          name={item.techName}
          key={item.id}
        />
      );
    });
  }
  return (
    <div>
      <input
        placeholder="Search"
        value={keyword || ""}
        onChange={(e) => updateField("keyword", e.target.value)}
      />
      <div>{renderResults}</div>
      {error ? <Error>이미 등록된 기술스택입니다.</Error> : null}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {initialState.techStack.map((techName, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                backgroundColor: "#242",
                color: "#fff",
                margin: "10px",
              }}
            >
              <h3 style={{ margin: "20px" }}>{techName}</h3>
              <span
                onClick={() => dispatch({ type: `DelStack`, item: techName })}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SearchView({ name, updateText }) {
  return (
    <div
      style={{ justifyContent: "center", margin: "auto", width: "140px" }}
      onClick={() => updateText(name)}
    >
      <p style={{ backgroundColor: "#D9D9D9", color: "#000", padding: "5px" }}>
        {name}
      </p>
    </div>
  );
}

export default TechStack;
