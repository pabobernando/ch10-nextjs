import Navbar from '@/components/Navbar/Navbar';
import gambar1 from '../../img/gambar1.jpg';
import gambar2 from '../../img/gambar2.jpg';
import Link from 'next/link';

function HomePage() {
    return <div>
      <Navbar />
      <div className='container-fluid mx-auto  mt-9'>
        <h1 className='text-6xl font-bold text-center'> Games Binar Accademy </h1>
        <p className='text-center text-4xl'>- Innovation in the game industry -</p>
        <div className='flex items-center justify-center'>
        <img className='object-center mt-9' src={gambar2.src} />
        </div>
        <div className='text-center mt-8'>
        <Link href='/home/login'><button class="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">
           Launch App 
        </button>
        </Link>
        </div>
      </div>
    </div>
  }
  
  export default HomePage