import withReveal from "../withReveal";
import "./styles.css";

const CardGrid = () => {
  return (
    <section className="cards-grid">
      <div className="card" />
      <div className="card" />
      <div className="card" />
    </section>
  );
};

export default withReveal(CardGrid);
