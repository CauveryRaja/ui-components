import { motion } from "framer-motion";
import "./styles.css";

const Card = () => {
  return (
    <div>
      Card animation
      <motion.div className="card" animate={{ x: 100 }} />
    </div>
  );
};

export default Card;
