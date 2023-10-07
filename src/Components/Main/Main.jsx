import './Main.scss'

export default function Main() {
  return (
    <div className='App'>
        <main className='main'>
        <div className='main__post post'>
          <div className='post__info infor'>
            <h3 className='infor__subtitle'>Featured Post</h3>
            <h2 className='infor__title'>Step-by-step guide to choosing great font pairs</h2>
            <h6 className='infor__author'>By John Doe   |   May 23, 2022 </h6>
            <p className='infor__text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <button className='infor__btn'>Read More</button>
          </div>
          <div className='post__image image'>
            <img src='../../img/2.jpeg'  alt='картинка'></img>
          </div>
        </div>
        <div className='div'>
        <h2 className='allposts'>All posts</h2>
        </div>
        <div className='main__article article'>
          <div className='cardpos'>
          <div className='article__image'>
            <img  alt='картинка'></img>
          </div>
          <div className='article__information information'>
            <h3 className='information__subtitle'>Start up</h3>
            <h2 className='information__title'>Design tips for designers that cover everything you need</h2>
            <p className='information__text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
          </div>
          <div className='cardpos'>
          <div className='article__image'>
            <img   alt='картинка'></img>
          </div>
          <div className='article__information information'>
            <h3 className='information__subtitle'>BUSINESS</h3>
            <h2 className='information__title'>How to build rapport with your web design clients</h2>
            <p className='information__text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
          </div>
          <div className='cardpos'>
          <div className='article__image'>
            <img  alt='картинка'></img>
          </div>
          <div className='article__information information'>
            <h3 className='information__subtitle'>Start up</h3>
            <h2 className='information__title'>Logo design trends to avoid in 2022</h2>
            <p className='information__text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
          </div>
          <div className='cardpos'>
          <div className='article__image'>
            <img  alt='картинка'></img>
          </div>
          <div className='article__information information'>
            <h3 className='information__subtitle'>TECHNOLOGY</h3>
            <h2 className='information__title'>8 Figma design systems you can download for free today</h2>
            <p className='information__text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
          </div>
        </div>
        <div className='cat'>
        <h2 className='allpost'>All catefories</h2>
        </div>
        <div className='main__categories categories'>
          <div className='categories__card'>
            <img  className='categories__img'></img>
            <h2 className='categories__title'>Business</h2>
            <p className='catefories__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className='categories__card'>
            <img  className='categories__img'></img>
            <h2 className='categories__title'>Start up</h2>
            <p className='catefories__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className='categories__card'>
            <img  className='categories__img'></img>
            <h2 className='categories__title'>Economy</h2>
            <p className='catefories__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className='categories__card'>
            <img  className='categories__img'></img>
            <h2 className='categories__title'>Technology</h2>
            <p className='catefories__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
        </div>
       </main>
    </div>
  )
}
