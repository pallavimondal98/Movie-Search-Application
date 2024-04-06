// import React from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// const CardModel = ({card}) => {

//     // const [movie, setMovie] = useState([]);

//     // const fetchMovieData = async () => {
//     //     try {
//     //         const response = await fetch('https://omdbapi.com/?s=thor&page=1&apikey=115727ab');
//     //         const data = await response.json();
//     //         setMovie(data.Search);
//     //     } catch (error) {
//     //         console.log(error.message);
//     //     }
//     // }

//     // useEffect(() => {
//     //     fetchMovieData()
//     // }, [])
//   return (
//     <div>

//     <Card sx={{ maxWidth: 345, display:'flex', marginBottom:'2rem' }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           sx={{height: '18rem'}}
//           image={card.Poster}
//           alt="green iguana"
//         />
//         <CardContent>

//           <Typography gutterBottom variant="h5" component="div">
//           {card.Title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {card.Year}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//     </div>
//   )
// }

// export default CardModel

import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardModel = ({ card }) => {

  const [hovered, setHovered] = React.useState(false); // Initialize state hook for handling hover state of the card

  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          display: 'flex',
          marginBottom: '2rem',
          position: 'relative',
          '&:hover .overlay': {
            opacity: 1,
          },
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            sx={{ height: '18rem' }}
            image={card.Poster}
            alt="movie poster"
          />
        </CardActionArea>
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            padding:'1.5rem',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        >
          <Typography variant="h5">{card.Title}</Typography>
          <Typography variant="body2">{card.Year}</Typography>
        </div>
      </Card>
    </div>
  );
};

export default CardModel;
