import { ModlasActionTypes } from "./../redux/actionTypes";

const INITIAL_STATE: ModalsState = {
  addNewContact: { isVisible: false, modalPayload: {} },
  newCallAlert: { isVisible: false, modalPayload: {} },
};
interface Action {
  payload: any;
  type: string;
}
const AuthReducer = (
  state: ModalsState = INITIAL_STATE,
  action: Action
): ModalsState => {
  switch (action.type) {
    case ModlasActionTypes.SHOW_ADD_NEW_CONTACT_MODAL: {
      return {
        ...state,
        addNewContact: {
          isVisible: action.payload.isVisible,
          modalPayload: action.payload.modalPayload,
        },
      };
    }
    case ModlasActionTypes.SHOW_NEW_CALL_ALERT: {
      return {
        ...state,
        newCallAlert: {
          isVisible: action.payload.isVisible,
          modalPayload: action.payload.modalPayload,
        },
      };
    }

    default: {
      return state;
    }
  }
};
export default AuthReducer;
