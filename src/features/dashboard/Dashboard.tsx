
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  GitBranch,
  Layers3,
  Network,
  Search,
  Sparkles,
  Eye,
  FlaskConical,
  Workflow,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./Dashboard.css";

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const topics = [
  {
    title: "Stacks",
    category: "DATA STRUCTURE",
    description: "Last in. First out. The newest drama gets handled first.",
    icon: Layers3,
    color: "purple",
    destination: "Data Structures",
    number: "01",
  },
  {
    title: "Queues",
    category: "DATA STRUCTURE",
    description: "No cutting the line. We have rules here.",
    icon: Boxes,
    color: "mint",
    destination: "Data Structures",
    number: "02",
  },
  {
    title: "Linked Lists",
    category: "DATA STRUCTURE",
    description: "Trust issues? Every node only knows its neighbour.",
    icon: GitBranch,
    color: "orange",
    destination: "Data Structures",
    number: "03",
  },
  {
    title: "Searching",
    category: "ALGORITHM",
    description: "Find what you're looking for without losing your mind.",
    icon: Search,
    color: "pink",
    destination: "Algorithms",
    number: "04",
  },
  {
    title: "Sorting",
    category: "ALGORITHM",
    description: "Because chaos is not a valid sorting strategy.",
    icon: Network,
    color: "blue",
    destination: "Algorithms",
    number: "05",
  },
];

