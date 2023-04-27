import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* <!-- Container for demo purpose --> */}
      <div className="">
        {/* <!-- Section: Design Block --> */}
        <section className="scroll-smooth transition duration-300 delay-150 mb-px bg-amber-300 transition delay-700 duration-300">
          <div className="px-6 py-12 md:px-12 bg-amber-300 text-gray-800 text-center lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                <div className="mt-0.5 lg:mt-0">
                  <h1 className="text-5xl md:text-6xl xl:text-7xl text-black-500 font-bold tracking-tight mb-3.5">
                    Hi, I'm Michael <br />
                    <span className="text-black-500">I make web apps</span>
                  </h1>
                  <p className="mb-12 text-2xl">
                    I'm a fullstack developer. Let's collaborate for your next
                    project with me!
                  </p>
                  <Link
                    to={"/portfolio"}
                    className="inline-block px-7 py-3 mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    See portofolio
                  </Link>
                  <div className="mt-8 flex justify-start gap-3.5">
                    <a href="https://github.com/michaelRoring?tab=projects">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/michael-portfolio-b9193.appspot.com/o/github.png?alt=media&token=8ca5756a-147e-4631-aa69-59f8f0f0a9ce"
                        className="w-8"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/michael-roring-58551a3b/">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/michael-portfolio-b9193.appspot.com/o/linkedin.png?alt=media&token=393acd95-dc01-4dc4-9624-3d2894738bc4"
                        className="w-8 ml-1"
                      />
                    </a>
                  </div>
                </div>
                <div className="ml-36 lg:mb-0">
                  <iframe
                    className="h-screen w-96 "
                    src="https://embed.lottiefiles.com/animation/97639"
                  ></iframe>
                </div>
              </div>
              <hr class="h-1.5 bg-black border-1 " />
              {/* second row */}
              <div className="scroll-smooth text-black-500 transition duration-300 delay-150 mt-60 grid grid-cols-2 mb-40">
                <figure>
                  <embed
                    className="h-auto rounded-2xl"
                    src="https://wakatime.com/share/@277203e0-69d6-455c-b22c-f79808111f2f/8cf88116-5c16-4068-a0e9-74ee4edf89c5.svg"
                  ></embed>
                </figure>
                <div className="ml-16">
                  <h1 className=" text-5xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-3.5">
                    What language do I speak?
                    <br />
                  </h1>
                  <p className="mb-12 text-2xl">
                    This is a diagram that shows what language I wrote in the
                    last 12 months.
                  </p>
                </div>
              </div>

              {/* third row */}
              <hr className="scroll-smooth text-black-500 transition duration-300 delay-150 h-1.5 bg-black border-1 " />
              <div className="grid grid-cols-2 mt-60 h-screen ">
                <div className="ml-0.5 mr-48">
                  <h1 className=" text-5xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-3.5">
                    This is my coding activity in the last 30 days
                    <br />
                  </h1>
                  <p className="mb-12 text-2xl">
                    Sometimes I spend almost 5 hours a day until I forget about
                    my wife
                  </p>
                </div>
                <figure>
                  <embed
                    className="h-auto rounded-2xl"
                    src="https://wakatime.com/share/@277203e0-69d6-455c-b22c-f79808111f2f/31cfe80d-22a0-412c-8b76-b16f856466de.svg"
                  ></embed>
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}
    </>
  );
}
