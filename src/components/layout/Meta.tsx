import Head from "next/head";
import { Event } from "../const/event";

const Meta = () => {
  return (
    <Head>
      <title>{Event.name} Countdown</title>
      <meta name="twitter:image" content="https://events-countdown.vercel.app/preview_image.png" />
    </Head>
  );
};

export default Meta;
