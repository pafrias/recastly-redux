import Redux from 'redux';

var videoListReducer = (state = [], { type, videos}) => {
  return (type === 'CHANGE_VIDEO_LIST') ? videos : state;
};

export default videoListReducer;
