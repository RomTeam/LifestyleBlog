import { GET_PRODUCT_LIST, DELETE_PRODUCT } from "../actions/adminActions";

const productProducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST: {
      state = action.products;
      return [...state];
    }
    case DELETE_PRODUCT: {
      let pos = state.findIndex(p => p.id == action.id);
      state.splice(pos, 1);
      return [...state];
    }
    default:
      return [...state];
  }
};

export default productProducer;
