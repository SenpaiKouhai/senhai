import React, { useEffect, useState } from 'react'
import jikan from 'jikanjs'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { useDispatch } from 'react-redux'
import { playing, searchAnime } from '../redux/action'
import { OpVideo } from './OpVideo'

function Featured( { page, id, image, index } ) {

    const useStyles = makeStyles( (theme) => ({
        root: {
            height: 'auto',
            paddingBottom: '10px',
            backgroundColor: '#303030'
        },
        title: {
            padding: '30px'
        },
        featureContainer: {
            height: '100%',
            padding: '30px',
            // width: '100%'
        },
        featuredTitle: {
            // paddingTop: '30px',
            // paddingLeft: '30px',
            marginBottom: '10px'
        },
        status: {
            // marginBottom: '20px',
            paddingTop: '5px',
            // marginLeft: '30px'
        },
        genre: {
            // paddingLeft: '30px'
        },
        mobileContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        details: {
            float: 'left',
            textAlign: 'left',
            width: '40%',
            [theme.breakpoints.down('xs')]: {
                float: 'none',
                textAlign: 'center',
                width: '100%',
            }
        },
        trailer: {
            float: 'right',
            outline: 'none',
            width: '50%',
            height: '80%',
            [theme.breakpoints.down('xs')]: {
                display: 'none'
            }
        },
    
        topSeasonPaper: {
            margin: '20px',
            padding: '20px',
            
        },
        img: {
            width: '50%',
            objectFit: 'cover',
            height: '300%'
        },
        featuredImg: {
            height: '500px',
            width: '100%',
            background: 'rgba(0, 0, 0, .65) url(' + image + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundBlendMode: 'darken',
            [theme.breakpoints.down('xs')]: {
                height: '350px'
            }
        },
        btnContainer: {
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-evenly'
        },
        btnWatch: {
            marginTop: '20px',
            padding: '10px',
        },
        link: {
            textDecoration: 'none'
        }
    }))

    //https://media.kitsu.io/anime/poster_images/43545/original.jpg?1609224996
    // console.log(window.innerWidth)
    const classes = useStyles()
    const [trailer, setTrailer] = useState('')
    const [status, setStatus] = useState('')
    const [jap, setJap] = useState('')
    const [play, setPlay] = useState(false)
    const [op, setOp] = useState('')
    const [ed, setEd] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        let unmount = false
        jikan.loadAnime(id)
        .then( res => {
            if (!unmount) {
            // console.log(res)
            setTrailer(res.trailer_url)
            setStatus(res.status)
            setJap(res.title_japanese)
            setOp(res.opening_themes)
            setEd(res.ending_themes)
            setLoading(false)
            }
        })
        .catch( res => console.log(res))
        return () => unmount = true
    }, [id])

    // console.log(trailer.split('=').slice(0,3).join('=') + '=0') to disable auto play when load
    // console.log(trailer)
    const dispatch = useDispatch()

    // const handlePlay = () => {
    //     setPlay(true)
    //     dispatch(playing(play))
    // }

    return loading ? <Loading /> : (
        <Box className={classes.featuredImg}>
            <Box className={classes.featureContainer}>
                <Box className={classes.details}>
                    <Typography variant={ window.innerWidth < 600 ? 'h5' : 'h4'} className={classes.featuredTitle}>
                        {page[index].title}
                    </Typography>

                    <Box className={classes.mobileContainer}>
                        <Typography variant='subtitle2'>
                            Japanese: {jap}
                        </Typography>
                    </Box>

                    <Typography component='span' variant={ window.innerWidth < 600 ? 'subtitle1' : 'body1'} className={classes.genre}>
                        Genre: {page[index].genres.map( (i,index) => (<span key={index}>{i.name} </span>))}
                    </Typography>
                    <Typography variant={ window.innerWidth < 600 ? 'subtitle1' : 'body1'} className={classes.status}>
                        Status: {status}
                    </Typography>

                    <Box className={classes.mobileContainer}>
                        <Typography variant={ window.innerWidth < 600 ? 'subtitle1' : 'body1'}>
                            Opening Song: {op}
                        </Typography>
                        <Typography variant={ window.innerWidth < 600 ? 'subtitle1' : 'body1'}>
                            Ending Song: {ed}
                        </Typography>
                    </Box>

                    <Box className={classes.btnContainer}>
                        <Button variant='outlined' className={classes.btnWatch}>
                            Trailer
                        </Button>

                        <Link to={'/search/' + page[index].title.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').filter( e => e.trim() ).join(' ')} onClick={ () => dispatch(searchAnime(page[index].title.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').filter( e => e.trim() ).join(' ')))} className={classes.link}>
                            <Button variant='outlined' className={classes.btnWatch}>
                                Watch Now
                            </Button>
                        </Link>
        
                    </Box>
                </Box>

                <Box className={classes.trailer}>
                    {/* <OpVideo id={id} /> */}
                {/* <iframe src={trailer.split('=').slice(0,3).join('=') + '=0'}  frameBorder='0' className={classes.trailer} onClick={ () => console.log('playing')}/> */}

                    {/* <ReactPlayer 
                        url={trailer.split('=').slice(0,3).join('=') + '=0'}
                        controls
                        // playing={ () => setPlay(!play)}
                        onPlay={handlePlay}
                        height='100%'
                    /> */}
                    {/* <OpSong id={id} /> */}
                    {/* <video 
                        src='https://animethemes.moe/video/ShingekiNoKyojinS4-OP1.webm' 
                        controls 
                        width='100%'
                        height='auto'
                    /> */}

                </Box>
            </Box>
        </Box>
        
    )
}

export default Featured