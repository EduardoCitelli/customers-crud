import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Customer } from "../../../entities/Customer";
import { BaseCustomerForm, SubmitButton } from "./BaseCustomerForm";

interface Props {
    customer: Customer;
}

type FormStatus = "Success" | "Error" | null;

export const EditCustomerForm = ({ customer }: Props) => {
    const [status, setStatus] = useState<FormStatus>(() => null);
    const onEditCustomerHandler: SubmitHandler<Omit<Customer, "id">> = async (
        data
    ) => {
        const response = await fetch(
            `/api/customers/edit/${customer.id}`,
            {
                method: "PUT",
                body: JSON.stringify({
                    customer: {
                        ...data,
                    },
                }),
            }
        );

        const { status } = await response.json();

        const statusMapper: Record<string, FormStatus> = {
            ok: "Success",
            error: "Error",
        };

        setStatus(statusMapper[status]);
    };

    const { id, ...data } = customer;

    return (
        <BaseCustomerForm defaultValues={data} onSubmit={onEditCustomerHandler}>
            <SubmitButton>Edit customer</SubmitButton>
            {status}
        </BaseCustomerForm>
    );
};
