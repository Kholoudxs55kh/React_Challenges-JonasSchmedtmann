import "./styles.css";

export default function App() {
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
        <Skill skill={"CSS"} style={{ backgroundColor: "green" }} />
        <Skill skill={"HTML"} style={{ backgroundColor: "red" }} />
        <Skill skill={"JavaScript"} style={{ backgroundColor: "blue" }} />
        <Skill skill={"Python"} style={{ backgroundColor: "green" }} />
        <Skill skill={"React"} style={{ backgroundColor: "red" }} />
        <Skill skill={"MEANSTACK"} style={{ backgroundColor: "yellow" }} />
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={props.style}>
      <p> {props.skill}</p>
    </div>
  );
}
