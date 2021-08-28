import Head from "next/head";
import { Event } from "../const/update";

const Meta = () => {
  return (
    <Head>
      <title>{Event.name} Countdown</title>
    </Head>
  );
};

export default Meta;
