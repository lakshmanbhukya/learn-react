import { motion } from "framer-motion";
import CardSection from "../components/CardsSection.jsx";

export default function HomeSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col justify-center items-center h-[654px] bg-slate-300">
          <h1 className="text-black font-bold text-7xl text-opacity-75">
            Welcome to the Home Page!
          </h1>
          <p className="text-black my-5 font-semibold text-xl text-opacity-70">
            Lorem ipsum dolor sit amet adipisicing elit. In, ducimus lakshman.
          </p>
          <div>
            <button type="button" className="mx-4">
              Click Me
            </button>
            <button type="button">Click Me</button>
          </div>
        </div>
      </motion.div>
      <CardSection />
    </>
  );
}
