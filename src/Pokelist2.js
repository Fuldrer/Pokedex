import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddPoke from './AddPoke'
import Form1 from './Form/Form1'

class Pokelist2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pokes:[
                {
                    img: "https://vignette.wikia.nocookie.net/es.pokemon/images/4/43/Jumpluff.png/revision/latest/scale-to-width-down/350?cb=20151017005916",
                    name: "Jumpluff",
                    tipo1: "Volador",
                    tipo2: "Planta",
                    altura: "0.8",
                    peso:"3",
                    ratio: "98%"
                },
                {
                    img:"https://vignette.wikia.nocookie.net/es.pokemon/images/d/dd/Marshadow.png/revision/latest/scale-to-width-down/350?cb=20170615143647",
                    name: "Marshadow",
                    tipo1: "Lucha",
                    tipo2: "Fantasma",
                    altura: "0.7",
                    peso:"22.2",
                    ratio: "50%"
                },
                {
                    img: "https://vignette.wikia.nocookie.net/es.pokemon/images/d/da/Whimsicott.png/revision/latest?cb=20140702132649",
                    name: "Whimsicott",
                    tipo1: "Planta",
                    tipo2: "Hada",
                    altura: "0.7",
                    peso:"6.6",
                    ratio: "75%"
                },
                {
                    img: "https://vignette.wikia.nocookie.net/es.pokemon/images/9/95/Emolga.png/revision/latest/scale-to-width-down/350?cb=20150321124404",
                    name: "Emolga",
                    tipo1: "Electrico",
                    tipo2: "Volador",
                    altura: "0.4",
                    peso:"5",
                    ratio: "70%"
                }
            ]
        };
    }
    render(){
        return(
            <div>
                <div style={{display: 'flex',flexWrap: 'wrap',alignItems: 'center',justifyContent: 'space-around',overflow: 'hidden'}}>
                    <AddPoke></AddPoke>
                    <GridList cellHeight={180} style={{width: 500,height: 450}} >
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <ListSubheader component = "div">Pokemons</ListSubheader>
                        </GridListTile>
                        {this.state.pokes.map(tile => (
                            <GridListTile key = {tile.img}>
                                <img src= {tile.img} alt={tile.name}/>
                                    <GridListTileBar 
                                        title = {tile.name}
                                        subtitle={<span>Tipo: {tile.tipo1}, Tipo: {tile.tipo2}</span> }
                                        actionIcon = {
                                        <IconButton aria-label={`info about ${tile.name}`} style={{color: 'rgba(255, 255, 255, 0.54)'}}>
                                            <InfoIcon/>
                                        </IconButton>
                                    }/>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        );
    }
}

export default Pokelist2;