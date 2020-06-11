import React from 'react';

import AddListingModal from "../AddListingModal/AddListingModal";

import styles from './MenuBar.module.css';


const MenuBar: React.FC = () => (
  <div className={styles.MenuBar} data-testid="MenuBar">
        <AddListingModal/>
    {/* <div className="item"></div> */}
</div>
);

export default MenuBar;
