import Navbar from '@/components/Navbar/Navbar';
import gambar from '../../img/stikps.jpg';

function HomePage() {
    return <div>
      <Navbar />
      <div className='container mx-auto'>
        <h1 className='text-6xl font-bold text-center mt-10'> Games Binar Accademy </h1>
        <p className='text-center text-4xl'>- Innovation in the game industry -</p>
        <img src={gambar} />
      </div>
    </div>
  }
  
  export default HomePage