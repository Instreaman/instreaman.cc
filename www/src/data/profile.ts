export type Profile = {
  name: string
  title: string
  bio: string
  bios?: string[]
  location: string
  availability: string
  avatarUrl?: string
}

// 统一在此处维护个人基础信息，组件只负责渲染。
export const profile: Profile = {
  name: 'Instreaman',
  title: 'Expired Dreamer',
  bio: '这是 Instreaman の 小窝。我并没有赢过这个世界，我只是趁它不注意，偷偷躲进了一场永远不醒的午睡里。嘘——别把外面的大人引过来 ^v^',
  bios: [
    '这是 Instreaman の 小窝。我并没有赢过这个世界，我只是趁它不注意，偷偷躲进了一场永远不醒的午睡里。嘘——别把外面的大人引过来 ^v^',
    '我尝试过拯救世界，但世界太重了，所以我决定先拯救自己的午睡。如果现实一定要找到我，请它先学会怎么折纸飞机 TwT',
    '这是 Instreaman 的主站入口，这里是我存放思考、工具与个人项目的沉浸式坐标系,这里不生产标准答案，只记录探索的轨迹 :)'
  ],
  location: 'China · Guangdong',
  availability: 'Welcome to connect!',
  avatarUrl: 'https://q1.qlogo.cn/g?b=qq&nk=2804914560&s=640'
}
