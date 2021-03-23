import React from 'react'
import './App.css';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import AddLocationTwoToneIcon from '@material-ui/icons/AddLocationTwoTone';

// import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// importing styles
import useStyles from './styles'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const App = () => {

   const classes = useStyles();

   return (
     <>
       <CssBaseline/>
       <AppBar position='relative'>
          <Toolbar>
            <AddLocationTwoToneIcon className={classes.icon}/>
            <Typography variant ='h6 '>
             WaWi Album
            </Typography>
          </Toolbar>
       </AppBar>
       <main>

         <div className={classes.container}>

           <Container maxWidth='sm' style={{ marginTop: '100px'}}>
             <Typography variant='h1' align='center' color='textPrimary' gutterBottom>
               Wawi Album
             </Typography>
             <Typography variant='h5' align='center' color='textSecondary' parragraph>
               Sebi traveled on his first two years of life to 6 countries: Mexico, Canada, EUA, Sapain, Italy, France and Chile
             </Typography>

             <div className={classes.buttons}>
               <Grid container spacing={2} justify='center'>
                 <Grid item>
                   <Button variant='contained' color='secondary'> See my Photos </Button>
                 </Grid>
                 <Grid item>
                   <Button variant='outlined' color='secondary'> See my Photos </Button>
                 </Grid>
               </Grid>
             </div>

           </Container>
         </div>
         <br/>
           <Typography align='center' variant='h1'>Hello WAWI</Typography>
           <h1>Hello WAWI</h1>
         {/* BUTTON GROUP */}
         <br/>
         <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
           <Button>One</Button>
           <Button>Two</Button>
           <Button>Three</Button>
         </ButtonGroup>
       </main>

       <Container className={classes.cardGrid} maxWidth='md'>
         <Grid container spacing={4} >
           {/* LOOPING TO SHOW 10CARDS USING MAP FUNCTION */}
           
           
           {cards.map((card) => (
            //  The next command is for responsiveness
           <Grid item key={card} xs={12} sm={6} md={4}>
             <Card className={classes.card}>
               <CardMedia className={classes.cardMedia} 
               image='https://source.unsplash.com/random'
               title='Image title'
               />
               <CardContent className={classes.cardContent}>
                 <Typography gutterBottom variant='h5'>
                   Heading
                 </Typography>
                 <Typography>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, reiciendis!
                 </Typography>
               </CardContent>
                 <CardActions>
                   <Button size='small' color='secondary'>View</Button>
                   <Button size='small' color='primary'>Edit</Button>
                 </CardActions>
             </Card>
           </Grid>
           ))}
         </Grid>
       </Container>

      <br/>

       <footer className={classes.footer}>
         <Typography variant='h6' align='center' gutterBottom>
           Footer
         </Typography>
         <Typography variant='subtitle1' align='center' color='textPrimary'>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, voluptatem.
         </Typography>
       </footer>
    </>
  )
}

export default App;
