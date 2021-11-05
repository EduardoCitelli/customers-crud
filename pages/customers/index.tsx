import useSWR from "swr";
import { CustomersList } from "../../components/customers/CustomersList";
import { fetcher } from "../../utilities/fetcher";

export default function Customers() {
  const { data, error } = useSWR("/api/customers/", fetcher);

  if (error) {
    return <>{error}</>;
  }

  if (!data) {
    return <>Loading...</>;
  }

  const {
    payload: { list: customers },
  } = data;

  return (
    <>
      <h1>Customers</h1>
      <CustomersList customers={customers} />
    </>
  );
}
