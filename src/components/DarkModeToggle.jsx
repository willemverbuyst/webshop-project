import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectDarkMode } from '../store/darkMode/selectors';

import { toggleMode } from '../store/darkMode/actions';

export default function DarkModeToggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode).darkMode;

  return (
    <div>
      {darkMode ? (
        <div onClick={() => dispatch(toggleMode(!darkMode))}>
          <i className="fas fa-sun" style={{ color: '#fff' }}></i>
        </div>
      ) : (
        <div onClick={() => dispatch(toggleMode(!darkMode))}>
          <i className="fas fa-moon" style={{ color: '#fff' }}></i>
        </div>
      )}
    </div>
  );
}
