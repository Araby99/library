import './library.css';
import Beast from './study/Beast';
import Charm from './study/Charm';
import Dark from './study/Dark';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';

function Library() {
    const { url, path } = useRouteMatch();
    return (
        <div className="library">
            <div className="container">
                <h3 className="title">
                    أهلاً بك في المكتبة .. حيث تجد هنا كل ما تريد
                </h3>
                <p>
                    في أي الأقسام تريد أن تدرس أيها الساحر الكبير ؟
                </p>
                <div className="sections">
                    <div className="item">
                        <h3>الوحوش</h3>
                        <p className="description">الوحوش المذهلة و كيف تجدها</p>
                        <Link to={`${url}/beast`}>
                            <button className="btn btn-primary">ابحث</button>
                        </Link>
                    </div>
                    <div className="item">
                        <h3>التعاويذ</h3>
                        <p className="description">ابحث عن التعويذة المناسبة لك</p>
                        <Link to={`${url}/charm`}>
                            <button className="btn btn-primary">ابحث</button>
                        </Link>
                    </div>
                    <div className="item">
                        <h3>الدفاع من السحر الأسود</h3>
                        <p className="description">دافع عن نفسك ضد آكلي الموت</p>
                        <Link to={`${url}/dark`}>
                            <button className="btn btn-primary">ابحث</button>
                        </Link>
                    </div>
                </div>
                <Switch>
                    <Route path={`${path}/beast`}>
                        <Beast />
                    </Route>
                    <Route path={`${path}/charm`}>
                        <Charm />
                    </Route>
                    <Route path={`${path}/dark`}>
                        <Dark />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Library;