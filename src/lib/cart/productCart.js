import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

const style={
  icon:{
    marginLeft:'80%'
  }
}

export default function ProductCard(props) {

  const [isEdit,showIsEdit] = React.useState(false)

    const {title,id,update} = props

  const showIcon=()=>{
    showIsEdit(true)
  }

  const hideIcon=()=>{
    showIsEdit(false)
  }

  return (
    <Card sx={{ maxWidth: 250,marginLeft:'5px',cursor:'pointer' }}
    onMouseEnter={showIcon} onMouseLeave={hideIcon}>
      {
        isEdit?
           <EditIcon style={style.icon} onClick={()=>update(id)}/>:
           null
      }
     {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
  />*/}
      <CardContent>
        <Typography variant="h6" component="div" style={{textAlign:'center',marginBottom:'-10px'}}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

