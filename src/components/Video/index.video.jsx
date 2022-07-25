import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVideo } from '../../redux/videoSlice';

export function Video() {
  const video = useSelector((state) => state.video.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Video: </h1>
      <h1>{video}</h1>
      <button aria-label="Increment value" type="button" onClick={() => dispatch(getVideo())}>ver</button>
    </>
  );
}
