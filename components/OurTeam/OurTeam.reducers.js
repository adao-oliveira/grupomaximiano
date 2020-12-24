const initialState = [
  {
    name: "Adão Oliveira",
    designation: "Programador",
    image: "images/adao.jpg",
    about:
      "Sobre mim...",
  },
  {
    name: "Edna Santos",
    designation: "Marketing",
    image: "images/edna.jpg",
    about:
    "Sobre mim...",
  },
  {
    name: "Ródnei Santos",
    designation: "Comercial",
    image: "images/rodnei.jpg",
    about:
    "Sobre mim...",
  },
  {
    name: "Glauciane",
    designation: "Tráfego Pago",
    image: "images/glauciane.jpg",
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
