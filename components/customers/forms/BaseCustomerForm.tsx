import { PropsWithChildren } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Customer } from "../../../entities/Customer";

type FormInputs = {
  name: string;
  type: number;
};

interface BaseCustomerProps {
  defaultValues?: FormInputs;
  onSubmit: SubmitHandler<Omit<Customer, "id">>;
}

export const BaseCustomerForm = ({
  defaultValues,
  children,
  onSubmit,
}: PropsWithChildren<BaseCustomerProps>) => {
  const { register, handleSubmit } = useForm<FormInputs>({
    mode: "onSubmit",
    defaultValues: {
      ...defaultValues,
    },
    delayError: undefined,
  });

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="model">Name</label>
      <input style={{ marginBottom: "1rem" }} {...register("name")} />
      
      <label htmlFor="status">Type</label>
      <select style={{ marginBottom: "1rem" }} {...register("type")}>
        <option value="1">Builder</option>
        <option value="2">Private</option>
      </select>
      
      {children}
    </form>
  );
};

export const SubmitButton = ({ children }: PropsWithChildren<{}>) => {
  return <button type="submit">{children}</button>;
};
