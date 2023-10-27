import {data} from "../App";

const reducer = (state = { filteredData:[] }, action) => {
  switch (action.type) {
    case "updateChat":
        
      const newData = data.filter(
        singleData => singleData.name === action.payload
      );
     console.log("poda",newData);
      return {
        ...state,
        filteredData: newData,
      };
    default:
      return state;
  }
};
export default reducer;
