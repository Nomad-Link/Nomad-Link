function Access({ message, replace }) {
  if (message === null) {
    window.location.replace(`/${replace}`);
  } else {
    alert(message);
  }

  window.location.replace(`/${replace}`);

  return (
    <div>
      <h1>Login Access</h1>
    </div>
  );
}

export default Access;
