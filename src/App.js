import LoginGithub from "react-login-github";

const onSuccess = (response) => console.log(response);
const onFailure = (response) => console.error(response);

function App() {
  return (
    <div className="App">
      <LoginGithub
        clientId="Iv1.f0decd051fd9c5aa"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}

export default App;
