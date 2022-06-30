const HomePage = "/user";
const ExamPage = "/user/exam";
const ManualDocumentPage = "/user/manual-document";
const CreatePage = "/user/create";
const ResultsPage = "/user/results";

export const navItems = [
    {
      id: 0,
      title: 'Trang chủ',
      url: HomePage,
      cName: 'nav-links',
      submenu: []
    },
    {
      id: 1,
      title: 'Thi THPTQG',
      url: ExamPage,
      cName: 'nav-links',
      submenu: [
        {
            title: 'Toán học',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Vật lý',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Hóa học',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Sinh học',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Địa lý',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Lịch sử',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'GDCD',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tiếng Anh',
            url: "#",
            cName: 'subitem-link'
        },
      ]
    },
    {
      id: 2,
      title: 'Tài liệu',
      url: ManualDocumentPage,
      cName: 'nav-links',
      submenu: [
        {
            title: 'Khối xã hội',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Khối tự nhiên',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tiếng Anh',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Danh sách đề văn',
            url: "#",
            cName: 'subitem-link'
        },
      ]
    },
    {
      id: 3,
      title: 'Nghiệp vụ',
      url: CreatePage,
      cName: 'nav-links',
      submenu: [
        {
            title: 'Thi trắc nghiệm',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tra cứu kết quả',
            url: ResultsPage,
            cName: 'subitem-link'
        },
        {
            title: 'Tạo bài thi',
            url: CreatePage,
            cName: 'subitem-link'
        },
      ]
    },
    {
      id: 5,
      title: 'Đăng xuất',
      url: '#',
      cName: 'nav-links-button',
      submenu: []
    },
]

export const studentItems = [
  {
    id: 0,
    title: 'Trang chủ',
    url: HomePage,
    cName: 'nav-links',
    submenu: []
  },
  {
    id: 1,
    title: 'Thi THPTQG',
    url: ExamPage,
    cName: 'nav-links',
    submenu: [
      {
          title: 'Toán học',
          url: "#",
          cName: 'subitem-link'
      },
      {
          title: 'Vật lý',
          url: "#",
          cName: 'subitem-link'
      },
      {
          title: 'Hóa học',
          url: "#",
          cName: 'subitem-link'
      },
      {
          title: 'Sinh học',
          url: "#",
          cName: 'subitem-link'
      },
      {
          title: 'Địa lý',
          url: "#",
          cName: 'subitem-link'
      },
      {
          title: 'Lịch sử',
          url: "#",
          cName: 'subitem-link'
      },
      {
          title: 'GDCD',
          url: "#",
          cName: 'subitem-link'
      },
      {
          title: 'Tiếng Anh',
          url: "#",
          cName: 'subitem-link'
      },
    ]
  },
  {
    id: 2,
    title: 'Tài liệu',
    url: ManualDocumentPage,
    cName: 'nav-links',
    submenu: [
      {
          title: 'Khối xã hội',
          url: "#",
          cName: 'subitem-link'
      },
      {
          title: 'Khối tự nhiên',
          url: "#",
          cName: 'subitem-link'
      },
      {
          title: 'Tiếng Anh',
          url: "#",
          cName: 'subitem-link'
      },
      {
          title: 'Danh sách đề văn',
          url: "#",
          cName: 'subitem-link'
      },
    ]
  },
  {
    id: 3,
    title: 'Học sinh',
    url: CreatePage,
    cName: 'nav-links',
    submenu: [
      {
          title: 'Thi trắc nghiệm',
          url: "#",
          cName: 'subitem-link'
      },
      {
          title: 'Tra cứu kết quả',
          url: "#",
          cName: 'subitem-link'
      },
    ]
  },
  {
    id: 5,
    title: 'Đăng xuất',
    url: '#',
    cName: 'nav-links-button',
    submenu: []
  },
]
