export const FETCH_ITEMS = 'FECTH_ITEMS'
export const fetchItemAction = items => {
    return{
        type:FETCH_ITEMS,
        payload: items
    }
}