// Suppose this is the data coming form backend.
const people = [
  {
    fullName: "Aarav Mehta",
    profilePicture: "https://randomuser.me/api/portraits/men/11.jpg",
    profession: "Frontend Developer",
    description:
      "Passionate about building responsive and interactive web interfaces using React and Tailwind CSS.",
  },
  {
    fullName: "Priya Sharma",
    profilePicture: "https://randomuser.me/api/portraits/women/21.jpg",
    profession: "UI/UX Designer",
    description:
      "Designs clean and user-friendly interfaces with a strong focus on accessibility and user research.",
  },
  {
    fullName: "Rohan Verma",
    profilePicture: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Backend Developer",
    description:
      "Specializes in building scalable APIs and managing databases using Node.js and PostgreSQL.",
  },
  {
    fullName: "Ananya Gupta",
    profilePicture: "https://randomuser.me/api/portraits/women/45.jpg",
    profession: "Data Analyst",
    description:
      "Transforms raw data into meaningful insights using Python, Pandas, and visualization tools.",
  },
];

let main= document.querySelector('main');

let sum= ""
people.forEach(function (elem) {
  sum+= `<div class="card">
        <div class="img-box">
            <img id="img" src="${elem.profilePicture}" alt="">
        </div>
        <h1>${elem.fullName}</h1>
        <h2>${elem.profession}</h2>
        <p>${elem.description}</p>
      </div>`;
});

main.innerHTML= sum;