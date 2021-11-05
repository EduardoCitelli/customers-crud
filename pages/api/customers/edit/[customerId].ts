import fs from "fs";
import { NextApiHandler } from "next";
import customers from "./../../../../mocks/customers.json";

const UpdateCustomer: NextApiHandler = ({ body, query, method }, res) => {
  switch (method) {
    case "PUT": {
      const { customerId } = query;
      const { customer } = JSON.parse(body);

      const foundCustomer = customers.find((customer) => customer?.id === customerId);

      if (foundCustomer) {
        const updatedCustomer = { ...foundCustomer, ...customer };

        const updatedCustomers = [
          ...customers.filter((customer) => customer?.id !== customerId),
          updatedCustomer,
        ];

        fs.writeFileSync(
          `${process.cwd()}/mocks/customers.json`,
          JSON.stringify(updatedCustomers)
        );

        return res.status(200).send({
          status: "ok",
          payload: {
            item: foundCustomer,
          },
        });
      }

      return res.status(404).send({
        status: "error",
        msg: `No item found with ID: ${customerId}`,
      });
    }
    default:
      res.status(405).end(); //Method Not Allowed
      break;
  }
};

export default UpdateCustomer;
