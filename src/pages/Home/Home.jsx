import homeImage from '../../images/phonebook.jpg';
export default function Home() {
  return (
    <div>{<img src={homeImage} alt="home" style={{ width: '100%' }} />}</div>
  );
}
