export const SET_PPRODUCTS = 'setProducts';

interface SetProducts {
    type: typeof SET_PPRODUCTS;
    payload: boolean;
}


export type BasicActionTypes = SetProducts;
