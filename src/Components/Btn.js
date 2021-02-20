import React, { Component } from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


export class Btn extends Component {


    render() {
        const { clicked, onchange, state, onchanges } = this.props
        const { category, alcoholic, glass, } = state
        return (
            <>
                <Button variant="contained" color="primary" onClick={clicked}>Search</Button>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={onchange}
                    name="category"
                >
                    <MenuItem value={'Cocktail'}>Cocktail</MenuItem>
                    <MenuItem value={"Ordinary_Drink"}>Ordinary Drink</MenuItem>
                </Select>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={alcoholic}
                    onChange={onchange}
                    name="alcoholic"
                >
                    <MenuItem value={"Alcoholic"}>Alcoholic</MenuItem>
                    <MenuItem value={"Non_Alcoholic"}>Non Alcoholic</MenuItem>
                </Select>
            </>
        )
    }
}

export default Btn
