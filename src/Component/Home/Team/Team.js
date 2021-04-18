import React from 'react';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import img1 from '../../../Image/joseph.jpg';
import img2 from '../../../Image/chery.jpg';
import img3 from '../../../Image/david.jpg';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const member = [
    {
        name: 'Joseph Austin',
        designation: 'Thai Message',
        img: img1
    },
    {
        name: 'David Hannan',
        designation: 'Thai Message',
        img: img2
    },
    {
        name: 'Cherry Harris',
        designation: 'Thai Message',
        img: img3
    }
]

const Team = () => {
    return (
        <div>
            <div className="col-md-6 our-team">
                <h1 className='text-brand'>Experienced Team</h1>
                <p><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis aspernatur eum eos blanditiis sit quidem minima possimus dolorem provident.</small></p>
            </div>

            <div className="row">
                {
                    member.map(mem =>
                        <div className="col-md-4 team-member p-5">
                          <img style={{ width: '100%' }} src={mem.img} alt="" />
                            <div className='member'>
                                <h4 className='text-center text-color'>{mem.name}</h4>
                                <p  className='text-center'><small>{mem.designation}</small></p>
                                <ul>
                                    <li className='team-icon'><FontAwesomeIcon icon={faFacebookF} /></li>
                                    <li className='team-icon'><FontAwesomeIcon icon={faTwitter} /></li>                                   
                                    <li className='team-icon'><FontAwesomeIcon icon={faMapMarkerAlt} /></li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Team;