import Tag from "./Tag";

export default function Card({ portfolio }) {
  return (
    <>
      {/* <h1>This is card</h1> */}
      <div className="bg-white max-w-sm rounded-3xl overflow-hidden shadow-lg mx-auto">
        <img
          className="w-full"
          src={`${portfolio.imgUrl}`}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{portfolio.title}</div>
          <p className="text-blue-700 mb-3.5 text-base">{portfolio.link}</p>
          <p className="text-gray-700 text-base">{portfolio.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #express
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #node.js
          </span> */}
          {portfolio.tags.map(tag => {
            return <Tag tag={tag} key={tag.id} />;
          })}
        </div>
      </div>
    </>
  );
}
