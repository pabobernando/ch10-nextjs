import Navbar from '@/components/Navbar/Navbar';
import gambar1 from '../../img/gambar1.jpg';
import gambar2 from '../../img/gambar2.jpg';
import Link from 'next/link';

function HomePage() {
    return <div>
      <Navbar />
      <div className='container-fluid mx-auto  mt-9'>
        <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div className="col-6 flex-1 bg-white">FOTO</div>
            <div className="col-6 flex-1 bg-dark">DESKRIPSI</div>
</div>

        </div>

      
      
        <Link href='/home/login'><button class="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">
           Launch App 
        </button>
        </Link>
        </div>
  }
  
  export default HomePage