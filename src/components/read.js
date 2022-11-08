import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component{
    
    //axios will make http request to the link at port 4000
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')

         //when response comes back it will update the state and return it to books
        .then((response)=>{
            this.setState({books:response.data.myBooks})
        })
        ////if there an error console will show the error
        .catch((error)=>{
            console.log(error);
        })
    }

    //state has an array called books
    state = {
        books:[ ]
    }
    
    //render will return our display
    render(){
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}
