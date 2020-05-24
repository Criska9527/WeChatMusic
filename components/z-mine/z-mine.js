// components/z-mine/z-mine.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  //生命周期
  lifetimes: {
    attached: function () {
      var res = wx.getSystemInfoSync();
      console.log(res);
      var tarbar = res.statusBarHeight / (res.windowWidth / 750.0);
      console.log(tarbar)

      //测试假数据
   
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    bgurl:'http://img3.a0bi.com/upload/ttq/20161015/1476518118768.png',
    minedata: {
      "loginType": 1,
      "code": 200,
      "account": {
        "id": 257261556,
        "userName": "1_15638261093",
        "type": 1,
        "status": 0,
        "whitelistAuthority": 0,
        "createTime": 1458731878556,
        "salt": "[B@f6be0ee",
        "tokenVersion": 1,
        "ban": 0,
        "baoyueVersion": -2,
        "donateVersion": 0,
        "vipType": 0,
        "viptypeVersion": 1582820666050,
        "anonimousUser": false
      },
      "token": "abd612a47a23e8bfd1c9f4d96230e37674b37a74a4372af06c6939a3489ce6610931c3a9fbfe3df2",
      "profile": {
        "description": "",
        "userId": 257261556,
        "followed": false,
        "backgroundUrl": "https://p4.music.126.net/QuPUYRsojNp6SrQWiatVdg==/109951163926670329.jpg",
        "detailDescription": "",
        "avatarImgIdStr": "18957779486357918",
        "backgroundImgIdStr": "109951163926670329",
        "avatarUrl": "https://p3.music.126.net/25lKh10269g4S7-VfWovEw==/18957779486357918.jpg",
        "avatarImgId": 18957779486357920,
        "nickname": "Clearlove0608",
        "birthday": 1514649600000,
        "experts": {},
        "city": 1006600,
        "accountStatus": 0,
        "vipType": 0,
        "gender": 1,
        "province": 1000000,
        "defaultAvatar": false,
        "expertTags": null,
        "authStatus": 0,
        "mutual": false,
        "remarkName": null,
        "djStatus": 0,
        "userType": 0,
        "backgroundImgId": 109951163926670340,
        "signature": "唯有画画与足球不可负☀",
        "authority": 0,
        "avatarImgId_str": "18957779486357918",
        "followeds": 1,
        "follows": 10,
        "eventCount": 2,
        "playlistCount": 4,
        "playlistBeSubscribedCount": 0
      },
      "bindings": [{
        "userId": 257261556,
        "expired": false,
        "refreshTime": 1564588958,
        "bindingTime": 1564588958275,
        "url": "",
        "expiresIn": 2147483647,
        "tokenJsonStr": "{\"countrycode\":\"\",\"cellphone\":\"15638261093\",\"hasPassword\":true}",
        "id": 6926897327,
        "type": 1
      }, {
        "userId": 257261556,
        "expired": true,
        "refreshTime": 1532952838,
        "bindingTime": 1496395267841,
        "url": "http://weibo.com/u/3640707624",
        "expiresIn": 2626732,
        "tokenJsonStr": "{\"allow_all_act_msg\":false,\"favourites_count\":9,\"urank\":14,\"verified_trade\":\"\",\"weihao\":\"\",\"verified_source_url\":\"\",\"province\":\"41\",\"screen_name\":\"听了一个夏天的七里香\",\"id\":3640707624,\"geo_enabled\":true,\"verified_type\":-1,\"access_token\":\"2.00i3C5yD0Gg461be576def89cfP13C\",\"pagefriends_count\":5,\"domain\":\"\",\"following\":false,\"name\":\"听了一个夏天的七里香\",\"cover_image_phone\":\"http://ww2.sinaimg.cn/crop.0.0.640.640.640/a1d3feabjw1ecasunmkncj20hs0hsq4j.jpg\",\"idstr\":\"3640707624\",\"follow_me\":false,\"friends_count\":139,\"credit_score\":80,\"gender\":\"m\",\"city\":\"3\",\"profile_url\":\"u/3640707624\",\"description\":\"唯有画画与足球不可负☀\",\"created_at\":\"Fri Jul 19 22:59:57 +0800 2013\",\"remark\":\"\",\"ptype\":0,\"verified_reason_url\":\"\",\"block_word\":0,\"uid\":\"3640707624\",\"avatar_hd\":\"http://tvax3.sinaimg.cn/crop.0.0.1006.1006.1024/d900ca28ly8fh42anulfwj20ry0ry0w4.jpg\",\"mbtype\":11,\"bi_followers_count\":29,\"scope\":\"follow_app_official_microblog\",\"user_ability\":1024,\"verified_reason\":\"\",\"mbrank\":1,\"lang\":\"zh-cn\",\"expires_in\":2626732,\"class\":1,\"remind_in\":\"2626732\",\"star\":0,\"allow_all_comment\":true,\"online_status\":0,\"verified\":false,\"profile_image_url\":\"http://tvax3.sinaimg.cn/crop.0.0.1006.1006.50/d900ca28ly8fh42anulfwj20ry0ry0w4.jpg\",\"block_app\":1,\"url\":\"\",\"avatar_large\":\"http://tvax3.sinaimg.cn/crop.0.0.1006.1006.180/d900ca28ly8fh42anulfwj20ry0ry0w4.jpg\",\"statuses_count\":608,\"followers_count\":82,\"location\":\"河南 洛阳\",\"insecurity\":{\"sexual_content\":false},\"verified_source\":\"\",\"status\":{\"created_at\":\"Sat Jul 01 08:09:34 +0800 2017\",\"id\":4124612751738301,\"mid\":\"4124612751738301\",\"idstr\":\"4124612751738301\",\"text\":\"越说我不行，我就越要做。\",\"textLength\":24,\"source_allowclick\":1,\"source_type\":1,\"source\":\"<a href=\\\"http://app.weibo.com/t/feed/6jlVRi\\\" rel=\\\"nofollow\\\">乐 Pro3</a>\",\"favorited\":false,\"truncated\":false,\"in_reply_to_status_id\":\"\",\"in_reply_to_user_id\":\"\",\"in_reply_to_screen_name\":\"\",\"pic_urls\":[{\"thumbnail_pic\":\"http://wx1.sinaimg.cn/thumbnail/d900ca28ly1fh42acnao3j20fk0fkwfj.jpg\"}],\"thumbnail_pic\":\"http://wx1.sinaimg.cn/thumbnail/d900ca28ly1fh42acnao3j20fk0fkwfj.jpg\",\"bmiddle_pic\":\"http://wx1.sinaimg.cn/bmiddle/d900ca28ly1fh42acnao3j20fk0fkwfj.jpg\",\"original_pic\":\"http://wx1.sinaimg.cn/large/d900ca28ly1fh42acnao3j20fk0fkwfj.jpg\",\"geo\":null,\"annotations\":[{\"client_mblogid\":\"3f7558df-c3e1-4f98-a6eb-31033528495c\"},{\"mapi_request\":true}],\"reposts_count\":0,\"comments_count\":0,\"attitudes_count\":0,\"isLongText\":false,\"mlevel\":0,\"visible\":{\"type\":0,\"list_id\":0},\"biz_feature\":4294967300,\"hasActionTypeCard\":0,\"darwin_tags\":[],\"hot_weibo_tags\":[],\"text_tag_tips\":[],\"userType\":0,\"positive_recom_flag\":0,\"gif_ids\":\"\",\"is_show_bulletin\":2,\"comment_manage_info\":{\"comment_permission_type\":-1}},\"story_read_state\":-1,\"data\":0,\"code\":-1532952793771,\"message\":\"服务器返回异常状态[0]!\",\"rawdata\":\"\",\"AnonymousUserId\":null}",
        "id": 3130822707,
        "type": 2
      }, {
        "userId": 257261556,
        "expired": false,
        "refreshTime": 1585573336,
        "bindingTime": 1458731878714,
        "url": "",
        "expiresIn": 7776000,
        "tokenJsonStr": "{\"access_token\":\"7886A197E18FFEB5B409E1751D561FDC\",\"openid\":\"C3D98BB931C36BE21B893AD7AF70B60F\",\"query_authority_cost\":-935421780,\"nickname\":\"买辣椒也用券✨\",\"partnerType\":\"0\",\"expires_in\":7776000,\"login_cost\":44,\"authority_cost\":3349}",
        "id": 2842576432,
        "type": 5
      }]
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
