import './data.css';
import data from './beast-data';

function Beast() {
    return (
        <div>
            <h1 className="text-center">
                قسم الوحوش
            </h1>
            <ul className="data">
                {
                    data.map((item, index) => {
                        const { name, img, rate, description } = item;
                        return (
                            <li key={index}>
                                <div>
                                    <p className="name">{name}</p>
                                    <p className="rate">{rate}</p>
                                    <p className="des">{description}</p>
                                    <img src={img} alt="صورة الوحش" />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Beast;