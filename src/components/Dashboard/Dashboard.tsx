import React from 'react';
import styles from './dashboard.module.less';

const Dashboard: React.FC = () => (
  <div className={styles.dashboard} data-testid="dashboard">
    dashboard Component
  </div>
);

export default Dashboard;
