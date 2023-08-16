import API from "../../API";
import { fetchItemAction } from "./actions";

const api = new API();

export const FetchItems = (category) =>{
    return async (dispatch) =>{
        return api
          .getItems(category)
          .then((items) =>{
            dispatch(fetchItemAction(items.results))
            console.log(items)
          })
         .catch((error) =>{
            alert('Failed to connect to API: /items/')
         });
    };
};


