import React, { useState} from 'react'
import Nav from '../components/nav'
import { Link } from 'react-router-dom'
import next from "../assets/next.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import ChapLink from '../components/chapLinks'
import { useNavigate } from 'react-router-dom'

function ReadPage() {
  const [chap, setChap] = useState(false);

  const navigate = useNavigate()

  const handlechap = () => {
    setChap(!chap)
    document.body.classList.add('no-scroll');
  };

  const exitChap = (event) => {
    document.body.classList.remove('no-scroll');
    if (event.target.id == "exit") {
      setChap(!chap)
    }
  }

  const scrollDown = () => {
    document.getElementById('down').scrollIntoView({behavior : 'smooth'})
  }

  const scrollUp = () => {
    document.getElementById('up').scrollIntoView({behavior : 'smooth'})
  }


  return (
    <>
        <Nav />
        <Link onClick={scrollDown}>
          <FontAwesomeIcon icon={faCircleArrowDown} className='text-[--accent1] animate-pulse sm:hidden right-[10px] fixed top-[30%] text-3xl'/>
        </Link>
        <Link onClick={scrollUp}>
          <FontAwesomeIcon icon={faCircleArrowUp} className='text-[--accent1] animate-pulse sm:hidden right-[10px] fixed bottom-[20%] text-3xl'/>
        </Link>
        {
          !chap ? "" : 
          <div id='exit' onClick={exitChap} className='h-screen w-full z-[20000000000000] flex sm:justify-center fixed top-0 bg-[#000000de]'>
            <div className='bg-[--bg] w-[60%] sm:w-[30%] h-full overflow-scroll hide-scrollbar'>
              <ChapLink />
            </div>
          </div>
        }
        
        <section className='sm:px-[--pdx] px-[.5em] mt-[3em] py-[2em] flex flex-col justify-center items-center' id='up'>
          <div className='flex gap-[1em] flex-col w-full items-center' >
            <div className='text-center'>
              <h1 className='sm:text-2xl text-xl roboto font-bold text-[--accent1] text1'>Doluo Dalu 3: Soul Land 3</h1>
              <h2 className='orb sm:text-[1rem] text-[0.8rem]'>Chapter 234: The legend Of the golden Dragon King</h2>
            </div>
            <div className='flex gap-[.5em] items-center  justify-center'>
              <Link  className='py-[.5em] flex items-center gap-[.5em] px-[1em] hover:scale-105 active:scale-[0.8] sm:active:scale-[1] duration-[0.5s]  bg-[--accent1] rounded-[2em] text-[--wh] roboto text-[0.8rem] sm:text-xl'>
                <img src={next} className='sm:w-[30px] h-[20px] w-[10px] object-cover rotate-180' alt="" />
                <p className=''>Prev Chapter</p>
              </Link>
              <button onClick={handlechap} title='Chapters' className='sm:h-[40px] hover:scale-105 active:scale-[0.8] sm:active:scale-[1] duration-[0.5s] sm:w-[40px] w-[25px] h-[25px] flex items-center justify-center bg-[--accent1] rounded-[10px] sm:rounded-[1em]'>
                  <FontAwesomeIcon icon={faBookOpen} className='w-[70%]  h-[70%] text-white'/>
                </button>
              <Link className='py-[.5em] flex items-center gap-[.5em] px-[1em] hover:scale-105 active:scale-[0.8] sm:active:scale-[1] duration-[0.5s]  bg-[--accent1] rounded-[2em] text-[--wh] roboto text-[0.8rem] sm:text-xl'>
                <p>Next Chapter</p>
                <img src={next} className='sm:w-[30px] h-[20px] w-[10px] object-cover' alt="" />
              </Link>
            </div>
          </div>
          <p className='sm:py-[2em] py-[1em] font-sans sm:text-[1.1rem] line1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident vero saepe error vel tempore cumque eum, dignissimos nam quisquam eligendi ea omnis alias dolor unde cum? Vel omnis, sunt incidunt at obcaecati velit itaque impedit hic maiores illo aliquid fugiat est minus alias facilis soluta et nulla odit adipisci, eos natus! Inventore iste animi sequi perferendis error voluptate, harum, delectus recusandae sed ea quidem dignissimos voluptatibus vitae possimus, ab esse. Cum deserunt expedita atque, exercitationem itaque vel odit! Officiis enim ex accusantium quo. Possimus laborum, repellat commodi animi, dolore quam odio dolor enim, alias voluptatum aliquam ipsam impedit quidem. Ut in exercitationem dicta sapiente non iure nostrum illum nulla corrupti voluptas dolore repudiandae nisi porro deserunt, iste veniam accusamus blanditiis. Laudantium reiciendis accusamus corrupti vitae, labore itaque commodi ipsam enim maiores saepe in eos modi fugiat, sed est blanditiis asperiores. Corporis reiciendis, quibusdam quam ducimus quo atque et ab quas quod placeat totam, numquam consequatur distinctio ut maxime adipisci quos ullam illo fuga. Molestiae eius quisquam ipsum a dolor, ad quod aliquid tempore expedita. Aliquam beatae debitis, tempora voluptatum eaque rerum quibusdam sunt velit saepe quod dignissimos consectetur quisquam fugiat ipsum, eveniet neque quia. Libero suscipit labore provident facere. Incidunt pariatur vitae debitis quod excepturi id sapiente libero. Omnis tempore vero culpa corporis aut nobis commodi maiores illo ut iste, explicabo molestiae alias consequuntur repudiandae obcaecati architecto. Ratione, sapiente quibusdam rerum illo repellendus quaerat voluptatum sed eum ut nisi debitis tenetur, adipisci atque quia! Numquam veniam, optio facilis dignissimos molestiae facere neque quaerat, hic deserunt praesentium odit totam. Atque molestiae error officia dolorem totam, aspernatur, illo maiores ipsa iure incidunt harum doloremque? Numquam assumenda neque iusto eveniet, accusamus repellendus quidem perspiciatis, soluta quisquam maxime eum. Commodi et unde adipisci, modi nesciunt fugit cupiditate ut molestiae, dolorem quas voluptas ad eius exercitationem possimus laudantium maxime quaerat aliquid! Odio corrupti itaque quibusdam eaque quae facere vel asperiores maiores quos laudantium quod nesciunt totam libero perspiciatis, sapiente dicta non harum vitae expedita consequatur commodi explicabo tempore. Consequuntur iusto libero modi soluta sunt. Laboriosam eos omnis enim provident suscipit quod praesentium magni fugiat repudiandae reprehenderit repellat nulla dolorem natus dicta consectetur, voluptatibus consequatur exercitationem nemo aut culpa veniam iusto! Perferendis asperiores excepturi ex iste earum deserunt fugiat soluta, animi corporis minima veritatis impedit laudantium rem enim omnis possimus eaque optio corrupti voluptatem accusantium, quaerat quisquam, aperiam veniam quo. A illum ipsam veniam. Dignissimos id quos temporibus illo quis ut, nam voluptatibus fugiat! Magni rem similique error delectus molestiae consectetur dolores necessitatibus explicabo optio consequuntur, corporis quos quaerat eaque quia, laborum aliquam nemo dignissimos tempora. Eius necessitatibus reiciendis amet omnis totam obcaecati, veritatis quasi nemo velit id nesciunt inventore officia, fugiat nobis! Blanditiis perferendis impedit mollitia, iure consequatur libero cum ea ducimus doloribus nulla earum, quam, incidunt ipsum voluptatum aspernatur dicta sit reiciendis voluptate. Vitae similique placeat molestiae modi ipsum harum consequuntur, facere quia aliquam id illum nostrum pariatur veniam recusandae qui error reprehenderit dolore eum in vero nulla quae! Facere, optio labore soluta atque vitae consequatur similique accusantium! Voluptates, necessitatibus molestias qui placeat vitae dicta aut minima quas mollitia autem error dolorum architecto esse, maxime quaerat est laudantium eum doloremque numquam, quod ratione aliquam sunt quisquam ducimus! Harum vel corrupti blanditiis porro officia. Ab reiciendis cupiditate molestiae quos pariatur, quo consequuntur praesentium voluptatibus error beatae quas nemo harum voluptas ipsum tenetur! Repellat aperiam dignissimos facere blanditiis adipisci doloremque sapiente? Voluptate aut eos veritatis ipsum dolores aperiam dolor consequatur iusto reprehenderit atque, id nemo voluptatibus nostrum eaque vel, hic explicabo totam sint, tempore vero magni. Aperiam cupiditate, distinctio optio molestiae libero doloremque omnis? Pariatur, libero.</p>
        </section>
        <div className=' flex flex-col gap-[1em] mb-[2em]' id='down'>
              <div className='flex gap-[.5em] items-center  justify-center'>
                <Link className='py-[.5em] flex items-center gap-[.5em] px-[1em] sm:hover:scale-105 active:scale-[0.8] sm:active:scale-[1] duration-[0.5s]  bg-[--accent1] rounded-[2em] text-[--wh] roboto text-[0.8rem] sm:text-xl'>
                  <img src={next} className='sm:w-[30px] h-[20px] w-[10px] object-cover rotate-180' alt="" />
                  <p className=''>Prev Chapter</p>
                </Link>
                <Link onClick={handlechap} title='Chapters' className='sm:h-[40px] hover:scale-105 active:scale-[0.8] sm:active:scale-[1] duration-[0.5s] sm:w-[40px] w-[25px] h-[25px] flex items-center justify-center bg-[--accent1] rounded-[10px] sm:rounded-[1em]'>
                  <FontAwesomeIcon icon={faBookOpen} className='sm:w-[70%]  sm:h-[70%] text-white'/>
                </Link>
                <Link className='py-[.5em] flex items-center gap-[.5em] px-[1em] sm:hover:scale-105 active:scale-[0.8] sm:active:scale-[1] duration-[0.5s]  bg-[--accent1] rounded-[2em] text-[--wh] roboto text-[0.8rem] sm:text-xl'>
                  <p>Next Chapter</p>
                  <img src={next} className='sm:w-[30px]  h-[20px] w-[10px] object-cover' alt="" />
                </Link>
              </div>
              <div className='flex justify-center'>
                <Link className='py-[.5em] flex items-center gap-[.5em] px-[1em] sm:hover:scale-105 active:scale-[0.8] sm:active:scale-[1] duration-[0.5s] bg-[--accent] rounded-[2em] text-[--wh] roboto text-[0.8rem] sm:text-xl'>
                  Report Chapter
                </Link>
              </div>
        </div>
    </>
  )
}

export default ReadPage