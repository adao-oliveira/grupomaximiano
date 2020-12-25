const initialState = [
  {
    name: "Adão Oliveira",
    designation: "Programador",
    image: "../public/images/adao.jpg",
    about:
      "Sobre mim...",
  },
  {
    name: "Edna Santos",
    designation: "Marketing",
    image: "../public/images/edna.jpg",
    about:
    "Sobre mim...",
  },
  {
    name: "Ródnei Santos",
    designation: "Comercial",
    image: "../public/images/rodnei.jpg",
    about:
    "Sobre mim...",
  },
  {
    name: "Glauciane",
    designation: "Tráfego Pago",
    image: "../public/images/glauciane.jpg",
    about:
    "Sobre mim...",
  },
];

const ourTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ourTeamReducer;
