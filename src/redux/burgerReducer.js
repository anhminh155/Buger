const initDataBuger = {
  burger: { salad: 0, cheese: 0, beef: 0 }, // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
};

const ADD_ITEM_BURGER = "ADD_ITEM_BURGER";
export const addItemBurger = (item) => ({
  type: ADD_ITEM_BURGER,
  payload: item,
});

const DELETE_ITEM_BURGER = "DELETE_ITEM_BURGER";
export const deleteItemBurger = (item) => ({
  type: DELETE_ITEM_BURGER,
  payload: item,
});

const burgerReducer = (state = initDataBuger, action) => {
  switch (action.type) {
    case ADD_ITEM_BURGER:
      if (action.payload === "salad") {
        return {
          ...state,
          burger: { ...state.burger, salad: state.burger.salad + 1 },
        };
      } else if (action.payload === "cheese") {
        return {
          ...state,
          burger: { ...state.burger, cheese: state.burger.cheese + 1 },
        };
      } else {
        return {
          ...state,
          burger: { ...state.burger, beef: state.burger.beef + 1 },
        };
      }
    case DELETE_ITEM_BURGER:
      if (action.payload === "salad") {
        return {
          ...state,
          burger: { ...state.burger, salad: state.burger.salad - 1 },
        };
      } else if (action.payload === "cheese") {
        return {
          ...state,
          burger: { ...state.burger, cheese: state.burger.cheese - 1 },
        };
      } else {
        return {
          ...state,
          burger: { ...state.burger, beef: state.burger.beef - 1 },
        };
      }

    default:
      return state;
  }
};

export default burgerReducer;
