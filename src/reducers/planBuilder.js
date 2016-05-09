import { createReducer } from '../utils';
import {
  ADD_TO_BUILDER,
  DELETE_FROM_BUILDER,
  REORDER_UP,
  REORDER_DOWN
} from '../constants'
import {
  changingRoutes
} from '../actions'

const initialState = {
  activities: [],
};


export default createReducer(initialState, {
  [ADD_TO_BUILDER]: (state, payload) => {
    console.log('state:',state);
    console.log('activities',state.activities);
    var newState = state.activities.slice();
    newState.push(payload.activity);
    changingRoutes(newState);
    // return newState;
    // var newState = state.activities.concat[[payload.activity]];
    return Object.assign({}, state, {
      activities: newState
    });
  },
  [DELETE_FROM_BUILDER]: (state, payload) => {
    console.log(state);
    var newState = state.slice();
    var activityIndex = state.indexOf(payload.action.activity);
    newState.splice(activityIndex, 1);
    if (newState.length > 0) {
      changingRoutes(newState);
    }
    return newState;
  },
  [REORDER_UP]: (state, payload) => {
    if (payload.action.activityIndex === 0) {
      return state;
    } else {
      var newState = state.slice();
      var index = payload.action.activityIndex;
      var newIndex = payload.action.activityIndex - 1;
      newState[index] = newState.splice(newIndex, 1, newState[index])[0];
      return newState;
    }
  },
  [REORDER_DOWN]: (state, payload) => {
    if (action.activityIndex === state.length - 1) {
      return state;
    } else {
      var newState = state.slice();
      var index = action.activityIndex;
      var newIndex = action.activityIndex + 1;
      newState[index] = newState.splice(newIndex, 1, newState[index])[0];
      return newState;
    }
  },
})


// export function planBuilder(state = [], action) {
//   switch (action.type) {
//     case ADD_TO_BUILDER:
//       var newState = state.slice();
//       newState.push(action.activity);
//       changingRoutes(newState);
//       return newState;
//     case DELETE_FROM_BUILDER:
//       var newState = state.slice();
//       var activityIndex = state.indexOf(action.activity);
//       newState.splice(activityIndex, 1);
//       if (newState.length > 0) {

//         changingRoutes(newState);
//       }
//       return newState;
//     case REORDER_UP:
//       if (action.activityIndex === 0) {
//         return state;
//       } else {
//         var newState = state.slice();
//         var index = action.activityIndex;
//         var newIndex = action.activityIndex - 1;
//         newState[index] = newState.splice(newIndex, 1, newState[index])[0];
//         return newState;
//       }
//     case REORDER_DOWN:
//       if (action.activityIndex === state.length - 1) {
//         return state;
//       } else {
//         var newState = state.slice();
//         var index = action.activityIndex;
//         var newIndex = action.activityIndex + 1;
//         newState[index] = newState.splice(newIndex, 1, newState[index])[0];
//         return newState;
//       }
//     default:
//       return state
//   }
// }


