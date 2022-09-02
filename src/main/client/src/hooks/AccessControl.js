function Access() {
  alert("로그인 시 사용 가능한 기능입니다.\n로그인을 해주세요.");
  window.location.replace("/login");

  return (
    <div>
      <h1>Login Access</h1>
    </div>
  );
}

export default Access;
