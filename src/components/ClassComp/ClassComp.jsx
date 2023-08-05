import React, {Fragment} from 'react';
import Netherlands from './Netherlands.jpg';
import '../FuncComp/Card.css'
import './ClassComp.css'

class ClassComp extends React.Component{
    render(){
        const Imgstyle = {
            textAlign: 'center',    
            minHeight: '50px'
        }

        const fontStyle = {
            fontWeight: '500'
        }

        return (
            <Fragment>
                <div id='card'>
                    <div id='card_Header' style={Imgstyle}>
                        <p>Netherlands</p>
                    </div>
                    <img id='imgStyles' src={Netherlands} alt="netherlands_photo" />
                    <p id='card_Content' style={fontStyle}>
                        1. The Netherlands is famous for cheese <br />
                        2. The Netherlands is the world's largest exporter of flowers<br />
                        3. Heineken is the world's second largest beer company<br />
                        4. The Netherlands is known for its flat land<br />
                        5. The Dutch are the tallest people in the world
                    </p>
                </div>
            </Fragment>
        );
    }
}

export default ClassComp