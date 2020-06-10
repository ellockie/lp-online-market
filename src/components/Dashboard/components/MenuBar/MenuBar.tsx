import React from 'react';

import AddListingModal from "../AddListingModal/AddListingModal";

import styles from './MenuBar.module.css';


const MenuBar: React.FC = () => (
  <div className={["ui menu", styles.MenuBar].join(" ")} data-testid="MenuBar">
    <div className="item">
        <AddListingModal/>
    </div>
</div>
);

export default MenuBar;
