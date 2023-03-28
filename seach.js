// pages/hall/seach/seach.js

/*const db = wx.cloud.database({ // 链接数据表
  env: "abc191105200308-2gmygyg076120e22"
});
Page({
    data: {
        search: ''
    },
    onLoad: function (options) {

    },
    GetSearchInput: function (e) {
        this.setData({
            search: e.detail.value
        })
    },
    ToSearch: function (e) {
        if (this.data.search == '') {
            wx.showToast({
                title: '请输入',
                icon: 'none'
            })
            return
        }
        db.collection('loseThing').where({
            name: db.RegExp({
                regexp: this.data.search,
                options: 'i',
            }),
        }).get().then(res => {
          console.log(res.data.length)
            if (res.data.length != 0) {
                this.setData({
                    shangpinbiao: res.data
                    
                })
            } 
            else {
                wx.showToast({
                    title: '未找到相关信息',
                    icon: 'none'
                })
            }
        })
    },
})
*/
//index.js
//获取应用实例
/*const app = getApp()
Page({
  data: {
    cond: false, //判断标志：检测是否存在多个匹配信息
    searchKey: "",//监控搜索框输入信息
    keyWord1: "",//第一匹配信息
    title:"",
    description1: "", //信息答案2
    keyWord2: "",//第二匹配信息
    description2: "", //信息答案2
    
  },

  /**
   * 
   * 搜索功能
   */

  //监听搜索框输入的信息
  /*searchInput: function (e) {
    // console.log(e)
    let value = e.detail.value //搜索框输入的信息
    this.setData({
      searchKey: value //监听搜索输入关键字信息
    })
  },

  //设置搜索规则
  search: function (e) {
    let searchKey = this.data.searchKey //监听搜索框输入的信息
    if (searchKey == '') { //如果不输入任何字符直接搜索，返回提示信息
      this.setData({
        keyWord1: searchKey,
        title: searchKey,
        description1: "懒死了，字都不打一个！",
      })
      return
    }

    var db = wx.cloud.database({ // 链接数据表
      env: "abc191105200308-2gmygyg076120e22"
    });
    db.collection('loseThing').where({
      keyWord: db.RegExp({//按照KeyWord模糊查询
        regexp: searchKey, //模糊搜索监听到的搜索信息
        options: 'i', //不区分大小写
      })
    }).get().then(res => { //获取查询到的信息
      //console.log(res)
      if (res.data.length == 0) { //如果搜索信息在数据库中找不到
        this.setData({
          keyWord1: searchKey,
          description1: "这题我不会！",
        })
        return
      }

      var total = res.data.length //总匹配信息个数
      var _collections = new Array() //声明一个数组
      //console.log(total)
      //将匹配信息存入数组
      for (var i = 0; i < total; i++) {
        _collections.push(JSON.parse(JSON.stringify(res.data[i])))
      }
      //console.log(_collections.length)
      this.setData({//显示第一匹配信息
        keyWord1: _collections[0].keyWord,
        description1: _collections[0].description
      })//显示第二匹配信息
      if ((_collections.length == 0) || (_collections.length != 1)) {
        this.setData({//校验是否有多条数据
          cond: true,//将标志位置为true
          keyWord2: _collections[1].keyWord,//显示第二匹配数据
          description2: _collections[1].description
        })
      }
    }).catch(res => {
      console.log(res)
    })
  },

  //设置弹窗规则
  showModal(e) {
    this.setData({ //设置搜索弹窗表头的字符
      modalName: e.currentTarget.dataset.target
    })
    this.search(e) //调用搜索函数
  },
  //关闭弹窗
  hideModal(e) {
    this.setData({
      modalName: null,
      keyWord1: "",
      description1: "",
      cond: false //标志位复位
    })
  },

  /**
 * 生命周期函数--监听页面加载
 */
  /*onLoad: function (options) {

  },

  /**
   * 用户点击右上角分享
   */
  /*onShareAppMessage() {
    return {
      title: '微信搜索案例'
    }
  }
})*/
const app = getApp();

Page({
  data: {
    searchKey: '', // user's search input
    searchResults: [] // results of the search
  },

  // handle user's search input
  onInput(e) {
    this.setData({
      searchKey: e.detail.value // store the search input in the data object
    });
  },

  // execute the search query
  onSearch() {
    const db = wx.cloud.database({ env: 'abc191105200308-2gmygyg076120e22' });
    const searchKey = this.data.searchKey;
    const query = db.collection('loseThing').where({
      title: db.RegExp({
        regexp: searchKey,
        options: 'i'
      })
    });

  /*async function onSearch (){
    const db = wx.cloud.database({ 
      env: 'abc191105200308-2gmygyg076120e22' });
    const db = cloud.database();
    const loseThing1 = await db.collection('loseThing').get();const seekThing1 = await db.collection('seekThing').get();
    this.setData({
      query:loseThing1+seekThing1
      });
    }*/

    query.get().then(res => {
      // store the search results in the data object
      this.setData({
        searchResults: res.data
      });
    }).catch(err => {
      console.error(err);
    });
  },

  /*Navigate1(){
    console.log("跳转到特定界面")
    var option = this.searchResults[e.currentTarget.dataset.index]._id
    wx.navigateTo({
      url: "loseContent/loseContent?id=" + option,
      })
  },*/

  /*async function onSearch (){
    const db = cloud.database()
    const list1 = db.collection('list1')
    const list2 = db.collection('list2')
  // 使用 $lookup 和 $match 查询两个集合中title 为 123 的数据记录 
    const result = await list1.aggregate()
     .lookup({
      from:"list2"
      localField:"title"
      foreignField:"title'
      as:'list2Data'
      match(f
      title:'123
      2
      .end();

     }
  
  //对值进行操作this.setData(f*/
});


