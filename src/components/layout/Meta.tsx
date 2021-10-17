import Head from "next/head";
import { now } from "../const/now";

const Meta = () => {
  return (
    <Head>
      <title>{now.name} Countdown</title>
      <meta name="twitter:image" content="https://events-countdown.vercel.app/preview_image.png" />
    </Head>
  );
};

export default Meta;
