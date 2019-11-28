/**
* Created by xiaoyi on 2015/8/7.
*/

var config = [
    {
        system_id: 1,
        menus: {
            //oas自研业务分析接口
            '/api/oas/getRegChannelByOS': 2,
            '/api/oas/5min-recharge': 201,
            '/api/oas/5min-reg': 201,
            '/api/oas/export/nopay/5min-reg': 201,
            '/api/oas/5min-online': 201,
            '/api/oas/export/nopay/5min-online': 201,
            '/api/oas/5li-day': 202,
            '/api/oas/export/5li-day': 202,
            '/api/oas/5li-week': 202,
            '/api/oas/export/5li-week': 202,
            '/api/oas/5li-month': 202,
            '/api/oas/export/5li-month': 202,
            '/api/oas/nopay/5li-day': 202,
            '/api/oas/export/nopay/5li-day': 202,
            '/api/oas/nopay/5li-week': 202,
            '/api/oas/export/nopay/5li-week': 202,
            '/api/oas/nopay/5li-month': 202,
            '/api/oas/export/nopay/5li-month': 202,
            '/api/oas/retainUser': 210,
            '/api/oas/steplost-newuser': 206,
            '/api/oas/loginrate': 207,
            '/api/oas/export/loginrate': 207,
            '/api/oas/nopay/loginrate': 207,
            '/api/oas/export/nopay/loginrate': 207,
            '/api/oas/newUser': 208,
            '/api/oas/export/newUser': 208,
            '/api/oas/activeUser': 209,
            '/api/oas/export/activeUser': 209,
            '/api/oas/onlineUser': 210,
            '/api/oas/export/onlineUser': 210,
            '/api/oas/userStock': 215,
            '/api/oas/petStock': 215,
            '/api/oas/export/userCurStock': 215,
            '/api/oas/export/userPetStock': 215,
            '/api/oas/regPayRate': 214,
            '/api/oas/export/regPayRate': 214
        }
    },
    /*海外投放系统*/
    {
        system_id: 2,
        menus: {
            '/api/app': 301,
            '/api/games': 301,
            '/api/app/update': 301,
            '/api/app/delete': 301,
            '/api/app/add': 301,
            '/api/channelPrice': 301,
            '/api/channelPrice/delete': 301,
            '/api/channelPrice/cfc/add': 301,
            '/api/channelPrice/cfp/add': 301,
            '/api/channelPrice/cfp/recalculateCost': 301,
            '/api/channelPrice/cfcp/query': 301,
            '/api/country': 301,
            '/api/country/use': 301,
            '/api/country/update': 301,
            '/api/channel/detail': 301,
            '/api/channel/total': 301,
            '/api/channel/total/perday': 301,
            '/api/channel/detail/perday': 301,
            '/api/channel/all': 301,
            '/api/channel/remark': 301,
            '/api/channel/remark/list': 301,
            '/api/channel/remark/add': 301,
            '/api/channel/remark/update': 301,
            '/api/channel/remark/delete': 301,
            '/api/media_source/query': 301,
            '/api/app/media_source/All': 301,
            '/api/channel/media_source/query': 301,
            '/api/channel/data/repair/add': 301,
            '/api/channel/data/repair/edit': 301,
            '/api/upload/channel-repair-data': 301,
            '/api/channel/data/repair/query': 301,
            '/api/channel/data/repair/delete': 301,
            '/api/reportmap/getAreaCountryGame': 303,
            '/api/reportmap/comprehensiveReport': 303,
            '/api/reportmap/dailyRp': 303,
            '/api/reportmap/mediaRp': 303,
            '/api/reportmap/datamediaRp': 303,
            '/api/reportmap/countryshow': 303,
            '/api/reportmap/hourlyRp': 303,
            '/api/roi/getGames': 305,
            '/api/roi/getAgentByGame': 305,
            '/api/roi/getROITotalData': 305,
            '/api/roi/export/ROITotalData': 305,
            '/api/roi/getROIAgentData': 305,
            '/api/roi/export/ROIAgentData': 305,
            '/api/roi/getROIChannelData': 305,
            '/api/roi/export/ROIChannelData': 306,
            '/api/fbReport/getAreaGame': 306,
            '/api/fbReport/getTotalData': 306,
            '/api/fbReport/getTotalCompare': 306,
            '/api/fbReport/getListData': 306,
            '/api/fbReport/getCreativeData': 306,
            '/api/fbReport/getAnalysisData': 306
        }
    },
    {
        system_id: 3,
        menus: {
            //7road投放系统
            '/api/7roadReport/popularize_getchannel': 5,
            '/api/7roadReport/costmanage_getchannel': 5,
            '/api/7roadReport/getPopularize_list': 501,
            '/api/7roadReport/export/getPopularize_list': 501,
            '/api/7roadReport/getPopularize_total': 502,
            '/api/7roadReport/export/getPopularize_total': 502,
            '/api/7roadReport/getPopularize_realtime': 503,
            '/api/7roadReport/export/getPopularize_realtime': 503,
            '/api/7roadReport/getPopularize_liucun': 504,
            '/api/7roadReport/export/getPopularize_liucun': 504,
            '/api/7roadReport/export/getAdGroupList': 509,
            '/api/7roadReport/export/getAdActivityList': 510,
            '/api/7roadReport/getAdGroupByGame': 507,
            '/api/7roadReport/adgroup_getchannel': 507,
            '/api/7roadReport/addAdgroup': 507,
            '/api/7roadReport/delAdgroup': 507,
            '/api/7roadReport/editAdgroup': 507,
            '/api/7roadReport/getAdGroupUser': 507,
            '/api/7roadReport/powerAdgroupUser': 507,
            '/api/7roadReport/getUserAdPower': 507,
            '/api/7roadReport/delUserPower': 507,
            '/api/7roadReport/getAdGroupByUserName': 5,
            '/api/7roadReport/getUserActivity': 508,
            '/api/7roadReport/adGroupPowerActivity': 508,
            '/api/7roadReport/adGroupEditActivity': 508,
            '/api/7roadReport/delUserActivity': 508,
            '/api/7roadReport/adActivity_getchannel': 508,
            '/api/7roadReport/getAdGroupList': 509,
            '/api/7roadReport/getAdActivityList': 510,
            '/api/7roadReport/newUserRegPayRate': 506,
            '/api/7roadReport/export/newUserRegPayRate': 506,
            '/api/7roadReport/costManage_upload': 505,
            '/api/7roadReport/costManage_list': 505,
            '/api/7roadReport/costManage_add': 505,
            '/api/7roadReport/costManage_del': 505,
            '/api/7roadReport/costManage_update': 505
        }
    },
    {
        system_id: 4,
        menus: {
            //海外发行业务分析接口
            '/api/overSeas/5min-online': 601,
            '/api/overSeas/5min-reg': 601,
            '/api/overSeas/5min-pay': 601,
            '/api/overSeas/export/5min-reg': 601,
            '/api/overSeas/export/5min-pay': 601,
            '/api/overSeas/5li-day': 604,
            '/api/overSeas/export/5li-day': 604,
            '/api/overSeas/5li-week': 604,
            '/api/overSeas/export/5li-week': 604,
            '/api/overSeas/5li-month': 604,
            '/api/overSeas/export/5li-month': 604,
            '/api/overSeas/bigRData': 605,
            '/api/overSeas/export/bigRData': 605,
            '/api/overSeas/indexTrendDay': 602,
            '/api/overSeas/export/indexTrendDay': 602,
            '/api/overSeas/indexTrendWeek': 602,
            '/api/overSeas/export/indexTrendWeek': 602,
            '/api/overSeas/indexTrendMonth': 602,
            '/api/overSeas/export/indexTrendMonth': 602,
            '/api/overSeas/newUserRetainRate': 603,
            '/api/overSeas/export/newUserRetainRate': 603,
            '/api/overSeas/newUserRegIncomeRate': 606,
            '/api/overSeas/export/newUserRegIncomeRate': 606
        }
    }
];
var getMenuIdByUrl = function (menu_url) {
    var menu_info = {};
    config.forEach(function (sys) {
        if (sys.menus[menu_url]) {
            menu_info.menu_id = sys.menus[menu_url];
            menu_info.system_id = sys.system_id;
            return false;
        }
    });
    return menu_info;
}
var getBasicPermConfig = function () {
    return [{
        system_id: 1,
        gameMenus: []
    },
    {
        system_id: 2,
        gameMenus: []
    },
    {
        system_id: 3,
        gameMenus: []
    },
    {
        system_id: 4,
        gameMenus: []
    },
    ];
}
module.exports = {
    getMenuIdByUrl: getMenuIdByUrl,
    getBasicPermConfig: getBasicPermConfig
};