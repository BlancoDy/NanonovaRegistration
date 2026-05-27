function openTab(tabId, element){

    const pages =
    document.querySelectorAll(".menu-page");

    const tabs =
    document.querySelectorAll(".tab");

    pages.forEach(page=>{
        page.classList.remove("active-page");
    });

    tabs.forEach(tab=>{
        tab.classList.remove("active");
    });

    document
    .getElementById(tabId)
    .classList.add("active-page");

    element.classList.add("active");
}

function showLog(text){

    document.getElementById("logOutput")
    .innerHTML = text;
}

/* DATA */

const homeData = `
<div class="data-title">
CLUB OVERVIEW
</div>

Welcome to Our club!
WE are a group of students who are passionate about technology and innovation. and we offer:

Actively engage members in local, national, and international robotics competitions.
Provide practical training in programming, electronics, and engineering.
Host events to promote robotics awareness within the school and community.
Encourage innovation and teamwork through project-based challenges.
Inspire students to explore STEM careers by highlighting the impact of robotics.
We host a variety of events, workshops, and discussions that cater to all interests and skill levels.

Connect with like-minded individuals and explore opportunities for personal and professional development.

<div class="data-grid">

<div class="data-card">
<h3>FOUNDING YEAR</h3>
<p class="highlight">2024</p>
</div>

<div class="data-card">
<h3>STATUS</h3>
<p class="highlight">ACTIVE</p>
</div>

</div>
`;

const preambleData = `
<div class="data-title">
PREAMBLE
</div>

We, the students of Manolo Fortich National High School, recognizing the transformative 
role of robotics and technology in education and future careers, hereby establish the NanoNova Robotics Club. 
Committed to fostering innovation, teamwork, and technical excellence, we strive to cultivate creativity,
problem-solving skills, and a passion for discovery. With integrity and dedication, we pledge to advance knowledge, 
inspire collaboration, and uphold the values of excellence in all our endeavors.

</div>
`;

const RBoverview = `
<div class="data-title">
Robotics Department
</div>

The Robotics Department is the core engineering team of the NanoNova Robotics Club. 
Members design, build, assemble, and test robotic systems for projects, competitions, and innovations. 
This department focuses on electronics, mechanics, wiring, sensors, motors, and hardware integration while encouraging 
creativity, teamwork, and problem-solving skills.

</div>
`;

const PDoverview = `
<div class="data-title">
Programming Department
</div>

The Programming Department develops the software and intelligence behind the club’s robotic projects.
Members learn and apply coding skills using programming languages and microcontrollers to control robots,
automate systems, and create innovative solutions. This department strengthens logical thinking, debugging,
and technological creativity.


</div>
`;

const GDoverview = `
<div class="data-title">
Graphics Department
</div>

The Graphics Department is responsible for the visual identity and creative designs of the NanoNova Robotics Club.
Members create posters, pubmats, logos, presentations, and digital artworks used for promotions, events, and social media.
This department combines creativity and technology to make the club visually engaging and professional.

</div>
`;

const MDoverview = `
<div class="data-title">
Media Department
</div>

The Media Department documents and promotes the activities, projects, and achievements of the NanoNova Robotics Club.
 Members handle photography, videography, editing, content creation, and social media management to keep the community
 informed and connected. This department helps showcase the club’s innovation, teamwork, and events through creative storytelling.

</div>
`;

const SectionA = `
<div class="data-title">
Section A: Club Purpose and Mission
</div>

The NanoNova Robotics Club provides students with a platform to learn, innovate, and excel in robotics.
Through hands-on activities, competitions, and community outreach, the club aims to:
-Foster a passion for programming, engineering, and robotics.
-Cultivate critical thinking, teamwork, and creativity.
-Promote awareness of robotics and its applications in solving real-world problems.
-Prepare students for future careers in STEM by building technical and problem-solving skills.


</div>
`;

const SectionB = `
<div class="data-title">
Section B: Club Goals
</div>

The club shall strive to:
-Actively engage members in local, national, and international robotics competitions.
-Provide practical training in programming, electronics, and engineering.
-Host events to promote robotics awareness within the school and community.
-Encourage innovation and teamwork through project-based challenges.
-Inspire students to explore STEM careers by highlighting the impact of robotics.

</div>
`;

const SectionC = `
<div class="data-title">
Section C: Vision
</div>

“To inspire and empower students to lead in the field of robotics, combining education, creativity,
and technology to build a better future."

</div>
`;

const LOGS1 = `
<div class="data-title">
DEVELOPMENT LOG - 001 
<p class="highlight"> AUDIT: H. DEV. DY</p>

</div>
 > Website skeleton CREATED
 > Website EMAIL AUTOMATION ADDED
 > WEBSITE FORMAT OFFICIALIZED
 <div class="data-grid">

<div class="data-card">
<h3>DATE</h3>
<p class="highlight">[05.22.2026}</p>
</div>

<div class="data-card">
<h3>LOG TYPE</h3>
<p class="highlight"> RECORD </p>
</div>

</div>

`;
const LOGS2 = `
<div class="data-title">
DEVELOPMENT LOG - 002 
<p class="highlight"> AUDIT: H. DEV. DY</p>

</div>
 > Website skeleton UPDATED
 > WEBSITE REMODELED
 > BUGS FOUND: 23
 <div class="data-grid">

<div class="data-card">
<h3>DATE</h3>
<p class="highlight">[05.23.2026}</p>
</div>

<div class="data-card">
<h3>LOG TYPE</h3>
<p class="highlight"> ISSUE </p>
</div>

<div class="data-card">
<h3>BUGS RESOLVED</h3>
<p class="highlight"> 0 </p>
</div>
</div>

`;

const LOGS3 = `
<div class="data-title">
DEVELOPMENT LOG - 003
<p class="highlight"> AUDIT: H. DEV. DY</p>

</div>
 > ROOT PROBLEM FIXED
 > WEBSITE PALLETE CHANGED
 > ADDED REGISTRATION SYSTEM
 <div class="data-grid">

<div class="data-card">
<h3>DATE</h3>
<p class="highlight">[05.23.2026}</p>
</div>

<div class="data-card">
<h3>LOG TYPE</h3>
<p class="highlight"> ISSUE </p>
</div>

<div class="data-card">
<h3>BUGS RESOLVED</h3>
<p class="highlight"> 15 </p>
</div>
</div>

`;

const LOGS4 = `
<div class="data-title">
DEVELOPMENT LOG - 004
<p class="highlight"> AUDIT: H. DEV. DY</p>

</div>
 > HOME PAGE ADDED
 > INTERFACE UPDATED
 > SYSTEM REMODELED
 > LAYOUT REFORMATED
 <div class="data-grid">

<div class="data-card">
<h3>DATE</h3>
<p class="highlight">[05.23.2026}</p>
</div>

<div class="data-card">
<h3>LOG TYPE</h3>
<p class="highlight"> ISSUE </p>
</div>

<div class="data-card">
<h3>BUGS RESOLVED</h3>
<p class="highlight"> 28 </p>
</div>
</div>

`;