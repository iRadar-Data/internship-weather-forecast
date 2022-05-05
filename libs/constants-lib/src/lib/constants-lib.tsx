import styles from './constants-lib.module.scss';

/* eslint-disable-next-line */
export interface ConstantsLibProps {}

export function ConstantsLib(props: ConstantsLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ConstantsLib!</h1>
    </div>
  );
}

export default ConstantsLib;
