export default function About() {
  return (
    <>
      <div className="bg-gradient-to-b from-amber-300 to-white-100 grid grid-cols-2 h-screen w-screen pt-24 ">
        <img
          className="rounded w-80 h-80 ml-96"
          src="https://firebasestorage.googleapis.com/v0/b/michael-portfolio-b9193.appspot.com/o/avatar.png?alt=media&token=477e5e95-c65a-4b3e-9065-76532037abce"
          alt="Extra large avatar"
        ></img>
        <div>
          <h1 className="mt-16 text-4xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-3.5">
            Hi, I'm Michael Roring!
          </h1>
          <p className="text-1xl md:text-1xl xl:text-2xl font-normal mr-60">
            I am a fullstack developer based in Jakarta, Indonesia. I love to
            write code, experiment with design, writing clean code and pushing
            my skill to the limit.
            <br />
            <br />I have a bachelor degree in Computer Science and graduated in
            Hacktiv8 bootcamp with good result
            <br />
            <br />
            I'm hoping we can elaborate for your next project :)
            <br />
            <br />
            <p className="font-bold">roringmichael@gmail.com</p>
            <br />
          </p>
        </div>
        <div className="grid ">
          <h1 className="mt-16 text-4xl md:text-4xl xl:text-5xl ml-40 font-bold tracking-tight mb-3.5">
            Education
          </h1>
          <hr class="h-0.5 bg-black border-1 " />
          <p className="mt-4 text-1xl md:text-1xl ml-40 xl:text-2xl font-normal mr-60">
            2010 - 2014
            <p className="font-bold">Bunda Mulia University</p>
            <p>Computer Science</p>
            <br />
            <p>2022 Jan - April</p>
            <p className="font-bold">Hacktiv8</p>
            <p>Fullstack Javascript Bootcamp</p>
          </p>
        </div>
        <div className="grid ml-60 mt-24"></div>
        <div className="grid ">
          <h1 className="mt-16 text-4xl md:text-4xl xl:text-5xl ml-40 font-bold tracking-tight mb-3.5">
            Career Summary
          </h1>
          <hr class="h-0.5 bg-black border-1 " />
          <p className="mt-4 text-1xl md:text-1xl ml-40 xl:text-2xl font-normal mr-60">
            2014 - 2017
            <p className="font-bold">PT. Noboru Tirta Lestari</p>
            <p>Head of Marketing</p>
            <br />
            <p>2017 - 2021</p>
            <p className="font-bold">Lazada</p>
            <p>as a merchant</p>
            <br />
            <p>2021 - 2022</p>
            <p className="font-bold">PT. Graha Prima Sukses Utama</p>
            <p>Digital Marketing and Social Media Planner</p>
          </p>
        </div>
        <div className="grid ml-60 p-48 mt-24">
          <iframe
            clasName="m-60"
            src="https://embed.lottiefiles.com/animation/93699"
          ></iframe>
        </div>
        <div className="grid mb-60">
          <h1 className="mt-16 text-4xl md:text-4xl xl:text-5xl ml-40 font-bold tracking-tight mb-3.5">
            Skills
          </h1>
          <hr class="h-0.5 bg-black border-1 " />
          {/* start */}
          <div class="flex justify-between mb-1 mt-6  ml-40">
            <span class="text-base font-medium text-black-700 dark:text-white">
              Javascript
            </span>
            <span class="text-sm font-medium ml-40 text-black-700 dark:text-white">
              80%
            </span>
          </div>
          <div class="w-full bg-gray-300 rounded-full ml-40 h-2.5 dark:bg-gray-700">
            <div
              class="bg-yellow-300 h-2.5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          {/* end */}
          {/* start */}
          <div class="flex justify-between mb-1 mt-6  ml-40">
            <span class="text-base font-medium text-black-700 dark:text-white">
              Tailwind
            </span>
            <span class="text-sm font-medium ml-40 text-black-700 dark:text-white">
              85%
            </span>
          </div>
          <div class="w-full bg-gray-300 rounded-full ml-40 h-2.5 dark:bg-gray-700">
            <div
              class="bg-yellow-300 h-2.5 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
          {/* end */}
          {/* start */}
          <div class="flex justify-between mb-1 mt-6  ml-40">
            <span class="text-base font-medium text-black-700 dark:text-white">
              Vue.js
            </span>
            <span class="text-sm font-medium ml-40 text-black-700 dark:text-white">
              90%
            </span>
          </div>
          <div class="w-full bg-gray-300 rounded-full ml-40 h-2.5 dark:bg-gray-700">
            <div
              class="bg-yellow-300 h-2.5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          {/* end */}
          {/* start */}
          <div class="flex justify-between mb-1 mt-6  ml-40">
            <span class="text-base font-medium text-black-700 dark:text-white">
              React
            </span>
            <span class="text-sm font-medium ml-40 text-black-700 dark:text-white">
              85%
            </span>
          </div>
          <div class="w-full bg-gray-300 rounded-full ml-40 h-2.5 dark:bg-gray-700">
            <div
              class="bg-yellow-300 h-2.5 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
          {/* end */}
          {/* start */}
          <div class="flex justify-between mb-1 mt-6  ml-40">
            <span class="text-base font-medium text-black-700 dark:text-white">
              React-Native
            </span>
            <span class="text-sm font-medium ml-40 text-black-700 dark:text-white">
              75%
            </span>
          </div>
          <div class="w-full bg-gray-300 rounded-full ml-40 h-2.5 dark:bg-gray-700">
            <div
              class="bg-yellow-300 h-2.5 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          {/* end */}
          {/* start */}
          <div class="flex justify-between mb-1 mt-6  ml-40">
            <span class="text-base font-medium text-black-700 dark:text-white">
              Express
            </span>
            <span class="text-sm font-medium ml-40 text-black-700 dark:text-white">
              90%
            </span>
          </div>
          <div class="w-full bg-gray-300 rounded-full ml-40 h-2.5 dark:bg-gray-700">
            <div
              class="bg-yellow-300 h-2.5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          {/* end */}
          {/* start */}
          <div class="flex justify-between mb-1 mt-6  ml-40">
            <span class="text-base font-medium text-black-700 dark:text-white">
              Sequelize
            </span>
            <span class="text-sm font-medium ml-40 text-black-700 dark:text-white">
              90%
            </span>
          </div>
          <div class="w-full bg-gray-300 rounded-full ml-40 h-2.5 dark:bg-gray-700">
            <div
              class="bg-yellow-300 h-2.5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          {/* end */}
        </div>
        <div className="grid ml-60 mt-24"></div>
      </div>
    </>
  );
}
