import fs from "fs";
import { NextApiHandler } from "next";
import { Customer } from "../../../../entities/Customer";
import customers from "../../../../mocks/customers.json";

const DeleteCustomer: NextApiHandler = ({ query, method }, res) => {
    switch (method) {
        case "DELETE": {
            const { customerId } = query;

            const customer = customers.find((customer: Customer) => customer?.id === customerId);

            if (customer) {
                const updatedCustomer = customers.filter(
                    (customer: Customer) => customer?.id !== customerId
                );

                fs.writeFileSync(
                    `${process.cwd()}/mocks/customers.json`,
                    JSON.stringify(updatedCustomer)
                );

                return res.status(200).send({
                    status: "ok",
                    payload: {
                        item: customer,
                    },
                });
            }

            return res.status(404).send({
                status: "error",
                msg: `No item found with ID: ${customerId}`,
            });
        }

        default:
            res.status(405).end();
            break;
    }
};

export default DeleteCustomer;
