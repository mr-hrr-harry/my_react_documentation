import { Fragment, useState } from 'react'
import './BootstrapCards.css'

import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.avif'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img4.jpg'


let BootstrapCards = () => {

    let [state, setState] = useState({
        billionaires: [
            {
                name: 'Elon Musk',
                worth: '23,250 crores USD',
                content: 'Elon Reeve Musk is a business magnate and investor. He is the founder, chairman, CEO and chief technology officer of SpaceX; the angel investor, CEO and product architect of Tesla, Inc.',
                img: img1,
            },
            {
                name: 'Jack Ma',
                worth: '2,490 crores USD',
                content: 'Jack Ma Yun is a Chinese business magnate, investor and philanthropist. He is the co-founder of Alibaba Group, a multinational technology conglomerate.',
                img: img2,
            },
            {
                name: 'Ratan Tata',
                worth: '8250 crores INR',
                content: 'Ratan Naval Tata is an Indian industrialist, philanthropist and former chairman of Tata Sons. He was a chairman of the Tata Group',
                img: img3,
            },
            {
                name: 'Warren Buffet',
                worth: '11,750 crores USD',
                content: 'Warren Edward Buffett is an American business magnate, investor, and philanthropist. He is currently the chairman and CEO of Berkshire Hathaway.',
                img: img4,
            },
            
        ]
    })
    
    let { billionaires } = state
    return (
        <Fragment>
            <div className='navbar navbar-expand-lg navbar-dark bg-dark'>                       {/*bootstrap*/}
                <p className='navbar-brand'>Billionaires</p>                                    {/*bootstrap*/}
            </div>

            <div className='container row'>                                                     {/*bootstrap*/}
                <div className='card shadow-lg'>
                    <img src={billionaires[0].img} alt="musk" className='imgStyles' /><br />
                    <h4>{billionaires[0].name}</h4>
                    <p className='subheader text-secondary fw-bold'> ( {billionaires[0].worth} ) </p>
                    <p className='body'> {billionaires[0].content} </p>
                </div>

                <div className='card shadow-lg'>                                                {/*bootstrap*/}
                    <img src={billionaires[1].img} alt="jack" className='imgStyles' /><br />
                    <h4>{billionaires[1].name}</h4>
                    <p className='subheader text-secondary fw-bold'> ( {billionaires[1].worth} ) </p>   {/*bootstrap, font-weight*/}
                    <p className='body'> {billionaires[1].content} </p>
                </div>

                <div className='card shadow-lg'>
                    <img src={billionaires[2].img} alt="ratan" className='imgStyles' /><br />
                    <h4>{billionaires[2].name}</h4>
                    <p className='subheader text-secondary fw-bold'> ( {billionaires[2].worth} ) </p>
                    <p className='body'> {billionaires[2].content} </p>
                </div>

                <div className='card shadow-lg'>
                    <img src={billionaires[3].img} alt="warren" className='imgStyles' /><br />
                    <h4>{billionaires[3].name}</h4>
                    <p className='subheader text-secondary fw-bold'> ( {billionaires[3].worth} ) </p>
                    <p className='body'> {billionaires[3].content} </p>
                </div>


            </div>

        </Fragment>
    )
}

export default BootstrapCards