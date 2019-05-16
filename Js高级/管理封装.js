window.onload =function () {
    function Song(name,singer){
        if (arguments.length !== 2){
            throw '参数有误';
        }
        this.songName = name;
        this.singer = singer;
    }

    /**
     * 歌曲管理系统
     * @constructor
     * 在当前对象的方法中 调用当前对象的其他方法需要使用this关键字
     *
     * JavaScript引擎在行末自动添加分号的机制
     */
    function SongManager() {
        this.songList = [ new Song('情书','张学友'),new Song('演员','薛之谦')];
        /**
         *  this.addSong = fun(x,y){
         *
         *  };
         */
    }

    /**
     * 最好是通过原型给其进行添加...
     * 资源初始化一次 单例
     * @type {{}}
     */
    SongManager.prototype = {
        // 增
        addSong:function addSong(name,singer) {
            this.songList.push(new Song(name, singer));
        },

        // 删
        delSongBySingerName:function delSongBySingerName(name){
            for (let i = 0;i< this.songList.length; i++){
                if (name === this.songList[i].singer){
                    // 使用splice进行删除
                    this.songList.splice(i,1);
                }
            }
        },

        querySongList:function () {
            for (let i= 0;i<this.songList.length;i++){
                let item = this.songList[i];
                console.log("歌曲名称 = "+item.songName+"  唱家 = "+item.singer);
            }
        }
    };

    let songManager = new SongManager();
    // 增测试
    console.log('增加...');
    songManager.addSong('今天你要嫁给我','陶喆');
    songManager.querySongList();
    // 删测试
    console.log('删除...');
    songManager.delSongBySingerName('薛之谦');
    songManager.querySongList();



};
//不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript默认有一个全局对象window，
// 全局作用域的变量实际上被绑定到window的一个属性
var testWindowValue = 100;
console.log('testWindowValue = '+testWindowValue);
console.log('windows.testWindowValue = '+window.testWindowValue);
