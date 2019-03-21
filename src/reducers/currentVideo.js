import Redux from 'redux';

var currentVideoReducer = (state, { type, video}) => {
  return type === 'CHANGE_VIDEO' ? video : state || null;
};

export default currentVideoReducer;
