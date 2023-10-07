import './Header.scss'

export default function Header() {
  return (
    <div className='App'>
         <header className="App-header header">
        <div className='header__info info'>
          <div className='qwer'>
          <div className='info__name name'>
            <h2 className='name__text'>Finsweet</h2>
          </div>
          <div className='info__trans trans'>
<ul className='trans__menu'>
  <li className='trams__list'> 
    <a href='#' className='trans__link'>Home</a>
  </li>
  <li className='trams__list'> 
    <a href='#' className='trans__link'>Blog</a>
  </li>
  <li className='trams__list'> 
    <a href='#' className='trans__link'>About Us</a>
  </li>
  <li className='trams__list'> 
    <a href='#' className='trans__link'>Contact us</a>
  </li>
</ul>
          </div>
          </div>
        </div>
       </header>
    </div>
  )
}
