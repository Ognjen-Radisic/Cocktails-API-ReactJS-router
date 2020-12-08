import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef()

  const handleChange = () => {
    const curValue = searchValue.current.value
    setSearchTerm(curValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  //set the focus on input after refresh or page start
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favourite cocktail</label>
          <input
            type='text'
            id='name'
            onChange={handleChange}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
