import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action="" method=''>
        <div className='flex justify-between items-center flex-col p-4'>
          <label className='font-bold mb-2' htmlFor="name">Name</label>
          <input className='border-2 border-black rounded' type="text" name='name' id='name' />
        </div>
        <div className='flex justify-between items-center flex-col p-4'>
          <label className='font-bold mb-2' htmlFor="email">Email</label>
          <input className='border-2 border-black rounded' type="email" name='email' id='email' />
        </div>
        <div className='flex justify-between items-center flex-col p-4'>
          <label className='font-bold mb-2' htmlFor="password">Password</label>
          <input className='border-2 border-black rounded' type="password" name='password' id='password' />
        </div>
        <div className='flex justify-between items-center flex-col p-4'>
        <button className='border-2 border-black p-2 py-1 rounded-full hover:text-gray-400 hover:border-gray-500'>Submit</button>
        </div>
      </form>
    </main>
  )
}
