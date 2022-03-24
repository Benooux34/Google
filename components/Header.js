import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'

import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'

import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

function Header() {

    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    }

  return (
    <header className='sticky top-0 bg-white'>

        <div className='flex w-full p-6 items-center'>
            <Image src='https://home.messagexchange.com/wp-content/uploads/2021/09/Freedom-Logo.png' width={140} height={40} className='cursor-pointer' onClick={() => router.push('/')} />

            <form className='flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5'>
                <input ref={searchInputRef} className='flex-grow w-full focus:outline-none' type="text" />
                <XIcon onClick={() => (searchInputRef.current.value = "")} className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' />
                <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
                <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
                <button hidden type="submit" onClick={search}>Search</button>
            </form>
            <Avatar className="ml-auto" url='https://cdn4.whatoplay.com/M3RSoX4cW/profile.jpeg?versionId=YHwBzxKSs9QQm9YrWR1l7dJH8FnzKH2S' />
        </div>

        <HeaderOptions />

    </header>
  )
}

export default Header