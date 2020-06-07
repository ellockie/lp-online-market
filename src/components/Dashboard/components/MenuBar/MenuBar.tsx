import React from 'react';

import styles from './MenuBar.module.css';

const MenuBar: React.FC = () => (
  <div className={["ui menu", styles.MenuBar].join(" ")} data-testid="MenuBar">
    <div className="item">
        <div className="ui primary button">New Listing</div>
    </div>
    <div className="item">
        <div className="ui button">Log-in</div>
    </div>
</div>
);

export default MenuBar;
