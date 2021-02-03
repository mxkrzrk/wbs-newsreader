import React from "react"
import Container from "../Container/Container"

function Card({title,author,points,objectID,url}){
    return(
        <Container class="row" id={objectID}>
            <div class="col-12">
                <h6 href={url}>{title}</h6>
                <div class="row justify-content-left">
                    <p class="col-auto">by:{author}</p>
                    <p class="col-auto" >points:{points}</p>
                </div>
            </div>
         
        </Container>
    )
}

export default Card



// "title": "Python vs. JavaScript – What Are the Key Differences?"
// "author": "oedmarap"
// "points": 1
// "objectID": "25977892"
// "url": "https://www.freecodecamp.org/news/python-vs-javascript-what-are-the-key-differences-between-the-two-popular-programming-languages/"