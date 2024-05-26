import type { NextPage } from "next";
import TextBlock from "../components/TextBlock";
import Experience from "../components/Experience";
import Spacer from "../components/Spacer/Spacer";
import Contact from "../components/Contact";

const Home: NextPage<{}> = ({}) => {
  return (
    <div>
      <TextBlock
        header1="Hey there"
        header2="Welcome to my portfolio"
        bgImage="/images/backgrounds/two-swirl.png"
        alt=""
        textAlign="text-center"
        paragraph="I'm a Full Stack Software Engineer with ten years under my belt, diving deep into Retail, Management, and Mentorship. I'm always up for learning something new, especially when it comes to programming languages. My sweet spot is Front End Web Development, and I'm pretty handy with the MERN stack, but my favorite work is using React, Next.js, and Tailwind together."
        paragraph2="I love a good challenge and enjoy finding creative ways to solve problems. Teaching and mentoring are close to my heart - nothing beats helping future engineers find their footing and reach their potential."
        align="justify-center"
      />
      <Spacer />
      <Experience
        header1="A Wide Range of Technologies"
        header2="I have extensive experience in a variety of front-end, back-end, database, programming language, template engine, and cloud platform technologies."
        bgImage="/images/backgrounds/lightning.png"
        alt=""
        textAlign="text-center"
        paragraph="I'm a Full Stack Software Engineer with ten years under my belt, diving deep into Retail, Management, and Mentorship. I'm always up for learning something new, especially when it comes to programming languages. My sweet spot is Front End Web Development, and I'm pretty handy with the MERN stack, but my favorite work is using React, Next.js, and Tailwind together."
        paragraph2="I love a good challenge and enjoy finding creative ways to solve problems. Teaching and mentoring are close to my heart - nothing beats helping future engineers find their footing and reach their potential."
        align="justify-center"
      />
      <Spacer />
      <Contact
        header1="Get in Touch"
        header2="Fill out the form below to send me an email"
        bgImage="/images/backgrounds/full-swirl.png"
        alt=""
        textAlign="text-center"
        align="justify-center"
      />
    </div>
  );
};

export default Home;
