/* ============================================================
   EDIT THIS FILE to change your portfolio content.
   To add an item, copy an existing { ... } block, paste it
   after a comma, and change the text. Newest items go first.
   ============================================================ */

const DATA = {

  experience: [
    {
      role: "Software Testing Engineer",
      company: "EPAM",
      context: "Epic Games live-service title",
      dates: "Dates",
      bullets: [
        "Ran performance and stress tests across six platforms and was the main point of contact for Xbox.",
        "Built automations in Python (Playwright) and Go, plus a regex log parser that turned raw logs into CSV.",
        "Created a Google Data Studio dashboard and worked with TeamCity and Horde CI/CD pipelines.",
        "Led onboarding for cohorts of about 30 new hires."
      ]
    },
    {
      role: "QA Analyst",
      company: "VML",
      context: "Content QA for L'Oréal, United Airlines, Ford and MetLife",
      dates: "Dates",
      bullets: []
    },
    {
      role: "QA Analyst",
      company: "Globant",
      context: "EA projects: Madden NFL 25 and College Football 25",
      dates: "Dates",
      bullets: [
        "Tested on Xbox, PlayStation and PC and tracked issues in Jira."
      ]
    }
  ],

  education: [
    {
      role: "Systems Engineering (bachelor's degree)",
      company: "University name",
      context: "In progress",
      dates: "Start year - present",
      bullets: []
    },
    {
      role: "Diplomatura in Data Science",
      company: "Coderhouse",
      context: "",
      dates: "Dates",
      bullets: []
    }
  ],

  projects: [
    {
      title: "Log parser to CSV",
      description: "Regex-based tool that turns game performance logs into clean CSV files ready for analysis.",
      tags: ["Python", "Regex"],
      link: ""   // paste the repo or demo URL here, or leave empty
    },
    {
      title: "Performance dashboard",
      description: "Dashboard that shows test results across platforms so the team can spot regressions quickly.",
      tags: ["Google Data Studio"],
      link: ""
    },
    {
      title: "Data science project",
      description: "Add your best project from the Coderhouse diplomatura: the question, the data, the method and the result.",
      tags: ["pandas", "Jupyter"],
      link: ""
    }
  ],

  // Each key is a category title, each list holds the skills in it.
  skills: {
    "Data": ["Python", "pandas", "SQL", "Dashboards"],
    "Automation": ["Playwright", "Go", "Regex", "CI/CD"],
    "Tools": ["Git", "Jira", "TeamCity"]
  }
};
