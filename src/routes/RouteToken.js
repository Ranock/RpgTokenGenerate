const Route = require('./Route')
const tokenController = require('../controllers/tokenController')

class RouteToken extends Route{
    constructor(){
        super();
        this.index();
        this.store();
    }

    index(){      
        this.route.get('/tokens',tokenController.index);        
    }
    store(){
        this.route.post('/tokens', tokenController.store)
    }
    static init(){
        const rout = new RouteToken()
        return rout.route;
    }
}
module.exports = RouteToken.init;
