import { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [testData, setTestData] = useState([]);
  
  useEffect(() => {
    const url = `/api/enterprise/recruit/developers`;
    axios
      .get(url)
      .then((response) => setTestData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <textarea
        rows={30}
        cols={90}
        value={JSON.stringify(testData, null, 5)}
        readOnly={true}
      />
    </div>
  );
}

export default Test;
