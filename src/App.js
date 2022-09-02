import { Octokit } from "octokit";
import { createOAuthDeviceAuth } from "@octokit/auth-oauth-device";

const auth = async () => {
  const octokit = new Octokit({
    authStrategy: createOAuthDeviceAuth,
    auth: {
      clientId: "c70e3f7ef445b54312ba",
      scopes: [`public_repo`],
      onVerification(verification) {
        console.error(
          `please visit the following link in your browser (login your github account if required):`
        );
        console.error();
        console.error(`${verification.verification_uri}`);
        console.error();
        console.error(`and then enter the following code:`);
        console.error();
        console.error(`${verification.user_code}`);
        console.error();
      },
    },
  });
  const auth = await octokit.auth({ type: "oauth" });
  console.error(`export GITHUB_AUTH_TOKEN=${auth.token}`);
};

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          // console.log("test");
          auth();
        }}
      >
        Test
      </button>
    </div>
  );
}

export default App;
