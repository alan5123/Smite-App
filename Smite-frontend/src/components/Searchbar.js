import React from "react";
import "./Searchbar.css"

function Searchbar({ query, setQuery }) {


    const handleInputChange = event => {
        setQuery(event.target.value);
    };

    return (
        <div >

            <form className="searchbar" >

                <input type="text"
                    onChange={handleInputChange}
                    value={query}
                    name="name"
                    tabIndex="0"
                    className="prompt"
                    placeholder="Search Gods..."
                    autoComplete="off" />


            </form>
        </div>
    )
}

export default Searchbar