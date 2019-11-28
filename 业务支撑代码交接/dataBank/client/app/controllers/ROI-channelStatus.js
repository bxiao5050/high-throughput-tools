/**
 * Created by guiwei.su on 2016/4/11.
 */
app.controller('ROIchannelStatus', ['$rootScope', '$scope', '$http', '$timeout', '$q', 'toaster', '$params', '$filter', function ($rootScope, $scope, $http, $timeout, $q, toaster, $params, $filter) {
    $scope.datePickerDayDiff = !isNaN($scope.datePickerDayDiff) ? $scope.datePickerDayDiff : -1;
    var startDate = moment().add($scope.datePickerDayDiff - 6, 'days').format('YYYY-MM-DD');
    var endDate = moment().add($scope.datePickerDayDiff, 'days').format('YYYY-MM-DD');
    $scope.initData = {
        curDate: moment().add($scope.datePickerDayDiff, 'days').format('YYYY-MM-DD'),
        rangeDate: {startDate: startDate, endDate: endDate}
    };
    // $scope.rangeDate = { startDate: startDate, endDate: endDate };

    $scope.today = function () {
        $scope.initData.curDate = moment().add($scope.datePickerDayDiff, 'days').format('YYYY-MM-DD');
    };
    $scope.today();

    $scope.clear = function () {
        $scope.initData.curDate = null;
    };
    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.initData.opened = true;
    };
    $scope.datePickerType=2;
// 切换单时间 和 时间范围控件显示
    $scope.$watch('datePickerType', function (newValue, oldValue) {
        if (newValue == 2) {
            $scope.singleDatePicker = true;
        } else {
            $scope.singleDatePicker = false;
        }
    });

    //初始化单时间选择控件
    var initCurDate = true;
    $scope.$watch('initData.curDate', function (newValue, oldValue) {
        if (newValue && !initCurDate) {
            //$scope.$emit("oasQuery", obj);
            //$scope.query();
        } else {
            initCurDate = false;
        }
    });
    $scope.$watch('initData.rangeDate', function (newValue, oldValue) {
        if (newValue && !initCurDate) {

            //$scope.query();
        } else {
            initCurDate = false;
        }
    })
    /*----------------------------------------------*/
    var curParams = null;
    $scope.gameSource = [];   //游戏数据源
    $scope.gameLevel = {};   //选中的游戏

    $scope.areaSource = [];   //地区数据源
    $scope.agentSource = [];  //代理商数据源
    $scope.serverSource = [];  //区服数据源
    $scope.areaLevel = null;
    $scope.agentLevel = null;
    $scope.serverLevel = null;
    $scope.selectedAreaServer = null;
    $scope.dataSource = [];
    $scope.col='all_pay';
    $scope.desc=1;
    getGameSource();

    function getGameSource() {
        $http({
            url: 'api/roi/getGames',
            method: 'GET'
        }).success(function (data, header, config, status) {
            if (data.code == 0) {
                if (data.result.length < 1) {
                    return;
                } else {
                    $scope.gameSource = data.result;
                    $scope.gameLevel = {selected: $scope.gameSource[0]};
                    getDataSource();
                }

            } else {
                //pop('error', 'error', data.msg);
            }
        }).error(function (data, header, config, status) {
            //pop('error', '链接异常', data);
        });


    }

    function getDataSource() {
        $http({
            url: 'api/roi/getAgentByGame',
            method: 'GET',
            params: {app_id: $scope.gameLevel.selected.game_id}
        }).success(function (data, header, config, status) {
            if (data.code == 0) {
                if (data.result.length < 1) {
                    $scope.areaServerNoData = true;
                    return;
                } else {
                    $scope.areaServerNoData = false;
                    $scope.dataSource = data.result;
                    getAreaSource();
                    getAgentSource();
                    checkAreaServer();
                    $scope.query();
                }
            } else {
                //pop('error', 'error', data.msg);
            }
        }).error(function (data, header, config, status) {
            //pop('error', '链接异常', data);
        });
    }

    function getAreaSource() {
        for (var i = 0; i < $scope.dataSource.length; i++) {
            var tem = $scope.dataSource[i];
            if (tem.parent == $scope.gameLevel.selected.game_id) {
                $scope.areaSource.push(tem);
            }
        }
        $scope.areaLevel = {selected: $scope.areaSource[0]};
    }

    function getAgentSource() {
        for (var i = 0; i < $scope.dataSource.length; i++) {
            var tem = $scope.dataSource[i];
            if (tem.parent == $scope.areaLevel.selected.id) {
                $scope.agentSource.push(tem);
            }
            //$scope.agentLevel={selected:$scope.agentSource[0]};
        }
    }

    function getServerSource() {
        for (var i = 0; i < $scope.dataSource.length; i++) {
            var tem = $scope.dataSource[i];
            if (tem.parent == $scope.agentLevel.selected.id) {
                $scope.serverSource.push(tem);
            }
        }
    }

    $scope.gameClick = function (gameItem) {
        if($scope.gameLevel.selected.game_id==gameItem.game_id)return;
        $scope.gameLevel = {selected: gameItem};

        $scope.areaLevel = null;
        $scope.agentLevel = null;
        $scope.serverLevel = null;

        $scope.areaSource = [];
        $scope.agentSource = [];
        $scope.serverSource = [];

        getDataSource();
    };

    $scope.areaClick = function (areaItem) {
        $scope.areaLevel = {selected: areaItem};

        $scope.agentLevel = null;
        $scope.serverLevel = null;

        $scope.agentSource = [];
        getAgentSource();
    };
    $scope.agentClick = function (agentItem) {
        $scope.agentLevel = {selected: agentItem};

        $scope.serverLevel = null;

        $scope.serverSource = [];
        getServerSource();
    };
    $scope.serverClick = function (serverItem) {
        $scope.serverLevel = {selected: serverItem};

    };
    $scope.clickModelYes=function()
    {
        $scope.selectedAreaServer=null;
        checkAreaServer();
        $('#areaServerModel').toggle();
        $scope.query();
    }
    function checkAreaServer() {
        if ($scope.serverLevel != null) {
            $scope.selectedAreaServer = $scope.serverLevel.selected;
        }
        else {
            if ($scope.agentLevel != null) {
                $scope.selectedAreaServer = $scope.agentLevel.selected;
            }
            else {
                if($scope.areaLevel != null){
                    $scope.selectedAreaServer = $scope.areaLevel.selected;
                }
                else{
                    $scope.selectedAreaServer=null;
                    return;
                }

            }
        }
    };





    function getData() {
        $http({
            url: 'api/roi/getROIChannelData',
            method: 'GET',
            params: curParams
        }).success(function (data, header, config, status) {
            if (data.code == 0) {
                if (data.result.length <= 1) {
                    $scope.tableNoData = true;
                    return;
                } else {
                    data.result.shift();
                    $scope.tableNoData = false;

                    //drawChart('ROIChart1',data);

                    $scope.tableData=[];
                    for (var i = 0; i < data.result.length; i++) {
                        var temp = data.result[i];
                        $scope.tableData.push({
                            channel_name: temp.channel_name,
                            all_num: Number(temp['all_num']),
                            login_num: Number(temp['login_num']),
                            pay_num:Number(temp['pay_num']),
                            day_pay: Number(temp['day_pay']),
                            all_pay: Number(temp['all_pay'])
                        });
                    }
                }
            } else {
                //pop('error', 'error', data.msg);
            }
        }).error(function (data, header, config, status) {
            //pop('error', '链接异常', data);
        });
    }
    /**
     * 导出excel文件
     */
    function exportData() {
        $http({
            url: '/api/roi/export/ROIChannelData',
            method: 'GET',
            params: curParams
        }).success(function (data, header, config, status) {
            if(data.code ==0){
                window.open(data.result);
            }else{
                //pop('error','error',data.msg);
            }
        }).error(function (data, header, config, status) {
            //pop('error','链接异常',data);
        });
    }
    $scope.query= function () {
        curParams={
            begin_date:moment($scope.initData.curDate).format('YYYY-MM-DD'),
            game_id:$scope.gameLevel.selected.game_id,
            agent_ids:$scope.selectedAreaServer.id
        };
        refreshData();
    };
    $scope.export=function()
    {
        curParams={
            begin_date:moment($scope.initData.curDate).format('YYYY-MM-DD'),
            game_id:$scope.gameLevel.selected.game_id,
            agent_ids:$scope.selectedAreaServer.id
        };
        exportData();
    };
    function refreshData(){
        if(curParams){
            getData();
        }

    }

}]);