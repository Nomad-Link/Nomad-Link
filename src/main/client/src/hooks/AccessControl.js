import { Main } from "styles/Pages";

function Access({ message, replace }) {
  if (message === null) {
    window.location.replace(`/${replace}`);
  } else {
    alert(message);
  }

  window.location.replace(`/${replace}`);

  return (
    <Main>
      <h1 style={{margin: "200px"}}>Loading ...</h1>
    </Main>
  );
}

export default Access;
