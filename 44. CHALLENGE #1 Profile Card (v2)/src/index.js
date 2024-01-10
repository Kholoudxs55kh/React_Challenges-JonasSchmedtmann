import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "CSS",
    level: "good",
    color: "green",
  },
  {
    skill: "HTML",
    level: "very-good",
    color: "red",
  },
  {
    skill: "JavaScript",
    level: "very-good",
    color: "blue",
  },
  {
    skill: "Python",
    level: "good",
    color: "lightblue",
  },
  {
    skill: "C-Lang",
    level: "baby",
    color: "yellow",
  },
];

function App() {
  return (
    <div className="card">
      <img
        src="https://avatars.githubusercontent.com/u/120126262?v=4"
        alt="My avatar"
        className="avatar"
      />
      <h2>Kholoud Fattem</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        consequuntur explicabo aut reiciendis ipsa vel omnis amet ab dolores
        saepe totam earum expedita deleniti blanditiis magnam culpa officia sint
        consequatur!
      </p>
      <div className="skills">
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </div>
  );
}

function Skill({ skill }) {
  // if (skill.level == "baby") skill.level = "C";
  // if (skill.level == "good") skill.level = "B";
  // if (skill.level == "very-good") skill.level = "A";
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <p>
        {" "}
        {skill.skill} "
        {skill.level == "baby" ? "C" : skill.level == "good" ? "B" : "A"}"
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
