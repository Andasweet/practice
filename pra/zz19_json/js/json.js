!function(){
    var students = [
        {
            name: '晓丽',
            age: 25,
            isMarried: true,
            hobbies: ['唱歌','跳舞','旅行'],
            parents:{
                father:'晓松',
                mother:'刘刘'
            },
            children:null
        },
        {
            name: '小明',
            age: 18,
            isMarried: false,
            hobbies: ['打游戏','睡觉'],
            parents:{
                father:'老王',
                mother:'王太太'
            },
            children:{
                son:{
                    name:'小小明',
                    age: 3
                },
                daughter: {
                    name:'小红',
                    age: 1
                }
            }
                
        },
        {
            name: '小张',
            age: 30,
            isMarried: true,
            hobbies: ['钓鱼','游泳','旅行'],
            parents:{
                father:'老张',
                mother:'张太太'
            },
            children:{
                son:{
                    name:'小小张',
                    age: 3               
                }
            }
        }
    ];


    function bd(arr) {
        var i, 
            len=arr.length,
            newArr=[], 
            $tbl = $('#tbl');

        for(i=0; i<len; i++) {
            var chi = arr[i].children,
                chinfo = [],
                marry = [],
                isMar = arr[i].isMarried;

            if(chi) {
                if(chi.son) {
                    chinfo.push(chi.son.name,'(男)');
                }
                if(chi.daughter) {
                    chinfo.push(chi.daughter.name,'(女)');
                }
            } else {
                chinfo.push('无');
            };

            if(isMar) {
                marry.push('<input type="checkbox" checked>');
            } else {
                marry.push('<input type="checkbox">');
            };


            newArr.push(
            '<tr>',
                '<td>',arr[i].name,'</td>',
                '<td>',arr[i].age,'</td>',
                '<td>',arr[i].isMarried?'已婚':'未婚',marry.join(''),'</td>',
                '<td>',arr[i].hobbies.join('/'),'</td>',
                '<td>',arr[i].parents.father,'/',arr[i].parents.mother,'</td>',
                '<td>',chinfo.join('/'),'</td>',
            '</tr>')
        }


        $tbl.append(newArr.join(''));
    }

    bd(students);
}();