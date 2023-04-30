import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '158px',
          left: '320px',
        }}
      >
        <ClimbingBoxLoader color="#2196f3" size={90} />
      </div>
    </div>
  );
}
