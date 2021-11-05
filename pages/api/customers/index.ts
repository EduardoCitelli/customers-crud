import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import customers from "./../../../mocks/customers.json";

const Customers: NextApiHandler = (request: NextApiRequest, response: NextApiResponse) => {
  switch (request.method) {
    case "GET":
      return response.status(200).send({
        status: "ok",
        payload: {
          list: customers,
        },
      });

    default:
      response.status(405).end();
      break;
  }
};

export default Customers;