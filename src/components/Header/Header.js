import React from "react";

const Header= () => {
    return(
    <header>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#Bfcca1"}}>
            <a className="navbar-brand" href="#">NewsReader</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">New</a>
                    <a className="nav-item nav-link" href="#">Past</a> 
                </div>
            </div>    
        </nav>
    </header>

    )
} 
export default Header;
