const Route = require('./Route')
const tokenController = require('../controllers/tokenController')

class RouteToken extends Route{
    constructor(Router){
        super(Router);
        this.index();
        this.store();
    }

    index(){      
        this.route.get('/token',tokenController.index);        
    }
    store(){
        this.route.post('/token', tokenController.store)
    }
    static init(Router){
        const rout = new RouteToken(Router)
        return rout.route;
    }
}
module.exports = RouteToken.init;
