import React from "react";
import SQLapp from "../assets/SQLemptracker.png";
import Jate from "../assets/texteditor.png";
import task from "../assets/taskboard.png";
import Note from "../assets/Notetaker.png";
import flash from "../assets/flashcard.png";

function Project({ title }) {
  return (
    <div className="projects">
      <div className="links">
        <h2>SQL:</h2>
        <p>SQL "Employee tracker"</p>

        <a
          href={`https://github.com/jocephuss/SQL-EmployeeTracker`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={SQLapp}
            alt={title}
            style={{ width: "400px", height: "auto" }}
          />
        </a>
      </div>
      <div className="links">
        <h2>J.A.T.E:</h2>
        <p>PWA Text editor</p>

        <a
          href={`https://pwa-texteditor-2myc.onrender.com/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Jate}
            alt={title}
            style={{ width: "400px", height: "auto" }}
          />
        </a>
      </div>
      <div className="links">
        <h2>To do list:</h2>
        <p>Task tracker</p>

        <a
          href={`https://jocephuss.github.io/To-do-list/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={task}
            alt={title}
            style={{ width: "400px", height: "auto" }}
          />
        </a>
      </div>
      <div className="links">
        <h2>Notes:</h2>
        <p>Note pad</p>

        <a
          href={`https://note-taker-xucn.onrender.com/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Note}
            alt={title}
            style={{ width: "400px", height: "auto" }}
          />
        </a>
      </div>
      <div className="links">
        <h2>Flash cards:</h2>
        <p>Flash card generator</p>

        <a
          href={`https://jocephuss.github.io/CD-FlashCards/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={flash}
            alt={title}
            style={{ width: "400px", height: "auto" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Project;
