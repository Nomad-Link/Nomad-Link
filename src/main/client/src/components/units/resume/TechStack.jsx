import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "store/StateProvider";
import {
  Div,
  BoxSearch,
  TechSearch,
  Result,
  ResultText,
  BoxStack,
  TechName,
  DelButton,
  Error,
} from "./TechStack.style";

function TechStack({ uTech, type }) {
  const [initialState, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars
  const [stack, setStack] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `/api/techstack`;
    axios
      .get(url)
      .then((response) => setStack(response.data))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch({ type: `DelStackAll` });
    for (let index in uTech) {
      dispatch({
        type: `SaveStack`,
        item: uTech[index].techName,
      });
    }
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
    <Div>
      <BoxSearch>
        <TechSearch
          placeholder="기술 스택을 검색하여 추가하세요."
          value={keyword || ""}
          onChange={(e) => updateField("keyword", e.target.value)}
        />
        <Result>
          {renderResults}
          {error ? <Error>이미 등록된 기술스택입니다.</Error> : null}
        </Result>
      </BoxSearch>
      <BoxStack style={{ display: "flex", flexWrap: "wrap" }}>
        {initialState.techStack.length === 0 ? (
          <h1 style={{ color: "#000087" }}>
            등록된 기술스택이 없습니다. 추가해주세요.
          </h1>
        ) : null}
        {initialState.techStack.map((techName, index) => {
          return (
            <TechName key={index}>
              {techName.length > 13 ? (
                <p style={{ marginTop: "8px", fontSize: "12px" }}>{techName}</p>
              ) : (
                <p style={{ marginTop: "6px" }}>{techName}</p>
              )}
              <DelButton
                onClick={() => dispatch({ type: `DelStack`, item: techName })}
              >
                X
              </DelButton>
            </TechName>
          );
        })}
      </BoxStack>
    </Div>
  );
}

function SearchView({ name, updateText }) {
  return <ResultText onClick={() => updateText(name)}>{name}</ResultText>;
}

export default TechStack;
