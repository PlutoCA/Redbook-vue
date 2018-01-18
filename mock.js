var Mock = require('mockjs')
var fs = require('fs')

var data = new Mock.mock({
  //分类
  'categories|8': [
    {
      // 分类id
      'id|+1': 1,
      // 分类的名称
      'name': '@cword(2, 3)',
      //小标题
      'tag|12': [
        {
        'tagId|+1': 1,
        'tagName': '@cword(2,3)',
        }
      ]
    }
  ],
  'bannar|4': [
    {
      'bannarpic': '@image(690x360, @color, @cword)',
    }
  ],
  // 所有笔记数据
  'note|120': [
    {
      'noteId|+1': 1,
      'categoryId|1-8': 1,
      'title': '@cword(5,8)',
      'num|10-500': 10,
      'notePicm': '@image(480x640, @color)',
      'notePicl': '@image(640x640, @color)',
      'details': '@cparagraph(4, 8)',
      'tagIds|3-5': [
        {
          'tagId|1-80': 1,
        }
      ],
      'user': [
        {
          'name': '@cword(2,4)',
          'portrait': '@image(80x80, @color, @cword)',
          'userId': '@id'
        }
      ]
    }
  ],
  'hotword': [
    {
      "data": [
        "短发",
        "高光",
        "林允",
        "装修",
        "娇韵诗",
        "卷发棒",
        "双眼皮",
        "电动牙刷",
        "卫龙",
        "倩碧",
        "眼镜",
        "烫发",
        "运动鞋",
        "小ck",
        "小白鞋"
      ]
    }
  ],
  'collections|12': [
    {
      'collectionsId|+1': 1, 
      'hotpic': '@image(750x750, @color)',
      'title': '@word(3,4)@cword(6,9)'
    }
  ]
})

fs.writeFile('db.json', JSON.stringify(data, null, 2), function () {
  console.log('写入成功')
})