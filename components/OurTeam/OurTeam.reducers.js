const initialState = [
  {
    name: "Adão Oliveira",
    designation: "Programador",
    image: "images/img-1.JPG",
    about:
      "Sobre mim...",
  },
  {
    name: "Edna Santos",
    designation: "Marketing",
    image: "images/img-2.JPG",
    about:
    "Sobre mim...",
  },
  {
    name: "Ródnei Santos",
    designation: "Comercial",
    image: "images/img-3.JPG",
    about:
    "Sobre mim...",
  },
  {
    name: "Glauciane",
    designation: "Tráfego Pago",
    image: "images/img-4.JPG",
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
