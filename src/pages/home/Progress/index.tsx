import React from 'react';
import * as Progress from '@radix-ui/react-progress';
import './styles.css';

const ProgressBadge = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(30), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root className="Progress" value={progress}>
      <Progress.Indicator
        className="Indicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      >
      </Progress.Indicator>
    </Progress.Root>
  );
};

export default ProgressBadge;