import React, { useState } from 'react';
import './data.css';
import beasts from './beast-data';

function Beast() {
    const [data, setData] = useState(beasts)
    const [search, setSeach] = useState('')
    const [sort, setSort] = useState('0')
    return (
        <div>
            <h1 className="text-center">
                قسم الوحوش
            </h1>
            <div className="sort">
                <input type="search" className="form-control" placeholder="ابحث عن اسم الوحش هنا" aria-label="" aria-describedby="basic-addon1" onChange={event => { setSeach(event.target.value) }} />
                <select className="custom-select" onChange={event => { setSort(event.target.value) }}>
                    <option value="0">تصنيف الوحش</option>
                    <option value="X">X</option>
                    <option value="XX">XX</option>
                    <option value="XXX">XXX</option>
                    <option value="XXXX">XXXX</option>
                    <option value="XXXXX">XXXXX</option>
                </select>
            </div>
            <ul className="data">
                {
                    data.filter(val => {
                        if (search == "") {
                            return val
                        } else if (val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                            return val;
                        }
                    }).filter(type => {
                        if (sort == 0) {
                            return type
                        } else {
                            return type.sort == sort;
                        }
                    }).map((item, index) => {
                        const { name, img, sort, description } = item;
                        return (
                            <li key={index}>
                                <div>
                                    <p className="name">{name}</p>
                                    <p className="rate">{sort}</p>
                                    <p className="des">{description}</p>
                                    <img src={img} alt="صورة الوحش" />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div >
    )
}

export default Beast;