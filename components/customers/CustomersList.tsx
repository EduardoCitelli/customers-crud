import Link from "next/link";
import { Customer } from "../../entities/Customer";
import styles from "./../../styles/Styles.module.css";
interface Props {
    customers: Customer[];
}

export const CustomersList = ({ customers }: Props) => {
    return (
        <>
            <Link href={`/customers/new`}>Add a customer ➕</Link>

            <div className={styles.grid}>
                {customers.map((customer) => {
                    return (
                        <div key={customer.id} className={styles.card}>
                            <h2>{customer.name}</h2>
                            <p>Type: {customer.type}</p>
                            <hr />

                            <Link href={`/customers/edit/${customer.id}`}>
                                <a>Edit ✍</a>
                            </Link>

                            <button onClick={deleteOnClickHandler(customer)}>Delete 🗑</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const deleteOnClickHandler = (customer: Customer) => {
    return async () => {
        if (window.confirm("Are you sure you want to delete this item? 🚧")) {
            const response = await fetch(`api/customers/delete/${customer.id}`, {
                method: "DELETE",
            });

            const {
                payload: { status, msg },
            } = await response.json();

            if (status === "error")
                return alert(msg);

            window.location.reload();
        }
    };
};
