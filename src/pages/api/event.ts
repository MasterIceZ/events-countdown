import { NextApiRequest, NextApiResponse } from "next";
import { current } from "../../components/const/now";

const event = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({
	  current
  });
};

export default event;
