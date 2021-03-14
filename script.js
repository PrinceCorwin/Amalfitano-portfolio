// expand bio text visibility
const seeMore = document.getElementById("see-more");
const headShot = document.getElementById("headshot");
const bio = document.getElementById("bio-text");
seeMore.addEventListener("click", function () {
  bio.innerHTML = `<h3>A Brief Bio</h3>
  <p>
    As a creative maker of many things, my professional attention remains focused on the area that has given me the most joy
    throughout my life... programming. It is said that if you are
    doing what you love, you will never have to work, and I have always
    found that to be true.
  </p>
  <p>
    My analytical/technical training and education, <em>(including functional
    programming, IT support, metal fabrication and woodworking)</em>, mixed with
    an artistic creativity provide a sound basis for web
    development.
  </p>
  <p>
    As a team player, I understand the value of respecting and appreciating my
    co-workers. There is rarely a problem that they can not help you solve.
    Lastly, my age and extensive work history have taught me how to be a
    productive, valuable, no-risk employee.
  </p>
  <p>
    Owner / Artist of "Amalfi Makes It", a freelance company providing
    custom professional and personal website/web-app design, as well as sign
    making services, custom apparel, and general woodworking projects.
  </p>`;
  // bio.style["text-align"] = "left";
});
