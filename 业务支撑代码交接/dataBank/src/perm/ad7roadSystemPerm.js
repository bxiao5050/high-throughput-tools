/**
 * Created by linlin.zhang on 2016/9/26.
 */
var permUtil = require('./permUtil');
var arrayUtil =  require('./ArrayUtil');
var when = require('when');

var appendConfigValue = function(system){
    //系统
    system.config_value = permUtil.getProfix(system.node_type) + system.node_id;
    //游戏
    system.systemGames.forEach(function(game){
        permUtil.appendLevelConfigValue(game,game.menus,system.config_value);
    });

    return system;
}
var getPermTree = function(system,permlist){
    permlist.forEach(function(perm){
        //菜单
        if(perm.config_item_name == 'mobile_adRoad_menu'){
            perm.config_item_value.forEach(function(permItem){
                if(system.config_value == permItem) {
                    system.systemGames.forEach(function (game) {
                        game.menus.forEach(function (menu) {
                            permUtil.checkNodes(menu, true, permItem, [system, game]);
                        })
                    });
                }
                else {
                    system.systemGames.forEach(function (game) {
                        if(game.config_value == permItem)
                            game.menus.forEach(function (menu) {
                                permUtil.checkNodes(menu, true, permItem, [system, game]);
                            });
                        else
                            game.menus.forEach(function (menu) {
                                permUtil.checkNodes(menu, false, permItem, [system, game]);
                            })
                    });
                }
            })

        }
    });
}
var filtPermTree = function(system){
    if(system.checked){
        system.systemGames = arrayUtil.grep(system.systemGames,function(ele){ return ele.checked;});
        for(var i = 0;i<system.systemGames.length;i++){
            var game = system.systemGames[i];
            game.system_id = system.node_id;
            game.menus = arrayUtil.grep(game.menus,function(ele){ return ele.checked;});
            game.menus.forEach(function(menu){
                permUtil.filtNodes(menu);
            });
            permUtil.changedNodeInfo(game);
        }
        permUtil.changedNodeInfo(system);
    } else system = [];
}
module.exports = {
    appendConfigValue:appendConfigValue,
    getPermTree:getPermTree,
    filtPermTree:filtPermTree
}