function HeroVisual() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-glow" />

      <div className="art-label label-top">
        <span className="status-dot" />
        SYSTEM READY
      </div>

      <div className="art-orbit orbit-outer" />
      <div className="art-orbit orbit-inner" />

      <motion.div
        className="art-node node-top"
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>01</span>
      </motion.div>

      <motion.div
        className="art-node node-right"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>02</span>
      </motion.div>

      <motion.div
        className="art-node node-left"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>03</span>
      </motion.div>

      <div className="art-connector connector-one" />
      <div className="art-connector connector-two" />
      <div className="art-connector connector-three" />

      <motion.div
        className="art-core"
        animate={{ y: [0, -5, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="core-symbol">
          <span>DS</span>
          <small>LAB</small>
        </div>
        <div className="core-caption">THINK IN STRUCTURES.</div>
      </motion.div>

      <div className="art-code-chip chip-one">
        <span className="chip-dot purple-dot" />
        PUSH(04)
      </div>
      <div className="art-code-chip chip-two">
        <span className="chip-dot mint-dot" />
        NEXT → NODE
      </div>

      <div className="art-label label-bottom">BUILT FOR CURIOSITY ✳</div>
    </div>
  );
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const reduceMotion = useReducedMotion();

  const enter = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
        variants: reveal,
        transition: { duration: 0.55, ease: "easeOut" as const },
      };

  return (
    <main className="dashboard">
      {/* HERO */}
      <motion.section className="dashboard-hero" {...enter}>
        <div className="hero-grid-pattern" aria-hidden="true" />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <Sparkles size={15} />
            <span>WELCOME TO THE LAB</span>
            <span className="eyebrow-line" />
            <span className="hero-edition">EST. FOR THE CURIOUS</span>
          </div>

          <h2>
            DSA isn't
            <br />
            <span className="hero-white">that deep.</span>
            <br />
            <span className="hero-gradient">Until you understand it.</span>
          </h2>

          <p className="hero-description">
            Forget memorising code. Get inside the logic. Pull things apart,
            watch them work, and make those confusing concepts finally click.
          </p>

          <div className="hero-actions">
            <motion.button
              className="hero-button"
              whileHover={reduceMotion ? {} : { y: -3, scale: 1.025 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate("Data Structures")}
            >
              Enter the lab <ArrowRight size={18} />
            </motion.button>

            <span className="hero-side-note">
              <Zap size={14} /> NO BORING LECTURES. PROMISE.
            </span>
          </div>
        </div>

        <HeroVisual />

        <div className="hero-bottom-label">
          <span>01 / EXPLORE</span>
          <span>02 / VISUALISE</span>
          <span>03 / UNDERSTAND</span>
        </div>

        <div className="hero-index">DSA LAB — 001</div>
      </motion.section>

      {/* DISCOVERY */}
      <motion.section className="dashboard-section" {...enter}>
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">YOUR LEARNING UNIVERSE / 01</span>
            <h2>Where do we start<span className="heading-period">?</span></h2>
            <p>Two doors. An unreasonable amount of things to discover.</p>
          </div>
          <span className="section-side-note">CHOOSE YOUR PATH ↘</span>
        </div>

        <div className="discovery-grid">
          <motion.button
            className="discovery-card structures-card"
            whileHover={reduceMotion ? {} : { y: -7 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onNavigate("Data Structures")}
          >
            <div className="discovery-card-top">
              <div className="discovery-icon purple-icon">
                <Layers3 size={25} />
              </div>
              <span className="card-index">FIELD NOTES / 001</span>
              <ArrowUpRight size={21} className="card-arrow" />
            </div>

            <div className="discovery-card-content">
              <span className="card-kicker">BUILD YOUR FOUNDATIONS</span>
              <h3>Data <span>Structures.</span></h3>
              <p>
                Arrays, stacks, queues, linked lists and more. Give your data
                somewhere to live.
              </p>
            </div>

            <div className="structure-art" aria-hidden="true">
              <div className="structure-art-caption">STACK / LIFO</div>
              <div className="mini-stack">
                <span>04</span>
                <span>03</span>
                <span>02</span>
                <span>01</span>
              </div>
              <div className="stack-pointer">TOP ↗</div>
            </div>

            <span className="discovery-link">
              Explore structures <ArrowRight size={16} />
            </span>
          </motion.button>

          <motion.button
            className="discovery-card algorithms-card"
            whileHover={reduceMotion ? {} : { y: -7 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onNavigate("Algorithms")}
          >
            <div className="discovery-card-top">
              <div className="discovery-icon teal-icon">
                <Workflow size={25} />
              </div>
              <span className="card-index">FIELD NOTES / 002</span>
              <ArrowUpRight size={21} className="card-arrow" />
            </div>

            <div className="discovery-card-content">
              <span className="card-kicker">MAKE THINGS HAPPEN</span>
              <h3>Algo<span>rithms.</span></h3>
              <p>
                Sorting, searching, recursion and more. Follow the logic.
                Understand the moves.
              </p>
            </div>

            <div className="algorithm-art" aria-hidden="true">
              <div className="algorithm-art-caption">EXECUTION / FLOW</div>
              <div className="flow-node flow-start">START</div>
              <div className="flow-line" />
              <div className="flow-node flow-active">PROCESS</div>
              <div className="flow-line" />
              <div className="flow-node flow-end">DONE</div>
            </div>

            <span className="discovery-link">
              Explore algorithms <ArrowRight size={16} />
            </span>
          </motion.button>
        </div>
      </motion.section>

      {/* RABBIT HOLES */}
      <motion.section className="dashboard-section rabbit-section" {...enter}>
        <div className="section-heading rabbit-heading">
          <div>
            <span className="section-eyebrow">A LITTLE CURIOSITY NEVER HURT / 02</span>
            <h2>Pick your next rabbit hole<span className="heading-period">.</span></h2>
            <p>Five places to start. Zero reasons to be intimidated.</p>
          </div>

          <button
            className="text-link"
            onClick={() => onNavigate("Data Structures")}
          >
            Browse everything <ArrowUpRight size={17} />
          </button>
        </div>

        <div className="rabbit-grid">
          {topics.map((topic, index) => {
            const Icon = topic.icon;

            return (
              <motion.button
                key={topic.title}
                className={`rabbit-card rabbit-${topic.color}`}
                whileHover={reduceMotion ? {} : { y: -6, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => onNavigate(topic.destination)}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className="rabbit-card-top">
                  <div className="rabbit-icon"><Icon size={21} /></div>
                  <span className="rabbit-number">{topic.number}</span>
                </div>
                <span className="rabbit-category">{topic.category}</span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <span className="rabbit-arrow"><ArrowUpRight size={19} /></span>
                <span className="rabbit-card-decoration" />
              </motion.button>
            );
          })}
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section className="dashboard-section method-section" {...enter}>
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">THE METHOD / 03</span>
            <h2>Less memorising. More understanding<span className="heading-period">.</span></h2>
            <p>We don't just show you what happens. We help you figure out why.</p>
          </div>
        </div>

        <div className="lab-steps">
          <div className="lab-step">
            <div className="step-topline">
              <div className="step-icon step-explore"><Search size={21} /></div>
              <span className="step-number">01</span>
            </div>
            <span className="step-kicker">EXPLORE</span>
            <h3>Get curious.</h3>
            <p>Meet the concept. Understand the idea before touching the code.</p>
          </div>

          <div className="step-connector"><ArrowRight size={20} /></div>

          <div className="lab-step">
            <div className="step-topline">
              <div className="step-icon step-visualise"><Eye size={21} /></div>
              <span className="step-number">02</span>
            </div>
            <span className="step-kicker">VISUALISE</span>
            <h3>See the magic.</h3>
            <p>Watch every operation unfold, one step at a time.</p>
          </div>

          <div className="step-connector"><ArrowRight size={20} /></div>

          <div className="lab-step">
            <div className="step-topline">
              <div className="step-icon step-experiment"><FlaskConical size={21} /></div>
              <span className="step-number">03</span>
            </div>
            <span className="step-kicker">EXPERIMENT</span>
            <h3>Make it click.</h3>
            <p>Try it yourself. Break things. Figure out why they broke.</p>
          </div>
        </div>
      </motion.section>

      <footer className="dashboard-footer">
        <span>DSA LAB <span className="footer-star">✳</span> BUILT FOR THE CURIOUS.</span>
        <span>LESS MEMORISING. MORE UNDERSTANDING.</span>
      </footer>
    </main>
  );
}
