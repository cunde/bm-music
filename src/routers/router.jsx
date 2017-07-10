
// NOTE: components import
import Rank from '../components/rank/rank';
import Recommend from '../components/recommend/recommend';
import Singer from '../components/singer/singer';
import Search from '../components/search/search';



// routes confing
const routesConf = [
    {
        path: '/recommend',
        component: Recommend
    }, {
        path: '/rank',
        component: Rank
    }, {
        path: '/singer',
        component: Singer
    }, {
        path: '/search',
        component: Search
    }
]
// NOTE: routerInitClass
export default routesConf
