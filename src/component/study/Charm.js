import React, { useState } from 'react';
import './data.css';
import data from './charm-data';

function Charm() {
    const [search, setSeach] = useState('')
    return (
        <div>
            <h1 className="text-center">
                قسم التعاويذ
            </h1>
            <div className="sort">
                <input type="search" className="form-control" placeholder="ابحث عن اسم التعويذة هنا" aria-label="" aria-describedby="basic-addon1" onChange={event => { setSeach(event.target.value) }} />
            </div>
            <ul className="data">
                {
                    data.filter(val => {
                        if (search == "") {
                            return val
                        } else if (val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                            return val;
                        }
                    }).map((item, index) => {
                        const { name, img, usage } = item;
                        return (
                            <li key={index}>
                                <div>
                                    <p className="name">{name}</p>
                                    <p className="usage">{usage}</p>
                                    <img src={img} alt="صورة التعويذة" />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Charm;