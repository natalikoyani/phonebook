import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#31cfff"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};