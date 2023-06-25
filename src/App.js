import "./App.css";
// import web from '/img/web-developer.png';

function App() {
  return (
    <div className="navbar bg-[#23033f] text-[#fff9f6]">
      <div className="flex  flex-col md:flex-row md:justify-between md:p-3 md:px-5 text-center px-2 pb-3 bg-black text-white xl:px-10">
        <h1 className="text-2xl font-bold ">AniDwivedi</h1>
        <p className="xl:text-xl">eMail : anidwivedi@proton.me</p>
      </div>
      <hr className="border" />
      <div className="hero-section p-5  flex flex-col text-center md:flex-row ">
        <img
          src="web-developer.png"
          alt="Best web developer"
          className="w-[80%] ml-7 md:w-[45%] xl:w-[40%] xl:ml-10 "
        />
        <h1 className="text-3xl font-bold p-2 mt-2 md:text-center md:mt-24 md:mx-3 md:text-4xl lg:text-5xl lg:leading-loose xl:mt-32 ">
          Let me create your{" "}
          <span className="underline text-[#bbeab4]">Web Presence</span>
        </h1>
      </div>
      <hr />
      <div className="services py-5">
        <h2 className="text-xl p-3 font-medium md:text-2xl md:font-bold xl:text-3xl xl:ml-5">I can help you with</h2>
        <div className="flex p-2 xl:p-8">
          <div className="flex flex-col items-center md:m-8 ">
            <img
              src="code.jpg"
              alt="web development"
              className=" invert w-[35%] md:w-[100%] "
            />
            <p className="text-sm text-center p-1 md:text-lg">Web Development</p>
          </div>
          <div className="flex flex-col items-center md:mt-8 xl:mt-10 ">
            <img
              src="Graphic-design.png "
              alt="web development"
              className=" invert w-[25%] xl:w-[12%] "
            />
            <p className="text-sm text-center pt-5 md:text-lg ">Graphic Design </p>
          </div>
          <div className="flex flex-col items-center md:mr-8 md:mt-3">
            <img
              src="SEO.png "
              alt="web development"
              className=" invert w-[45%] md:w-[100%] md:m-2"
            />
            <p className="text-sm text-center md:text-lg">Seo Optimization</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-work py-5 ">
        <h2 className="text-xl p-3 font-medium md:text-2xl md:font-bold xl:text-3xl xl:ml-5">My Work</h2>
        <img src="work 1.png" alt="sample of web design" className="w-[95%] xl:w-[80%] xl:px-10" />
      </div>
      <hr />
      <div className="about">
      <h2 className="text-xl p-3 pt-5 font-medium md:text-2xl md:font-bold xl:text-3xl xl:ml-5">About me</h2>
      <p className="p-3 md:px-10 xl:mx-16 ">
        I'm a self-taught web developer and graphic designer with over 2 years
        of experience. I'm passionate about creating visually stunning and
        functional websites.
      </p>
      <p className="p-3 md:px-10 xl:mx-16">
        I stay up to date with the latest technologies and have expertise in
        HTML, CSS, JavaScript, and more. I also have a keen eye for aesthetics
        and use tools like Photoshop and Illustrator to create captivating
        visuals.
      </p> 
      <p className="p-3 md:px-10 xl:mx-16">
        If you need a modern website, a striking user interface, or a complete
        branding overhaul, let's work together to bring your ideas to life
      </p>
      </div>
    </div>
  );
}

export default App;
