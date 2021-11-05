import { useRouter } from "next/router";
import useSwr from "swr";
import { EditCustomerForm } from "../../../components/customers/forms/EditCustomerForm";
import { fetcher } from "../../../utilities/fetcher";

export default function EditCustomer() {
  const { query: { customerId }, } = useRouter();

  const { data, error } = useSwr(`/api/customers/${customerId}`, fetcher);

  if (error) {
    return <>{error}</>;
  }

  if (!data) {
    return <>Loading...</>;
  }

  const {
    payload: { item: customer },
  } = data;

  return (
    <>
      <h1>Edit customer</h1>
      {customer && <EditCustomerForm customer={customer}></EditCustomerForm>}
    </>
  );
}
