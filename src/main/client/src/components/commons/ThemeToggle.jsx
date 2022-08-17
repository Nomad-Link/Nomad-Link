import React from 'react';

function ThemeToggle({ toggle, mode }) {
  return (
    <button onClick={toggle} mode={mode}>
      {mode === 'dark' ? '라이트 모드로 변경 🌝' : '다크 모드로 변경 🌚'}
    </button>
  );
}

export default ThemeToggle;