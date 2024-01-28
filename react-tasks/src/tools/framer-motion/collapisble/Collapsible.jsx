import { motion } from "framer-motion";
import { useState } from "react";
import "./styles.css";

const Collapsible = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="container">
      <div className="header" onClick={() => setIsExpanded(!isExpanded)}>
        Click here to expand
      </div>
      <motion.div
        className="body"
        animate={{ y: isExpanded ? 100 : -50, opacity: isExpanded ? 1 : 0 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi mollitia
        non praesentium, facilis exercitationem commodi debitis totam
        necessitatibus quam consequuntur!
      </motion.div>
    </section>
  );
};

export default Collapsible;
