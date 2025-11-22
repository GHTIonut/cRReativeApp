function NavBar() {
  const navButtons = ['Home', 'News', 'Sign in', 'Log In'];
  return (
    <div className='navBar'>
      {
        navButtons.map((label) => (
          <button key={label} className='navBarButtons'>
            {label}
          </button>
        ))
      }
    </div>
  )
}

export default NavBar