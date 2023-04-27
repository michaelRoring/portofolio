import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";

export default function Portofolio() {
  const portfolios = useSelector(state => {
    console.log("state :", state);
    return state.portfolioReducer.portfolios;
  });

  return (
    <>
      <div className="bg-gradient-to-b from-amber-300 to-amber-100 h-150 w-screen">
        <h1 className="mx-auto text-black-500 ml-48 pt-24 text-5xl md:text-6xl xl:text-4xl font-bold tracking-tight mb-3.5">
          These are my portofolio
        </h1>
        <div className="grid grid-cols-3 p-8mx-auto mt-16 mx-40 gap-8">
          {/* first */}
          {/* <Card /> */}
          {portfolios.map(portfolio => {
            return <Card portfolio={portfolio} key={portfolio.id} />;
          })}
        </div>
      </div>
    </>
  );
}
