import RingLoader from 'react-spinners/RingLoader';
export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div>
        <RingLoader color="#2196f3" size={120} />
      </div>
    </div>
  );
}
