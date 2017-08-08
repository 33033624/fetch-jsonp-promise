import mockPromise from '../mockPromise.js'

export const getPinpaiList = () => {
  return mockPromise({
    respData: [
      {
        id:1,
        name: '华为'
      },
      {
        id:2,
        name: 'sanxing'
      },
      {
        id:3,
        name: 'iphone'
      },
      {
        id:4,
        name: 'samsung'
      },
      {
        id:5,
        name: '小米'
      }
    ]
  })
}
export const getJixingList = (pinpaiId) => mockPromise({
  respData: [
    {
      id:11,
      name: 'iphone6s'
    },
    {
      id:12,
      name: 'iphone6'
    },{
      id:13,
      name: 'iphone6plus'
    },{
      id:14,
      name: 'iphone6s plus'
    },{
      id:15,
      name: 'iphone7'
    }
  ]
})
export const getNeicunList = (jixingId) => mockPromise({
  respData: [
    {
      id: 111,
      name: '16'
    },
    {
      id: 112,
      name: '32'
    },
    {
      id: 113,
      name: '128'
    }
  ]
})
export const getBanbenList = (jixingId, neicunId) => mockPromise({
  respData: [
    {
      id: 1111,
      name: '国行'
    },
    {
      id: 1112,
      name: '美版'
    },
    {
      id: 1113,
      name: '港版'
    }
  ]
})
export const searchPrice = () => mockPromise({
  respData: [
  {
    brand: 'iphone',
    xinghao: [{
      model: 'iphone6s',
      banben: [
        {
          buy_channel: '国行',
          price:
          {
            '16GB': '3444',
            '32GB': '3444',
            '64GB': '3444',
            '128GB': '3444',
            '256GB': '3444'
          }
        },
        {
          buy_channel: '美版',
          price:
          {
            '16GB': '3444',
            '32GB': '3444',
            '64GB': '3444',
            '128GB': '3444',
            '256GB': '3444'
          }
        }
      ]
    },
    {
      model: 'iphone6 plus',
      banben: [
        {
          buy_channel: '国行',
          price:
          {
            '16GB': '3444',
            '32GB': '3444',
            '64GB': '3444',
            '128GB': '3444',
            '256GB': '3444'
          }
        },
        {
          buy_channel: '美版',
          price:
          {
            '16GB': '3444',
            '32GB': '3444',
            '64GB': '3444',
            '128GB': '3444',
            '256GB': '3444'
          }
        }
      ]
    }
    ]
  },
  {
    brand: 'OPPO',
    xinghao: [{
      model: '6s',
      banben: [
        {
          buy_channel: '国行',
          price:
          {
            '16GB': '3444',
            '32GB': '3444',
            '64GB': '3444',
            '128GB': '3444',
            '256GB': '3444'
          }
        }
      ]
    },
    {
      model: 'plus',
      banben: [
        {
          buy_channel: '国行',
          price:
          {
            '16GB': '3444',
            '32GB': '3444',
            '64GB': '3444',
            '128GB': '3444',
            '256GB': '3444'
          }
        },
        {
          buy_channel: '美版',
          price:
          {
            '16GB': '3444',
            '32GB': '3444',
            '64GB': '3444',
            '128GB': '3444',
            '256GB': '3444'
          }
        }
      ]
    }
    ]
  }
]
})
