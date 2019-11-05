const  {Router} = require('express')

class Route{
    /**
     * @constructor
     * @param {Router} ExpressRoute 
     */
    constructor(ExpressRoute){
        this.route = ExpressRoute;    
    }
}
module.exports = Route;