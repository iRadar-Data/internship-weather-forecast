import styles from './types-lib.module.scss';

/* eslint-disable-next-line */
export interface TypesLibProps {}

export function TypesLib(props: TypesLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TypesLib!</h1>
    </div>
  );
}

export default TypesLib;
