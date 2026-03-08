import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // 规范侧边栏 - 包含属性、朝代定义等
  definitionsSidebar: [
    {
      type: 'category',
      label: '分类规范',
      items: ['definitions/intro', 'definitions/classification-rules'],
    },
    {
      type: 'category',
      label: '朝代定义',
      items: ['definitions/dynasties/dynasty-list', 'definitions/dynasties/dynasty-characteristics'],
    },
    {
      type: 'category',
      label: '属性定义',
      items: ['definitions/attributes/ling', 'definitions/attributes/jin', 'definitions/attributes/xiu', 'definitions/attributes/zhedie'],
    },
  ],

  // 朝代侧边栏 - 按历史时期组织汉服，只包含已创建的文档
  dynastiesSidebar: [
    {
      type: 'category',
      label: '唐代汉服',
      items: [
        {
          type: 'category',
          label: '上衣',
          items: [
            {
              type: 'category',
              label: '内衣',
              items: ['dynasties/tang/nei-yi/mo-ru', 'dynasties/tang/nei-yi/mo-fu'],
            },
            {
              type: 'category',
              label: '披袄',
              items: ['dynasties/tang/pi-ao/pi-ao'],
            },
            {
              type: 'category',
              label: '衫袄',
              items: ['dynasties/tang/shan-ao/shan-ao'],
            },
          ],
        },
        {
          type: 'category',
          label: '身衣',
          items: [
            {
              type: 'category',
              label: '袍服',
              items: ['dynasties/tang/shen-yi/pao-fu/yuan-ling-pao'],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '宋代汉服',
      items: [
        {
          type: 'category',
          label: '上衣',
          items: [
            {
              type: 'category',
              label: '内衣',
              items: ['dynasties/song/nei-yi/mo-xiong'],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '明代汉服',
      items: [
        {
          type: 'category',
          label: '下裳',
          items: [
            {
              type: 'category',
              label: '褶裙',
              items: ['dynasties/ming/xia-shang/zhe-qun/ma-mian-qun'],
            },
          ],
        },
      ],
    },
  ],

  // 形制侧边栏 - 按服装类型组织汉服
  categoriesSidebar: [
    {
      type: 'category',
      label: '上衣',
      items: [
        {
          type: 'category',
          label: '衫袄',
          items: [
            {
              type: 'category',
              label: '背子',
              items: [
                'categories/shang-yi/shan-ao/bei-zi/tang-zhi-zhi-ling-bei-zi',
                'categories/shang-yi/shan-ao/bei-zi/tang-zhi-yuan-ling-bei-zi',
              ],
            },
            {
              type: 'category',
              label: '长衫袄',
              items: [
                'categories/shang-yi/shan-ao/chang-shan-ao/song-zhi-chang-shan-ao',
                'categories/shang-yi/shan-ao/chang-shan-ao/ming-zhi-chang-shan-ao',
                'categories/shang-yi/shan-ao/chang-shan-ao/tang-zhi-chang-shan-ao',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
