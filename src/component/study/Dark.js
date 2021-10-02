import './data.css';
import data from './dark-data';

function Dark() {
    return (
        <div>
            <h1 className="text-center">
                قسم الدفاع من السحر الأسود
            </h1>
            <ul className="data">
                {
                    data.map((item, index) => {
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

export default Dark;