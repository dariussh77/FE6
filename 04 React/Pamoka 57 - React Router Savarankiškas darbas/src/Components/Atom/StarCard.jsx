import styled from 'styled-components';
const CardCSS=styled.div`
    >img{
        width:300px;
        height: 300px;
        object-fit: cover;
    }
`;
const StarCard = ({starData}) => {
    return ( 
        <CardCSS>
            <h3>{starData.name}</h3>
            <img src={starData.photo.src} alt={starData.photo.alt} />
        </CardCSS>
     );
}
 
export default StarCard;