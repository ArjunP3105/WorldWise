import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            The WorldWise app is a travel-tracking application built with Vite +
            React, designed to help users log and visualize the places they have
            visited. It features an interactive map where users can mark
            locations, making it easy to keep track of their travels. The app
            provides a seamless experience with efficient state management,
            ensuring smooth interactions as users add, update, or remove
            locations.
          </p>
        </div>
      </section>
    </main>
  );
}
