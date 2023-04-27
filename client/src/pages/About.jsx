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
            <br />I always get excited when I start a new project.
            <br /> You know where to call me :D
          </p>
        </div>
      </div>
    </>
  );
}
