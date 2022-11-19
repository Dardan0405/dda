import React from "react";
import { FormattedMessage } from "react-intl";
import Carousel from 'react-elastic-carousel';
import icon1 from '../../../assets/Home/WordsfromStudents/icon1.png'
import icon2 from '../../../assets/Home/WordsfromStudents/icon2.png'
import icon3 from '../../../assets/Home/WordsfromStudents/icon3.png'
import { dataCards } from "./data";
import './styles/WordsfromKosovaTraining.scss'
const breakPoints =[
{width:1, itemsToShow:1},
{width:700, itemsToShow: 2}
]

const WordsfromStudents =() =>{
    
    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo('single-slide'.length);
        }
    };
return(
    <div className="WordsFromStudents">
     <h4>
        <FormattedMessage id="Words" defaultMessage="Word from " /> <span> Kosova Training Students</span>
     </h4>
     <div className="Circle-PhotosStudents">
        <div className="Circle-Student1Words"style={{content:`url(${icon1})`}} ></div>
        <div className="Circle-StudentWords1"style={{content:`url(${icon2})`}}></div>
        <div className="Circle-StudentWords2"style={{content:`url(${icon3})`}}></div>
     </div>
     <Carousel className="slider styled-arrows" 
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
             {dataCards.map((props)=>{
             return(
             <div className="Cards-WordfromStudent">
                <div className="Icon-WordsFromStudnet">
                    <div className="Iconwrod-From"style={{content: `url(${props.icon})`}}> </div> 
                </div>
                <div className="Containter-CardsWordFromStudent">
                    <div className="Top-ContainerWordfromStudent">
                        
                        <div className="Quote-Top-WordFromS" style={{content: `url(${props.Quote})`}}></div>
                    </div>
                    <div className="Botom-ContainerWordFromStudent">
                        <div className="Qoute-BottomWordFromStudent"style={{content: `url(${props.Quote2})`}}></div>
                        <div className="Container-Bottom">
                            <p>{props.Description}</p>
                        </div>
                    </div>
                    <div  className = "info-ForStudent">
                        <p>{props.infoStudent} {props.status}</p>
                    </div>

                </div>

             </div>
             )
              })}
                </Carousel>
     

    </div>
)
}
export  default WordsfromStudents