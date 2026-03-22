function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const projects = [
  {
    title: "Iconic Pose Detector",
    role: "Did Everything",
    desc: "A real-time pose detection web app built with Flask, MediaPipe, and a custom trained ML model. Point your webcam at yourself, hold a pose for 1.5 seconds, and the app identifies it live in the browser.",
    tags: ["Flask", "OpenCV", "MediaPipe", "ML","Pandas","Scikit-Learn"],
    img: "assets/projects-img/iconic-pose-edit.jpeg",
    github: "https://github.com/biswadeep29/Iconic-Pose-Detector"
  },
  {
    title: "Pump Predictive Maintenance Dashboard",
    role: "Model training + Flask WebSite Deployment",
    desc: "A real-time IoT-based predictive maintenance system for industrial pumps. Sensor data is streamed to Firebase, processed by an ML model, and visualized on a live Flask dashboard — with live failure probability and Remaining Useful Life (RUL) estimates.",
    tags: ["Flask", "Firebase", "ML", "IoT", "Python","Random Forest","Feature Engineering","Data Preprocessing"],
    img: "assets/projects-img/pump.png",
    github: "https://github.com/Sobham1/pump-predictive-maintenance"
  },
  {
    title: "AI-Based Evaluation System",
    role: "Machine Learning Modeling",
    desc: "Designed an AI-driven evaluation system with personalized, concept-focused assessments that reduce rote learning and use semantic similarity–based grading aligned with teacher intent.",
    tags: ["Python", "NLP", "AI", "Semantic Similarity","LLMs API"],
    img: "assets/projects-img/ghy-hack.png",
    github: "https://github.com/JanjyotiOjah/KamiKaze-Hackathon/tree/main"
  },
  {
    title: "Face-Detecting Attendance System",
    role: "OpenCV attendence system",
    desc: "Developed an automated attendance system that detects faces in real-time and records the date and time of each person's presence — no manual input required.",
    tags: ["Python", "OpenCV", "Face Detection", "ML"],
    img: "assets/projects-img/sealsix.png",
    github: "https://github.com/escursio675/track-attendance-1/tree/main"
  },
  {
    title: "Image Scraper Web App",
    role: "Did Everything",
    desc: "Built a Streamlit web app to automate image scraping from Google Images, designed specifically for deep learning dataset creation — saving hours of manual collection.",
    tags: ["Streamlit", "Python", "Web Scraping", "Selenium","Requests","PIL","Chrome Driver"],
    img: "assets/projects-img/web-scrapper.png",
    github: "https://github.com/biswadeep29/Image-Scraper-Web-App"
  },
  {
    title: "Streamlit ML Showcase",
    role: "Did Everything",
    desc: "Built an interactive Streamlit application showcasing end-to-end ML workflows — a regression-based diamond price predictor with encoded categorical features, and a CNN-based land terrain classifier supporting six landscape categories.",
    tags: ["Streamlit", "Python", "CNN", "Regression", "Machine Learning","Random Forests","Exploratory Data Analysis"],
    img: "assets/projects-img/diamond-edit.jpg",
    github: "https://github.com/biswadeep29/Personal-projects"
  }
];

function openModal(index) {
  const p = projects[index];

  document.getElementById('modal-img').src   = p.img;
  document.getElementById('modal-img').alt   = p.title;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-desc').textContent  = p.desc;
  document.getElementById('modal-role').textContent  = p.role;
  document.getElementById('modal-github').href       = p.github;
  document.getElementById('modal-tags').innerHTML    =
    p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  document.getElementById('backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function handleBackdropClick(e) {
  if (e.target === document.getElementById('backdrop')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});


document.addEventListener('DOMContentLoaded', () => {
  const markers = document.querySelectorAll('.marker');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // small delay so transition is visible even if already in viewport
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 200);
        observer.unobserve(entry.target); // stop watching after trigger
      }
    });
  }, {
    threshold: 0.9  // lower threshold works better for inline <span> elements
  });

  markers.forEach(el => observer.observe(el));
});