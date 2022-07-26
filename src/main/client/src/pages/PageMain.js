import "./test.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";

function PageMain() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="page-main">
      <h1>jsonplaceholder</h1>
      <br />
      <div>
        <textarea
          rows={30}
          cols={83}
          value={JSON.stringify(user, null, 3)}
          readOnly={true}
        />
      </div>
    </main>
  );
}

export default PageMain;
