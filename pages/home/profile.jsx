import Navbar from '@/components/Navbar/Navbar';
import gambar1 from '../../img/gambar1.jpg';
import gambar2 from '../../img/gambar2.jpg';
import Link from 'next/link';

function HomePage() {
    return <div>
      <Navbar />
      <div className='container-fluid mt-9'>
        <div className="flex">
            <div className="w-1/4 m-8"><img className='mx-auto' src={gambar2.src} /></div>
            <div className="w-3/4">
            <div className="flex flex-wrap overflow-hidden">

<div className="w-full overflow-hidden">
KEWER
</div>

<div className="w-full overflow-hidden">
KEWER
</div>

<div className="w-full overflow-hidden">
KEWER
</div>

<div className="w-full overflow-hidden">
KEWER
</div>

</div>
            
            </div>
</div>

        </div>

      
      
        <Link href='/home/login'><button class="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">
           Launch App 
        </button>
        </Link>
        </div>
  }
  
  export default HomePage