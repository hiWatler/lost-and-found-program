const app = getApp();

Page({
  data: {
    searchKey: '', // user's search input
    query:[],//不知道query需要什么形式的，我随便初始化了一个数组
    searchResults: [{
      _id:1,
      title:'res1',
      description:'des1'
    },{
      _id:2,
      title:'res2',
      description:'des2'
    }] // results of the search  未获取云开发权限，先造一些假数据，别忘记删除
  },

  // handle user's search input
  onInput(e) {
    this.setData({
      searchKey: e.detail.value // store the search input in the data object
    });
  },

  async onSearch (){
    const db = wx.cloud.database({ 
      env: 'abc191105200308-2gmygyg076120e22' });
  //获取数据列表1数据
    const loseThing1 = await db.collection('loseThing')
    .where({
          title: db.RegExp({
            regexp: this.data.searchKey,
            options: 'i'
          })
        })
    .get();
     //获取数据列表2数据
    const seekThing2 = await db.collection('seekThing')
    .where({
      title: db.RegExp({
        regexp: this.data.searchKey,
        options: 'i'
      })
    })
    .get();
    //我登不上你的appid无法拿到数据，下行是一个简要的示例，目的是将两个库的数据处理为一个数组（或其他形式），需要你随机应变
    const queryList = [...loseThing1.data,...seekThing2.data]
    //赋值给query
    this.setData({
      query:queryList 
      });
    },

  Navigate1(e){
    console.log("跳转到特定界面")
    //使用data里数据要以this.data.xxx的形式
    //e.currentTarget.dataset.index是在wxml文件里data-index传进来的值
    //开发中要善用console.log(),如用console.log(e)产看传进来的值是什么
    console.log(e)
    const option = this.data.searchResults[e.currentTarget.dataset.index]._id
    wx.navigateTo({
      //跳转路径要正确，在app.json 的 "pages"里配置路径对应的组件
      url: "loseContent/loseContent?id=" + option,
      })
  },

});


