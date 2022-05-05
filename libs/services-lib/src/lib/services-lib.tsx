import styles from './services-lib.module.scss';

/* eslint-disable-next-line */
export interface ServicesLibProps {}

export function ServicesLib(props: ServicesLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ServicesLib!</h1>
    </div>
  );
}

export default ServicesLib;
