import Navbar from '@/components/Navbar/Navbar';
import gambar from '../../img/stikps.jpg';
import stickps from '../../img/stick.jpg';

function HomePage() {
    return <div>
      <Navbar />
      <div className='container-fluid mx-auto  mt-9'>
        <h1 className='text-6xl font-bold text-center'> Games Binar Accademy </h1>
        <p className='text-center text-4xl'>- Innovation in the game industry -</p>
        <div className='flex items-center justify-center'>
        <img className='object-center mt-9' src={stickps.src} />
        </div>
        <div className='text-center mt-8'>
        <button class="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">
            Launch App
        </button>
        </div>
      </div>
    </div>
  }
  
  export default HomePage