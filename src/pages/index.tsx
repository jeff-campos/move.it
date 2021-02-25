import styled from "styled-components";
import BasicLayout from "../styles/global";
import ExperienceBar from "../components/ExperienceBar";

import Profile from "../components/Profile";
import CompletedChanllenges from "src/components/CompletedChanllenges";
import Countdown from "src/components/Countdown";

import Head from "next/head";
import ChallengeBox from "src/components/ChallengeBox";

const Container = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5.25rem;
  align-content: center;

  & > div {
    flex-basis: 50%;
  }
`;

export default function Home() {
  return (
    <BasicLayout>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />
      <Container>
        <div>
          <Profile />
          <CompletedChanllenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </Container>
    </BasicLayout>
  );
}
