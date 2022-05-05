import styles from './helpers-lib.module.scss';

/* eslint-disable-next-line */
export interface HelpersLibProps {}

export function HelpersLib(props: HelpersLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HelpersLib!</h1>
    </div>
  );
}

export default HelpersLib;
