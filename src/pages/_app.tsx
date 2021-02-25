import { ChallengeProvider } from "src/context/challengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />)
    </ChallengeProvider>
  );
}

export default MyApp;
