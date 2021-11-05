import fs from "fs";
import { NextApiHandler } from "next";
import customers from "./../../../mocks/customers.json";

const AddCustomer: NextApiHandler = ({ body, method }, res) => {
    switch (method) {
        case "POST":
            const { customer } = JSON.parse(body);

            const updatedCustomer = [...customers, customer];

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

        default:
            return res.status(405).end();
    }
};

export default AddCustomer;
