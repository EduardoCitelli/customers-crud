import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Customer } from "../../../entities/Customer";
import { BaseCustomerForm, SubmitButton } from "./BaseCustomerForm";

interface Props { }

type FormStatus = "Success" | "Error" | null;

export const AddCustomerForm = ({ }: Props) => {
    const [status, setStatus] = useState<FormStatus>(null);

    const onAddCustomerHandler: SubmitHandler<Omit<Customer, "id">> = async (
        customer
    ) => {
        const response = await fetch("/api/customers/new", {
            method: "POST",
            body: JSON.stringify({
                customer: {
                    ...customer,
                },
            }),
        });

        const { status } = await response.json();

        const statusMapper: Record<string, FormStatus> = {
            ok: "Success",
            error: "Error",
        };

        setStatus(statusMapper[status]);
    };

    return (
        <BaseCustomerForm onSubmit={onAddCustomerHandler}>
            <SubmitButton>Add new customer</SubmitButton>
            {status}
        </BaseCustomerForm>
    );
};