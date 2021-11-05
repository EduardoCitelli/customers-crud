import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { Customer } from "../../../entities/Customer";
import customers from "./../../../mocks/customers.json";

const SingleCustomer: NextApiHandler = (request: NextApiRequest, response: NextApiResponse) => {
    switch (request.method) {
        case "GET":
            const { customerId } = request.query;

            const customer = customers.find(({ id }: Customer) => id === customerId);

            if (customer) {
                return response.status(200).send({
                    status: "ok",
                    payload: {
                        item: customer,
                    },
                });
            }

            return response.status(404).send({
                status: "error",
                msg: `No item found with ID: ${customerId}`,
            });

        default:
            response.status(405).end();
            break;
    }
};

export default SingleCustomer;
