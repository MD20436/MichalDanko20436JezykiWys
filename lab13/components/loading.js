
import classes from './loading.module.css';

export default function LoadingIndicator() {
    return (
      <p className={classes.loading}>
        Fetching meals...
      </p>
    );
  }