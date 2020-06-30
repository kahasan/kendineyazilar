import React from 'react';
import A from './a';

import styles from './Author.module.css';

function Author({ ...props }) {
  return (
    <div className={styles.Author}>
      <A as={`/users?username=${props.Author}`}>{props.Author}</A>
    </div>
  );
}

export default Author;
