import React from "react";
import Project from "./Project";

import SQLapp from "../assets/SQLemptracker.png";
import Jate from "../assets/texteditor.png";
import task from "../assets/taskboard.png";
import Note from "../assets/Notetaker.png";
import flash from "../assets/CDflashcards.png";
import record from "../assets/recordingstudio.png";

const projectsData = [
  {
    id: 1,
    title: "SQL Employee Tracker",
    description: "SQL app to manage employees",
    image: SQLapp,
    link: "https://github.com/jocephuss/SQL-EmployeeTracker",
  },
  {
    id: 2,
    title: "J.A.T.E",
    description: "PWA Text Editor",
    image: Jate,
    link: "https://pwa-texteditor-2myc.onrender.com/",
  },
  {
    id: 3,
    title: "Task Board",
    description: "To-do List Tracker",
    image: task,
    link: "https://jocephuss.github.io/To-do-list/",
  },
  {
    id: 4,
    title: "Notes App",
    description: "Simple Notepad",
    image: Note,
    link: "https://note-taker-xucn.onrender.com/",
  },
  {
    id: 5,
    title: "Flashcards",
    description: "Flash Card Generator",
    image: flash,
    link: "https://cd-flashcards.onrender.com/",
  },
  {
    id: 6,
    title: "Recording Studio",
    description: "Studio Booking App",
    image: record,
    link: "#", // No live link yet
  },
];

const Portfolio = () => {
  return (
    <div className="port">
      <h1 style={{ textDecoration: "underline" }}>Portfolio</h1>
      <div className="projects">
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
