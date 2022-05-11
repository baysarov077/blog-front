const initialState = {
  users: [],
  loader: true,
  error: null,
};

export const imgReducer = (state = initialState, action) => {
  switch (action.type) {
    case "profile/image/pendeing":
      return {
        ...state,
        loader: false,
      };
    case "add/image/fulfilled":
      return {
        ...state,
        loader: true,
        users: [state.users, action.payload],
      };
    case "profile/image/rejected":
      return {
        ...state,
        loader: true,
        error: action.payload,
      };
    case "getImage/image/pending":
      return {
        ...state,
        loader: false,
        error: null,
      };
    case "getImage/image/fulfilled":
      return {
        ...state,
        loader: true,
        users:  action.payload
      };
    case "getImage/image/rejected":
      return {
        ...state,
        loader: true,
        error: action.error,
      };
    default:
      return state;
  }
};

export const addImage = (id, file) => {
  return async (dispatch) => {
    dispatch({ type: "profile/image/pendeing" });
    try {
      const formData = new FormData();
      formData.append("avatar", file);

      const res = await fetch(`http://localhost:8000/img/${id}`, {
        method: "PATCH",
        body: formData,
      });
      const data = await res.json();

      dispatch({ type: "add/image/fulfilled", payload: data });
    } catch (e) {
      dispatch({ type: "profile/image/rejected", payload: e.toString() });
    }
  };
};
export const getImage = () => {
  return async (dispatch) => {
    dispatch({ type: "getImage/image/pending" });
    try {
      const res = await fetch(`http://localhost:8000/users`);
      const data = await res.json();
      dispatch({ type: "getImage/image/fulfilled", payload: data });


    } catch (e) {
      dispatch({ type: "getImage/image/rejected", payload: e.toString() });
    }
  };
};

