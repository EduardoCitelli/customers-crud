import { AddCustomerForm } from "../../components/customers/forms/AddCustomerForm";

interface Props { }

export default function AddCustomer(props: Props) {
  return (
    <>
      <h1>New customer</h1>
      <AddCustomerForm />
    </>
  );
}
