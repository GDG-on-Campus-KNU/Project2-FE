const dummyBlocks = [
  {
    uid: "1",
    author: {
      nickname: "bh2980",
      profile:
        "https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_960_720.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content:
      "Paragraphs are the building blocks of papers. Without well-written paragraphs that flow logically from one idea to the next and that inform and help support in some meaningful way the central research problem being investigated, your paper will not be viewed as credible with the idea that transitions may be needed between paragraphs or sections in a paper. Sometimes they are also helpful within the body of a single paragraph. Within a paragraph, transitions are often single words or short phrases that help to establish relationships between ideas and to create a logical progression of those ideas in a paragraph. This is especially true within paragraphs that discuss multiple examples or discuss complex ideas, issues, or concepts. Arnaudet, Martin L. and Mary Ellen Barrett. Paragraph Development: A Guide for Students of English. 2nd edition. Englewood Cliffs, NJ: Prentice Hall Regents, 1990; Paragraph Development: Importance of Constructing Good Paragraphs. AP English Literature and Composition. Edublogs, 2012; Paragraphing. Centre for Applied Linguistics. University of Warwick.",
    images: [
      "https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/03/01/20/58/peace-genius-7042013__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "2",
    author: {
      nickname: "dogcat",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "3",
    author: {
      nickname: "mintchoco",
      profile:
        "https://media.istockphoto.com/photos/pizza-with-pineapple-and-ham-on-white-background-picture-id503580316?b=1&k=20&m=503580316&s=170667a&w=0&h=K6x0CN7Qk8JuvdEYvhqcvWULDUh1XCf_jJVjN3MRJ30=",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "민트초코 vs 하와이안 피자",
    images: [
      "https://media.istockphoto.com/photos/mint-ice-cream-cup-on-table-isolated-close-up-picture-id1147950814?b=1&k=20&m=1147950814&s=170667a&w=0&h=qJy6QXTumvAI5-cTJF-Fg2RIC9cA7TeIwfZjWNgyplE=",
      "https://media.istockphoto.com/photos/pizza-hawaii-picture-id462460173?b=1&k=20&m=462460173&s=170667a&w=0&h=yTbz_JxONLluOOzd--qBVhsZWOZW3sRonlTN3jbbKjU=",
    ],
    recomment: 0,
  },
  {
    uid: "4",
    author: {
      nickname: "arfbjbwaedk",
      profile:
        "https://cdn.pixabay.com/photo/2015/02/02/15/28/bar-621033__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "Apple vs Android",
    images: [
      "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__340.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "5",
    author: {
      nickname: "afhanejf",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "6",
    author: {
      nickname: "paoegfbwjsd",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "7",
    author: {
      nickname: "fjdafkjds",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "8",
    author: {
      nickname: "qwdsabkjnsa",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "9",
    author: {
      nickname: "qwerty",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "10",
    author: {
      nickname: "finish",
      profile:
        "https://cdn.pixabay.com/photo/2021/12/17/17/00/butterfly-6876992__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content:
      "우리는 소셜 미디어 기능의 제공과 데이터 분석 및 본 사이트가 올바로 동작하고 개인화된 콘텐츠와 광고를 제공하기 위해 쿠키를 사용하고 있습니다. 회사 사이트에 대한 귀하의 사용 정보를 회사의 소셜 미디어, 광고 및 분석 협력사와 공유합니다.",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "1",
    author: {
      nickname: "bh2980",
      profile:
        "https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_960_720.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content:
      "Paragraphs are the building blocks of papers. Without well-written paragraphs that flow logically from one idea to the next and that inform and help support in some meaningful way the central research problem being investigated, your paper will not be viewed as credible with the idea that transitions may be needed between paragraphs or sections in a paper. Sometimes they are also helpful within the body of a single paragraph. Within a paragraph, transitions are often single words or short phrases that help to establish relationships between ideas and to create a logical progression of those ideas in a paragraph. This is especially true within paragraphs that discuss multiple examples or discuss complex ideas, issues, or concepts. Arnaudet, Martin L. and Mary Ellen Barrett. Paragraph Development: A Guide for Students of English. 2nd edition. Englewood Cliffs, NJ: Prentice Hall Regents, 1990; Paragraph Development: Importance of Constructing Good Paragraphs. AP English Literature and Composition. Edublogs, 2012; Paragraphing. Centre for Applied Linguistics. University of Warwick.",
    images: [
      "https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/03/01/20/58/peace-genius-7042013__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "2",
    author: {
      nickname: "dogcat",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "3",
    author: {
      nickname: "mintchoco",
      profile:
        "https://media.istockphoto.com/photos/pizza-with-pineapple-and-ham-on-white-background-picture-id503580316?b=1&k=20&m=503580316&s=170667a&w=0&h=K6x0CN7Qk8JuvdEYvhqcvWULDUh1XCf_jJVjN3MRJ30=",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "민트초코 vs 하와이안 피자",
    images: [
      "https://media.istockphoto.com/photos/mint-ice-cream-cup-on-table-isolated-close-up-picture-id1147950814?b=1&k=20&m=1147950814&s=170667a&w=0&h=qJy6QXTumvAI5-cTJF-Fg2RIC9cA7TeIwfZjWNgyplE=",
      "https://media.istockphoto.com/photos/pizza-hawaii-picture-id462460173?b=1&k=20&m=462460173&s=170667a&w=0&h=yTbz_JxONLluOOzd--qBVhsZWOZW3sRonlTN3jbbKjU=",
    ],
    recomment: 0,
  },
  {
    uid: "4",
    author: {
      nickname: "arfbjbwaedk",
      profile:
        "https://cdn.pixabay.com/photo/2015/02/02/15/28/bar-621033__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "Apple vs Android",
    images: [
      "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__340.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "5",
    author: {
      nickname: "afhanejf",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "6",
    author: {
      nickname: "paoegfbwjsd",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "7",
    author: {
      nickname: "fjdafkjds",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "8",
    author: {
      nickname: "qwdsabkjnsa",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "9",
    author: {
      nickname: "qwerty",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "10",
    author: {
      nickname: "finish",
      profile:
        "https://cdn.pixabay.com/photo/2021/12/17/17/00/butterfly-6876992__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content:
      "우리는 소셜 미디어 기능의 제공과 데이터 분석 및 본 사이트가 올바로 동작하고 개인화된 콘텐츠와 광고를 제공하기 위해 쿠키를 사용하고 있습니다. 회사 사이트에 대한 귀하의 사용 정보를 회사의 소셜 미디어, 광고 및 분석 협력사와 공유합니다.",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "1",
    author: {
      nickname: "bh2980",
      profile:
        "https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_960_720.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content:
      "Paragraphs are the building blocks of papers. Without well-written paragraphs that flow logically from one idea to the next and that inform and help support in some meaningful way the central research problem being investigated, your paper will not be viewed as credible with the idea that transitions may be needed between paragraphs or sections in a paper. Sometimes they are also helpful within the body of a single paragraph. Within a paragraph, transitions are often single words or short phrases that help to establish relationships between ideas and to create a logical progression of those ideas in a paragraph. This is especially true within paragraphs that discuss multiple examples or discuss complex ideas, issues, or concepts. Arnaudet, Martin L. and Mary Ellen Barrett. Paragraph Development: A Guide for Students of English. 2nd edition. Englewood Cliffs, NJ: Prentice Hall Regents, 1990; Paragraph Development: Importance of Constructing Good Paragraphs. AP English Literature and Composition. Edublogs, 2012; Paragraphing. Centre for Applied Linguistics. University of Warwick.",
    images: [
      "https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/03/01/20/58/peace-genius-7042013__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "2",
    author: {
      nickname: "dogcat",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "3",
    author: {
      nickname: "mintchoco",
      profile:
        "https://media.istockphoto.com/photos/pizza-with-pineapple-and-ham-on-white-background-picture-id503580316?b=1&k=20&m=503580316&s=170667a&w=0&h=K6x0CN7Qk8JuvdEYvhqcvWULDUh1XCf_jJVjN3MRJ30=",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "민트초코 vs 하와이안 피자",
    images: [
      "https://media.istockphoto.com/photos/mint-ice-cream-cup-on-table-isolated-close-up-picture-id1147950814?b=1&k=20&m=1147950814&s=170667a&w=0&h=qJy6QXTumvAI5-cTJF-Fg2RIC9cA7TeIwfZjWNgyplE=",
      "https://media.istockphoto.com/photos/pizza-hawaii-picture-id462460173?b=1&k=20&m=462460173&s=170667a&w=0&h=yTbz_JxONLluOOzd--qBVhsZWOZW3sRonlTN3jbbKjU=",
    ],
    recomment: 0,
  },
  {
    uid: "4",
    author: {
      nickname: "arfbjbwaedk",
      profile:
        "https://cdn.pixabay.com/photo/2015/02/02/15/28/bar-621033__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "Apple vs Android",
    images: [
      "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__340.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "5",
    author: {
      nickname: "afhanejf",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "6",
    author: {
      nickname: "paoegfbwjsd",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "7",
    author: {
      nickname: "fjdafkjds",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "8",
    author: {
      nickname: "qwdsabkjnsa",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "9",
    author: {
      nickname: "qwerty",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "10",
    author: {
      nickname: "finish",
      profile:
        "https://cdn.pixabay.com/photo/2021/12/17/17/00/butterfly-6876992__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content:
      "우리는 소셜 미디어 기능의 제공과 데이터 분석 및 본 사이트가 올바로 동작하고 개인화된 콘텐츠와 광고를 제공하기 위해 쿠키를 사용하고 있습니다. 회사 사이트에 대한 귀하의 사용 정보를 회사의 소셜 미디어, 광고 및 분석 협력사와 공유합니다.",
    images: [
      "https://cdn.pixabay.com/photo/2022/01/28/11/02/hydrangea-6974362__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "1",
    author: {
      nickname: "bh2980",
      profile:
        "https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_960_720.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content:
      "Paragraphs are the building blocks of papers. Without well-written paragraphs that flow logically from one idea to the next and that inform and help support in some meaningful way the central research problem being investigated, your paper will not be viewed as credible with the idea that transitions may be needed between paragraphs or sections in a paper. Sometimes they are also helpful within the body of a single paragraph. Within a paragraph, transitions are often single words or short phrases that help to establish relationships between ideas and to create a logical progression of those ideas in a paragraph. This is especially true within paragraphs that discuss multiple examples or discuss complex ideas, issues, or concepts. Arnaudet, Martin L. and Mary Ellen Barrett. Paragraph Development: A Guide for Students of English. 2nd edition. Englewood Cliffs, NJ: Prentice Hall Regents, 1990; Paragraph Development: Importance of Constructing Good Paragraphs. AP English Literature and Composition. Edublogs, 2012; Paragraphing. Centre for Applied Linguistics. University of Warwick.",
    images: [
      "https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/03/01/20/58/peace-genius-7042013__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg",
    ],
    recomment: 0,
  },
  {
    uid: "2",
    author: {
      nickname: "dogcat",
      profile:
        "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475__340.jpg",
    },
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    category: "all",
    content: "개 vs 고양이",
    images: [
      "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg",
    ],
    recomment: 0,
  },
];

export default dummyBlocks;
