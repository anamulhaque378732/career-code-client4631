import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/teamCelebration.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-sm rounded-t-[40px] rounded-br-2xl border-blue-600 border-s-8  border-b-8 shadow-4xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 3, repeat: Infinity }}
            className="max-w-sm rounded-t-[40px] rounded-br-2xl border-blue-600 border-s-8  border-b-8 shadow-4xl"
          />
        </div>
        <div className="flex-1">
          {/* <motion.h1
            animate={{
              rotate: 180,
              x: 200,
              y: 200,
              transition: { duration: 4 },
            }}
            className="text-5xl font-bold"
          >
            Latest job for you!!
          </motion.h1> */}
          <motion.h1
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 4 },
            }}
            className="text-5xl font-bold"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: ["#9E3E2B", "#442B9E", "#2B9E7F"],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              Job
            </motion.span>{" "}
            for you!!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
