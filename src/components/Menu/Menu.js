import React from 'react';
import './menu.scss';
const Menu = ({ chooseEvent, categories}) => {
  return (
    <div className='menu'>
      <h1>Select an event</h1>
      <ul className='menu-list'>
        {categories.map((item) => (
          <li key={item.id} className='menu-item'>
            <a
              href='#'
              onClick={() => chooseEvent(item.id)}
              className='menu-link'
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
