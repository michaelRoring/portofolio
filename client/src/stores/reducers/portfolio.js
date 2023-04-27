const initialState = {
  portfolios: [
    {
      id: 1,
      title: "Genko Sushi",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/michael-portfolio-b9193.appspot.com/o/LP1.png?alt=media&token=c19e8855-f6ad-45fd-b8db-11dc92a8df02",
      link: "https://genkosushi.web.app/",
      description: "I tried to recreate genki sushi landing page",
      tags: ["react", "express", "node.js"],
    },
    {
      id: 2,
      title: "Genko Sushi CMS",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/michael-portfolio-b9193.appspot.com/o/LP2.png?alt=media&token=a7f91248-9eaa-4ace-abf7-cd5cc3040d02",
      link: "https://genkosushicms.web.app/",
      description:
        "This is CMS web for admin, use test@mail.com as username and test as password",
      tags: ["react", "express", "node.js"],
    },
    {
      id: 3,
      title: "Street Job CMS",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/michael-portfolio-b9193.appspot.com/o/LP3.png?alt=media&token=504b7426-498c-46f9-8277-31bfc8e93909",
      link: "https://genkosushicms.web.app/",
      description:
        "This is CMS web for admin, use test@mail.com as username and test as password",
      tags: ["vue", "express", "node.js"],
    },
    {
      id: 4,
      title: "Ragnafilia",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/michael-portfolio-b9193.appspot.com/o/LP4.png?alt=media&token=6052879c-8bbf-430a-b4d0-ceb0a99a0776",
      link: "https://ragnarok-35a02.web.app/",
      description: "This is website for gathering monster in Ragnarok Online",
      tags: ["vue", "express", "node.js"],
    },
  ],
};

const portfolioReducer = (state = initialState, action) => {
  //   console.log("action di reducer:", action);
  switch (action.type) {
    case "fetchPortfolio":
      return {
        ...state,
        portfolios: action.payload,
      };
    default:
      return state;
  }
};

export default portfolioReducer;
