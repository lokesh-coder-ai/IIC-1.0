import {Card,CardContent,CardMedia,Typography,CardActionArea }from '@mui/material';
import staffdata from "./data/staffdata";
import studentdata from "./data/studentdata";
import expertdata from './data/expertdata';
import ambassadorsdata from './data/ambassadorsdata';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import MailIcon from '@mui/icons-material/Mail';
const customstyle = {
    display: "inline-flex",justifyContent:"center", margin: "10px", textAlign: "center",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    position: "relative",
    
}


function App(props) {
    var data;
    if (props.type === "staff")
        data = staffdata;
    else if (props.type === "student")
        data = studentdata;
    else if (props.type === "expertdata")
        data = expertdata;
    else if (props.type === "ambassadorsdata")
        data = ambassadorsdata;

        return <Grid container spacing={1}> {data.map((x) => {
            const xyz=x.email;
           return <Grid item xs={12} md={4} lg={3}> <div style={customstyle}>
            <Card  sx={{ width:"250px",height:"440px"}} >
                    <CardActionArea>
                    <Card sx={{width:"250px",height:"300px"}}><CardMedia 
                            alt={x.title}
                            component="img"
                            height="100%"
                            width="100%"
                            image={x.imglink} 
                    /></Card>
                        <CardContent>
                         <Typography gutterBottom variant="h6" component="div" >
                            {x.Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {x.discription}
                        </Typography>
                         
                        <a href={x.profile} > <LinkedInIcon /> </a>
                        <a href={x.email}><MailIcon/></a>
                        
                        </CardContent>
                </CardActionArea> 
            </Card></div>
            </Grid>
             
    })} </Grid> 


}
export default App;
