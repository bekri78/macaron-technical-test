import React,{useState} from "react";
import { format } from 'date-fns'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import "./cardTournage.css";
export default function CardTournage(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (test) => {
   
    setExpanded(!expanded);
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

 
  

  return (
    <>
    <Card className='card' sx={{ maxWidth: 300, minWidth: 300, margin:1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
         { props.nom_realisateur ?  props.nom_realisateur.charAt(0) : "?"}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ <p style={{height:25}}> {props.nom_realisateur ? props.nom_realisateur : "Indisponible"}</p>}
        subheader= {props.nom_tournage} 
      />
      <CardMedia
        component="img"
        height="194"
        image={`https://maps.googleapis.com/maps/api/streetview?size=600x600&location=${props.lat},${props.lng}&heading=360&pitch=-0.76&key=AIzaSyATaVEl_K2D9IcWPICwcog27_C1TsOQGr0`}
        alt="google street img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Année : { props.annee_tournage  }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Debut du Tournage: {format(new Date(props.date_debut), 'MM/dd/yyyy') }
          </Typography>
        <Typography variant="body2" color="text.secondary">
              Lieu: {props.lieu}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color="text.secondary">
        Information : 
          </Typography>
          <Typography paragraph color="text.secondary">
         Nom du tournage: {props.nom_tournage} 
          </Typography>
          <Typography paragraph color="text.secondary">
         Type de tournage: {props.type_tournage} 
          </Typography>
          <Typography paragraph color="text.secondary">
          Date fin du Tournage: {format(new Date(props.date_fin), 'MM/dd/yyyy') }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
   
    </>
  );
}
