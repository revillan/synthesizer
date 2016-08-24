import NotesConstants from '../actions/note_actions';

const validKeys = ["a","s","d","f","g"];
const keyMap = {"a":"C5", "s":"D5", "d":"E5", "f":"F5", "g":"G5"};

export const notes_reducer = (state = [], action) => {
  switch (action.type) {
    case (NotesConstants.KEY_PRESSED):
      if (validKeys.indexOf(action.key) === -1){
        return state;
      } else {
        return [...state, action.key];
      }
    case NotesConstants.KEY_RELEASED:
    if (validKeys.indexOf(action.key) === -1){
      return state;
    } else{
        if(state.indexOf(action.key) === - 1){
           return state;
        }else{
          return state.slice(0,state.indexOf(action.key)).concat(state.slice(state.indexOf(action.key)+1));
        }
      }
    default:
      return state;
  }
};

export default notes_reducer;
