import { NextApiRequest, NextApiResponse } from "next";
import { Event } from "../../components/const/event";

const event = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({
	  Event
  });
};

export default event;
