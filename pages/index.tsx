import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography
} from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Utilities from '../styles/Utilities.module.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
export default function Home() {
    const events = [
        {
            img: 'https://i.imgur.com/QFUdk5V.jpg',
            date: '12 June',
            title: 'Workshop for female univ students',
            description: 'Lorem ipsum dolor sit amet, consr adipiscing elit.'

        }, {
            img: 'https://i.imgur.com/0fYIxEr.jpg',
            date: '18 June',
            title: 'Workshop for learning playing Guitar',
            description: 'Lorem ipsum dolor sit amet, consr adipiscing elit.'

        }, {
            img: 'https://i.imgur.com/vJa1w09.jpg',
            date: '23 June',
            title: 'Workshop for learning photography',
            description: 'Lorem ipsum dolor sit amet, consr adipiscing elit.'

        }
    ]

    const articles = [
        {
            img: 'https://rosetran.me/wp-content/uploads/2019/03/The-Most-Important-Factors-for-Startup-Success_Open-Graph-Image.png',
            title: 'Startup is for everyone'
        },
        {
            img: 'https://blog.hotmart.com/blog/2018/08/%D9%85%D8%B9%D9%86%D9%89-%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D9%86%D8%A7%D8%B4%D8%A6%D8%A9-Startup-670x419.png',
            title: 'Get your first costumer'
        },
        {
            img: 'https://www.cloudways.com/blog/wp-content/uploads/55-best-1.jpg',
            title: 'Best 50 Startup in the world'
        },
        {
            img: 'http://www.netocratic.com/wp-content/uploads/sites/3/2014/10/Startup.jpg',
            title: 'Top 10 startup stories of 2020'
        }, {
            img: 'https://scontent.fblj1-1.fna.fbcdn.net/v/t1.6435-9/189925863_1002590080479530_2002735260246749542_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=epvdM7U8h5EAX-TYU3p&_nc_ht=scontent.fblj1-1.fna&oh=7dac9916b79b8caaf6e00a866fff6f50&oe=60E1C562',
            title: 'Algeria Startup Challenge'
        },
    ]

    return (
        <>

            <MainLayout>
                <Grid container>
                    <Grid item
                        xs={12}
                        lg={6}
                        className="p-10">
                        <div className="space-y-5">
                            <Typography variant="h6"
                                className={
                                    Utilities.title
                            }>
                                Benifits
                            </Typography>
                            <Typography variant="h3"
                                className={
                                    "font-bold " + Utilities.title
                            }>
                                <span className={
                                    Utilities.hardwork
                                }>HARDWORK &nbsp;
                                </span>
                                is not about only offices,
                                <br/>
                                is about the lifestyle.
                            </Typography>

                        </div>
                        <div className="mt-36 space-y-20">
                            <List>
                                <ListItem>
                                    <ListItemIcon className="font-bold -mt-1 -mr-3"
                                        style={
                                            {fontSize: '35px'}
                                    }>
                                        +
                                    </ListItemIcon>
                                    <ListItemText primary={
                                        <Typography
                                        variant="subtitle1"
                                            className={
Utilities.title}>
                                        Dedicated Desks</Typography>
                                    }/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon className="font-bold -mt-1 -mr-3"
                                        style={
                                            {fontSize: '35px'}
                                    }>
                                        +
                                    </ListItemIcon>
                                    <ListItemText primary={
                                        <Typography
                                        variant="subtitle1"
                                            className={
Utilities.title}>
                                        High speed WI-FI</Typography>
                                    }/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon className="font-bold -mt-1 -mr-3"
                                        style={
                                            {fontSize: '35px'}
                                    }>
                                        +
                                    </ListItemIcon>
                                    <ListItemText primary={
                                        <Typography
                                        variant="subtitle1"
                                            className={
Utilities.title}>
                                        COFFEE SPACE</Typography>
                                    }/>
                                </ListItem>

                            </List>

                            <img className="pt-48" src="/images/background2.jpg"/>

                        </div>
                    </Grid>
                    <Grid item
                        xs={12}
                        lg={6}
                        className="mt-80 space-y-32 p-3">
                        <img className="m-auto" src="/images/background1.jpg"/>
                        <List className="pt-28">
                            <ListItem>
                                <ListItemIcon className="font-bold -mt-1 -mr-3"
                                    style={
                                        {fontSize: '35px'}
                                }>
                                    +
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography
                                    variant="subtitle1"
                                        className={
Utilities.title}>
                                    MEETING ROOM</Typography>
                                }/>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon className="font-bold -mt-1 -mr-3"
                                    style={
                                        {fontSize: '35px'}
                                }>
                                    +
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography
                                    variant="subtitle1"
                                        className={
Utilities.title}>
                                    AIR CONDITIONING</Typography>
                                }/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon className="font-bold -mt-1 -mr-3"
                                    style={
                                        {fontSize: '35px'}
                                }>
                                    +
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography
                                    variant="subtitle1"
                                        className={
Utilities.title}>
                                    READING SPACE</Typography>
                                }/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon className="font-bold -mt-1 -mr-3"
                                    style={
                                        {fontSize: '35px'}
                                }>
                                    +
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography
                                    variant="subtitle1"
                                        className={
Utilities.title}>
                                    PRINTING</Typography>
                                }/>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <div className="justify-center text-center pt-10">
                    <Button disableElevation color='primary' variant="contained"
                        className={
                            Utilities.title
                        }
                        style={
                            {width: '360px'}
                    }>JOIN US !</Button>
                </div>

                <section className="text-center pt-24 space-y-12">
                    <Typography variant="h3"
                        className={
                            Utilities.title + ' font-bold'
                    }>
                        Upcoming Events
                    </Typography>
                    <Grid container
                        spacing={2}>
                        {
                        events.map((e, i) => <Grid item
                            key={
                                'event-' + i
                            }
                            xs={12}
                            lg={4}>
                            <CardActionArea className="rounded-lg pt-4">
                                <img style={
                                        {height: '200px'}
                                    }
                                    className="rounded-lg w-4/5 m-auto"
                                    src={
                                        e.img
                                    }/>
                                <Paper elevation={0}
                                    className="p-0 shadow-md rounded-lg text-left -mt-16">

                                    <div className="px-5 py-5 pt-20">
                                        <Grid container
                                            spacing={6}>
                                            <Grid item
                                                xs={12}
                                                lg={2}>
                                                <Typography className={
                                                        Utilities.title + ' -mt-2 text-yellow-400'
                                                    }
                                                    variant="subtitle1">
                                                    {
                                                    e.date.split(' ')[1]
                                                } </Typography>
                                                <Typography className={
                                                        Utilities.title + ' font-semibold'
                                                    }
                                                    variant="h4">
                                                    {
                                                    e.date.split(' ')[0]
                                                } </Typography>
                                            </Grid>
                                            <Grid item
                                                xs={12}
                                                lg={10}
                                                className="space-y-2">
                                                <Typography className={
                                                        Utilities.title + ' font-semibold'
                                                    }
                                                    variant="subtitle1">
                                                    {
                                                    e.title
                                                } </Typography>
                                                <Typography className={' font-semibold'}
                                                    variant="caption">
                                                    {
                                                    e.description
                                                } </Typography>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </Paper>
                            </CardActionArea>
                        </Grid>)
                    } </Grid>
                    <Button variant="contained" disableElevation color="primary"
                        className={
                            Utilities.title
                        }
                        style={
                            {width: '200px'}
                    }>SEE MORE</Button>

                </section>
                <section className="text-center pt-24 space-y-12">
                    <Typography variant="h3"
                        className={
                            Utilities.title + ' font-bold'
                    }>
                        Articles
                    </Typography>
                    <div>
                        <Grid container
                            spacing={2}>
                            <Grid item
                                xs={12}
                                lg={6}
                                className="text-left">
                                <CardActionArea>
                                    <Paper className="mb-2"
                                        style={
                                            {
                                                background: 'url("' + articles[0].img + '") center center',
                                                height: '400px'
                                            }
                                    }></Paper>
                                    <Typography variant="h4"
                                        className={
                                            Utilities.title
                                    }>
                                        {
                                        articles[0].title
                                    }</Typography>
                                </CardActionArea>
                            </Grid>
                            <Grid xs={12}
                                lg={6}
                                item>
                                <Grid container
                                    spacing={2}
                                    className="text-left">
                                    {
                                    articles.slice(1).map((article, i) => <Grid item
                                        key={
                                            'article-' + i
                                        }
                                        xs={12}
                                        lg={6}>
                                        <CardActionArea className="">
                                            <Paper className="mb-2"
                                                style={
                                                    {
                                                        background: 'url("' + article.img + '") no-repeat center center',
                                                        backgroundSize: 'cover',
                                                        height: '145px',
                                                        width: '100%'
                                                    }
                                            }></Paper>
                                            <Typography variant="h4"
                                                className={
                                                    Utilities.title
                                            }>
                                                {
                                                article.title
                                            }</Typography>
                                        </CardActionArea>
                                    </Grid>)
                                } </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <Button variant="contained" disableElevation color="primary"
                        className={
                            Utilities.title
                        }
                        style={
                            {width: '200px'}
                    }>SEE MORE</Button>
                </section>
                <section className="pt-24">
                    <Grid container
                        spacing={4} alignItems="center">
                        <Grid item
                            xs={12}
                            lg={6}
                            className="p-24">
                            <Typography variant="h4"
                                className={
                                    Utilities.title
                            }>
                                WELCOME IN &nbsp;
                                <span className={
                                    Utilities.hardwork
                                }> HARDWORK &nbsp;
                                </span>
                                YOU'LL FIND US IN COMMERCIAL CENTER -
                                <b>Elkhir</b>
                            </Typography>
                        </Grid>
                        <Grid item
                            xs={12}
                            lg={6}
                            className="p-12">
                            <Paper elevation={0}
                                className="rounded-lg shadow-md">
                                <iframe className="rounded-lg shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.9960259446348!2d5.721502914722172!3d34.856327182376006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f509911dc60691%3A0xceb11ae4420fbb7e!2sHARDWORKDZ!5e0!3m2!1sfr!2sbg!4v1617778625886!5m2!1sfr!2sbg" width="100%" height="450" style={{border:0}} loading="lazy"></iframe>
                            </Paper>
                        </Grid>
                    </Grid>

                </section>
            </MainLayout>

        </>
    )
}
