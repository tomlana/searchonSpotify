import React,{ useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchForm = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const handleInputChange = (event) => {
      const searchTerm = event.target.value;
      setSearchTerm(searchTerm);
    };
    const handleSearch = (event) => {
      event.preventDefault();
      if (searchTerm.trim() !== '') {
        setErrorMsg('');
        props.handleSearch(searchTerm);
      } else {
        setErrorMsg('Enter a word to search');
      }
    } 

    return (
        <div>
          <Form onSubmit={handleSearch}>
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter a word...</Form.Label>
              <Form.Control
                type="search"
                name="searchTerm"
                value={searchTerm}
                placeholder="You can search for a album, a artist or a playlist"
                onChange={handleInputChange}
                autoComplete="off"
              />
            </Form.Group>
            <Button variant="info" type="submit">
              Find
            </Button>
          </Form>
        </div>
      )
    }
    

    export default SearchForm 