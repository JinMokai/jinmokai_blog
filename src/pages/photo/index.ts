// 定义 PhotoList 的类型
export interface Photo {
  link: string;
  info: string;
  date: string;
}

export interface PhotoListType {
  [year: string]: Photo[];
}

export const photo: PhotoListType  = {
  "2021": [
    {
      link: "/src/assets/photo/2021/IMG_20210321_184810.jpg",
      info: "2021-3-21日南昌楼梯独照",
      date: "2021-03-21",
    },
    {
      link: "/src/assets/photo/2021/mmexport1616329068492.jpg",
      info: "2021-3-21日与好友张合照",
      date: "2021-03-21",
    },
  ],
  "2022": [
    {
      link: "/src/assets/photo/2022/mmexport1661335245227.jpg",
      info: "2022-8-24日杭州伞博物馆",
      date: "2022-8-24",
    },
  ],
  "2023": [
    {
      link: "/src/assets/photo/2023/IMG_20230107_112445.webp",
      info: "2023-1-7日鄱阳永福寺庙塔拍摄",
      date: "2023-1-7",
    },
    {
      link: "/src/assets/photo/2023/IMG_20230107_103524.jpg",
      info: "2023-1-7日鄱阳楼拍摄",
      date: "2023-1-7",
    },
    {
      link: "/src/assets/photo/2023/20230204.jpg",
      info: "2023-2-4日鄱阳县上士湖鄱阳湖瓦屑坝博物馆湖边",
      date: "2023-2-4",
    },
    {
      link: "/src/assets/photo/2023/IMG_20230218_192205.jpg",
      info: "2023-2-18日新余学院拍摄",
      date: "2023-2-18",
    },
    {
      link: "/src/assets/photo/2023/IMG_20230226_153940.jpg",
      info: "2023-2-26日新余学院图书馆拍摄",
      date: "2023-2-26",
    },
    {
      link: "/src/assets/photo/2023/IMG_20230305_145530.jpg",
      info: "2023-3-5日新余学院行政楼(北)湖",
      date: "2023-3-5",
    },
    {
      link: "/src/assets/photo/2023/IMG_20230313_154713.jpg",
      info: "2023-3-13日新余学院数计楼",
      date: "2023-3-13",
    },
    {
      link: "/src/assets/photo/2023/IMG_20230320_165111.jpg",
      info: "2023-3-13日新余学院数计楼蜜蜂采蜜",
      date: "2023-3-20",
    },
    {
      link: "/src/assets/photo/2023/IMG_20230408_071454.jpg",
      info: "2023-4-7日新余学院图书馆一角",
      date: "2023-4-7",
    },
    {
      link: "/src/assets/photo/2023/IMG_20230428_194553.jpg",
      info: "雨后的晚上，路上没人",
      date: "2023-4-28",
    },
  ],
};
