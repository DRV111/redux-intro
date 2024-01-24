const initialStateCustomer = {
  fullname: '',
  nationalID: '',
  createdAt: '',
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'custumer/createCustomer':
      return {
        ...state,
        fullname: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case 'customer/updateName':
      return {
        ...state,
        fullname: action.payload,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/createCustomer',
    payload: fullName,
    nationalID,
    createdAt: new Date().toISOString(),
  };
}

export function updateName(fullName) {
  return {
    type: 'customer/updateName',
    payload: fullName,
  };
}
