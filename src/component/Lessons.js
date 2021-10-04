import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import DarkLesson from './lessons/DarkLesson';
import CharmLesson from './lessons/CharmLesson';
import PotionLesson from './lessons/PotionLesson';
import BeastLesson from './lessons/BeastLesson';
import './lessons.css';

function Lessons() {
    const { url, path } = useRouteMatch();
    return (
        <div className="lessons">
            <div className="container">
                <h4>أهلاً بك في قسم الدروس ! حيث تجد ملخص لكل درس مكتوب هنا.</h4>
                <div className="items">
                    <div className="lesson">
                        <h3>درس الدفاع ضد فنون السحر الأسود</h3>
                        <p className="description">تعلم كيف تدافع عن نفسك ضد السحر الأسود و كيف تتصرف إذا هاجمك أحد آكلي الموت</p>
                        <p className="prof">بروف : هيرميوني دمبلدور</p>
                        <HashLink smooth to={`${url}/dark#darklesseon`}>
                            <button className="btn btn-primary">راجع الدروس</button>
                        </HashLink>
                    </div>
                    <div className="lesson">
                        <h3>درس التعاويذ</h3>
                        <div className="description">نمي مهاراتك و تعلم العديد من التعاويذ التي سوف تساعدك في حياتك الساحرة !</div>
                        <p className="prof">بروف : ريتشارد هاجريد </p>
                        <HashLink smooth to={`${url}/charm#charmlesseon`}>
                            <button className="btn btn-primary">راجع الدروس</button>
                        </HashLink>
                    </div>
                    <div className="lesson">
                        <h3>درس الوصفات</h3>
                        <div className="description">عالم الوصفات الكبير و الساحر ! تعلم كيف تصنع وصفتك الخارقة لتتقدم أكثر!</div>
                        <p className="prof">بروف : كلير ماري بلاك </p>
                        <HashLink smooth to={`${url}/potion#potionlesson`}>
                            <button className="btn btn-primary">راجع الدروس</button>
                        </HashLink>
                    </div>
                    <div className="lesson">
                        <h3>درس المخلوقات السحرية</h3>
                        <div className="description">تعلم كيف تتصرف إذا كنت وجهاً لوجه أمام أحد الوحوش المفترسة ! كذلك الخواص الخارقة للبعض</div>
                        <p className="prof">بروف : هيلجا بلاك </p>
                        <HashLink smooth to={`${url}/beast#beastlesseon`}>
                            <button className="btn btn-primary">راجع الدروس</button>
                        </HashLink>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path={`${path}/dark`}>
                    <DarkLesson />
                </Route>
                <Route path={`${path}/charm`}>
                    <CharmLesson />
                </Route>
                <Route path={`${path}/potion`}>
                    <PotionLesson />
                </Route>
                <Route path={`${path}/beast`}>
                    <BeastLesson />
                </Route>
            </Switch>
        </div >
    )
}

export default Lessons;