import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css'
const axios = require("axios");


export class Image extends Component {
    constructor() {
        super()
        this.state = {
            drinks: [],
            msg: "Loading..."
        }
    }

    render() {
        var cocktails = []
        const { state } = this.props
        const { alcoholic, category, images } = state
        console.log(images.length)
        console.log(this.state.drinks)
        if (this.state.drinks.length == 0) {
            for (var i = 0; i < images.length; i++) {
                axios({
                    "method": "GET",
                    "url": "https://the-cocktail-db.p.rapidapi.com/lookup.php",
                    "headers": {
                        "content-type": "application/octet-stream",
                        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                        "x-rapidapi-key": "1a2058a4d4msh294a4f020889205p10aa5bjsn2821980a3789",
                        "useQueryString": true
                    }, "params": {
                        "i": images[i]
                    }
                })
                    .then((response) => {
                        var y = response.data.drinks
                        cocktails = cocktails.concat([[y[0].strAlcoholic, y[0].strCategory, y[0].strGlass, y[0].strDrink, y[0].strDrinkThumb]])
                        console.log(y, cocktails)
                    })
                    .then(() => {
                            this.setState({ drinks: cocktails }) 
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
        const func = () => {
            this.setState({ msg: "Not Found" })
        }
        let imagepreview
        if (this.state.drinks.length != 0) {
            imagepreview = this.state.drinks.map((image) => {
                return (
                    <div className="card" >
                        <img src={image[4]} alt="Card image cap" />
                        <div className="body">
                            <h1>{image[3]}</h1>
                            <span >{image[0]}</span><span >{image[1]}</span><span >{image[2]}</span>
                        </div>
                    </div>
                )
            })
        } else {
            setTimeout(() => {
                func()
            }, 2000);
            imagepreview = <h1>{this.state.msg}</h1>
        }

        return (
            <div className="dispay" >
                {imagepreview}
            </div >
        )
    }
}

Image.propTypes = {
    images: PropTypes.array.isRequired
}
export default Image
