import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <main>
    <h1 className='text-4xl font-semibold'>Home Page</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, exercitationem ex iste illum sit libero alias ducimus obcaecati repellat velit fugit dolorum veritatis ad, dignissimos ipsum eos voluptatum et distinctio aspernatur laudantium eaque voluptatibus assumenda totam. Accusantium non veniam, ab maiores voluptas pariatur perspiciatis obcaecati unde culpa voluptatum voluptatem excepturi?</p>
    <Link href='/about'>About Page</Link>
   </main>
  )
}
