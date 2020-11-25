import React from "react";

function About() {
  return (
    <main class="container">
      <section class="row">
        <div class="col-md-8 col-sm-12">
          <article class="block">
            <h1 class="block-header">Welcome to my Portfolio</h1>
            <hr />
            <img
              src="Assets/profile-pic.jpg"
              alt="Dylan Lucarelli"
              id="about-image"
            />

            <p>
              My name is Dylan Lucarelli, and I am a fullstack web developer
              looking to make cool apps and websites. I come from a data analyst
              background and am at home in the logical structures of web
              development. The frontend design also offers a fun puzzle in
              making a website presentable and user friendly while operating
              efficiently.
            </p>
            <hr />
            <div>
              Click on this to check out my{" "}
              <a href="Assets/Resume.pdf">resume!</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default About;
