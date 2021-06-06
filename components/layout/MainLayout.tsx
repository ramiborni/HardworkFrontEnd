import {
    AppBar,
    Button,
    Container,
    Grid,
    IconButton,
    Toolbar,
    Typography
} from "@material-ui/core";
import Head from "next/head";
import React from "react";
import Utilities from '../../styles/Utilities.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';

const MainLayout = ({children}) => {
    return (
        <>
            <Head>
                <title>HardWork - Home</title>
                <meta name="description" content="HardWork Co-spacing"/>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Grid container>
                <Grid item
                    xs={12}
                    lg={8}
                    className="bg-white space-y-5">
                    <AppBar position="static"
                        elevation={0}
                        color="transparent">
                        <Toolbar className="space-x-5 bg-white">
                            <img height="50" width="50" className="rounded-full" src="/logo.png"/>
                            <Typography className={
                                    Utilities.hardwork
                                }
                                variant="h5">HARDWORK</Typography>
                            <span className="text-right justify-end flex-1">
                                <Button className="text-gray-400">ع</Button>
                                <Button className="text-gray-400">FR</Button>
                                <Button>ENG</Button>
                            </span>

                        </Toolbar>

                    </AppBar>
                    <Container className="p-24 py-14 space-y-7">
                        <Typography variant="h2"
                            className={
                                Utilities.title
                        }>
                            Shared Spaces .. <br/>
                            To grow together
                        </Typography>
                        <Typography variant="h5">
                            Do you need a space for your startup? <br/>
                            or an office for your first business? <br/> <br/>
                            <b>WELL YOU CAN HAVE IT WITH US !</b>

                        </Typography>
                        <Button disableElevation style={{width:'360px'}} variant="contained" color="primary" className={Utilities.title}>JOIN US !</Button>
                    </Container>

                </Grid>
                <Grid className="pl-24" item
                    xs={12}
                    lg={4}
                    style={
                        {
                            background: 'url("/images/background0.jpg") no-repeat ',
                            backgroundSize: '250% auto',
                            height: '600px'
                        }
                }></Grid>

            </Grid>
            <Container className="p-24 mt-18 space-y-10">
                {children}
            </Container>
            <div style={{'backgroundColor':'#1a1a1a'}} className="p-24 space-y-10 text-center">
                <Typography variant="h3" className={Utilities.title+' text-white'}>
                    Interested ? Join us.
                </Typography>
                <Button variant="contained" color="primary" disableElevation className="text-black">
                    Join to &nbsp; <b style={{marginTop:'2px',marginLeft:'-1px'}} className={Utilities.hardwork}>HARDWORK</b>
                </Button>
                <div style={{height:'100px'}}></div>
                <Grid container alignItems="center">
                    <Grid item xs={12} lg={4} className="text-left">
                        <IconButton className="text-white">
                            <FacebookIcon></FacebookIcon>
                        </IconButton>
                        <IconButton className="text-white">
                            <InstagramIcon></InstagramIcon>
                        </IconButton>
                        <IconButton className="text-white">
                            <EmailRoundedIcon></EmailRoundedIcon>
                        </IconButton>
                        <IconButton className="text-white">
                            <PhoneRoundedIcon></PhoneRoundedIcon>
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} lg={8} className="text-right text-white justify-items-end items-end space-y-5 justify-end flex flex-col">
                        <img  height="50" width="50" src="/logo.png"/>
                        <Typography>
                          All rights reserved to <span>Hardwork</span> - 2021
                        </Typography>
                    </Grid>
                
                </Grid>
            </div>

        </>
    );
}

export default MainLayout;
